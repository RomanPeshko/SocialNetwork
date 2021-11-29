import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { searchForMyMessage } from "api/message";

const StyledMessagesChat = styled.div`
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
        padding: 25px;
        width: 100%;
        background-color: rgba(49, 46, 46, 0.863);
        overflow-y: scroll;
        scroll-behavior: smooth;
        margin-bottom: 25px;
        border-radius: 5px;
        color: rgba(255, 255, 255, 0.616);
        box-shadow: inset 0 0 5px 1px rgba(10, 10, 10, 0.863);
        p {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .item__messages {
        border: 3px solid rgb(165, 140, 1);
        border-radius: 5px;
        padding: 25px 25px 0;
        background-color: rgba(255, 248, 248, 0.863);
        box-shadow: inset 0 0 5px 1px rgba(10, 10, 10, 0.863);
    }

    .title__messages {
        color: rgb(165, 140, 1);
        margin: auto;
        margin-bottom: 30px;
    }

    .date {
        border-left: 2px solid rgba(10, 10, 10, 0.5);
        padding-left: 5px;
        width: 150px;
    }

`;

const MessageChat = () => {
    const user = useSelector(userSelector);
    const id = useParams();
    const [messages, setMessages] = useState([]);
    const [userData, setUserData] = useState('');

    useEffect(() => {
        searchForMyMessage(user.userID)
            .then((data) => {

                if (data) {
                    const listMessage = data.data.find(user => user.senderID === Number(id.userID));
                    setUserData(listMessage)
                    setMessages(listMessage.messages);
                }

            })
    }, [])





    return (
        <StyledMessagesChat>
            <div className={"messages__row"}>
                <div className={"title__messages"}>
                    <span>{userData.senderName}</span> <span>{userData.senderFirstName}</span>
                </div>
                <div className="item__messages">
                    {messages ? messages.map((message, index) => {
                        return (
                            <div key={index}>
                                <div className={"scroll"}>
                                    <div key={message.date} >
                                        <p>
                                            <span>
                                                {message.message}
                                            </span>
                                            <span className={'date'}>
                                                {message.date}
                                            </span>
                                        </p>
                                    </div>
                                </div>


                            </div>
                        )
                    }) : ''}
                </div>


            </div>
        </StyledMessagesChat>
    )
}

export default MessageChat;