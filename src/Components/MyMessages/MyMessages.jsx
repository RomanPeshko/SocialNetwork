import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { PATHS } from "Routing/routing";
import styled from "styled-components";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { searchForMyMessage, changeToReadStatus } from "api/message";


const StyledMessages = styled.div`
    .messages__row {
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }
    .scroll {
        height: 100px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    .title__messages {
        color: rgb(165, 140, 1);
        &::after {
            content: '';
            display: block;
            height: 3px;
            width: 100%;
            background-color: rgb(165, 140, 1);
            margin-top: 10px;
            margin-bottom: 30px;
            
    } 
    }
    .list__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(49, 46, 46, 0.863);
        padding: 10px 30px;
        margin-top: 5px;
        p {
            width: 500px;
            margin-top: 15px;
            color: rgba(255, 255, 255, 0.616);
            border-radius: 5px;
           
            padding: 10px;
            box-shadow: inset 0 0 5px 1px rgba(10, 10, 10, 0.863);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            span {
                font-size: 14px;
            }
        }
    }

    .status {
        color: rgba(255, 255, 255, 0.616);
        margin-left: 25px;
    }
    .unread {
        background-color: rgba(250, 2, 2, 0.37);
    }
    .read {
        background-color: rgba(66, 65, 65, 0.863);
    }

    .avator {
        width: 100px;
        height: 100px;
        border: 3px solid rgb(165, 140, 1);
        border-radius: 50%;
        margin-right: 50px;
        overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        
    }   
    }
    .date {
        border-left: 2px solid rgba(10, 10, 10, 0.5);
        padding-left: 5px;
        width: 150px;
    }

    .list__name {
        cursor: pointer;
        span {
            font-weight: 400;
            color: rgb(165, 140, 1);
            
        }
    }
`;

const MyMessages = () => {
    const history = useHistory();
    const user = useSelector(userSelector);
    const [myMessages, setMyMessages] = useState([]);

    useEffect(() => {
        searchForMyMessage(user.userID)
            .then((data) => {

                if (data) {
                    setMyMessages(data.data);
                }

            })
    }, [])


    const userChat = (userID) => {
        history.push(PATHS.USER_CHAT(user.userID, userID));
        changeToReadStatus(user.userID, userID)
            .then((data) => {
                console.log('change To Read', data)
            })
    }


    return (
        <StyledMessages>
            <div className={"messages__row"}>
                <div className={"title__messages"}>
                    Сообщения
                </div>
                {myMessages ? myMessages.map((message, index) => {
                    return (
                        <div key={index}>
                            <div className={"list__item"}>
                                <div className={"avator"}>
                                    <img src={img} />
                                </div>
                                <div>
                                    <h3 className={"list__name"} onClick={() => {
                                        userChat(message.senderID)
                                    }}>
                                        <span>{message.senderName}</span> <span>{message.senderFirstName}</span>
                                    </h3>
                                    <p className={`${message.messages[0].status === 'unread' ? 'unread' : 'read'}`}>
                                        <span>
                                            {message.messages[0].message}
                                        </span>
                                        <span className={'date'}>
                                            {message.messages[0].date}
                                        </span>
                                    </p>
                                </div>
                                <span className={'status'}>{message.messages[0].status === 'unread' ? 'Не прочитано' : 'Прочитано!'}</span>
                            </div>
                        </div>
                    )
                }) : ''}

            </div>
        </StyledMessages>
    )
}

export default MyMessages;