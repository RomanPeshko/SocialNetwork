import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ROUTE, PATHS } from "Routing/routing";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import SvgProfile from "assets/svg/profile.svg";
import SvgMessages from "assets/svg/messages.svg";
import SvgMusic from "assets/svg/music.svg";
import SvgFriends from "assets/svg/friends.svg";
import SvgNews from "assets/svg/news.svg";
import { useSelector } from "react-redux";
import { searchForMyMessage } from "api/message";
import { userSelector } from "store/selectors/user";
import { logOutUser, logOutFriend, logOutRecord, logOutMessage } from "store/action/user/logOutUser";

const StyledAccount = styled.div`
    .container {
        max-width: 1170px;
        padding: 0 15px;
        margin: auto;
        position: relative;
        z-index: 1;
    }
    .wrap {
        display: flex;
        width: 100%;
    }
    
    .aside__account {
        margin-top: 55px;
        width: 25%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 1);
        padding: 15px 0;
        border-radius: 5px;
        nav {
            width: 100%;
            ul {
                display: flex;
                flex-direction: column;
                li {
                    color: white;
                }
            }
        }
    }
    .row__icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
            margin-left: 10px;
            padding: 3px;
            border-radius: 5px;
            font-size: 22px;
            color: rgba(250, 2, 2, 0.616);
            background-color:rgba(250, 2, 2, 0.37);
        }
    }
    
    .svg {
        color: white;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        margin-right: 10px;
    }

    .link__aside {
        color: white;
        width: 100%;
        display: block;
        padding: 15px 30px;
        border-radius: 5px;
        font-size: 20px;
        
        &:hover {
            background-color: rgba(36, 36, 36, 1);
        }
        &:active {
            color: black;
            background-color: white;
        }
    }
    .link__aside-button {
        border: 0;
        text-align: left;
        color: white;
        width: 100%;
        display: block;
        padding: 15px 30px;
        border-radius: 5px;
        font-size: 20px;
        background-color: rgba(36, 36, 36, 0);
        cursor: pointer;
        
        &:hover {
            background-color: rgba(36, 36, 36, 1);
        }
        &:focus {
            color: black;
            background-color: white;
        }
    }
    
    .section {
        
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(36, 36, 36, 0);
        width: 100%;
        margin-top: 55px;
    }
    `;



const Account = (props) => {
    const history = useHistory();
    const user = useSelector(userSelector);
    const urlParams = useParams();
    const dispatch = useDispatch();
    const [unreadMessages, setUnreadMessages] = useState(0);

    const logOut = () => {
        dispatch(logOutUser());
        dispatch(logOutFriend());
        dispatch(logOutRecord());
        dispatch(logOutMessage());
        history.push("/");
    }



    useEffect(() => {
        searchForMyMessage(user.userID)
            .then((data) => {
                const listUnread = [];
                if (data) {
                    for (const element of data.data) {
                        for (const messageList of element.messages) {
                            if (messageList.status === 'unread') {
                                console.log(messageList.status)
                                listUnread.push(messageList.status)
                            }
                        }

                    }
                    setUnreadMessages(listUnread.length)
                }

            })
    })



    return (
        <StyledAccount>
            <div className={"container"}>
                <div className={"wrap"}>
                    <aside className={"aside__account"}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={PATHS.PROFILE(urlParams.userID)} className={"link__aside"}>
                                        <div className={"row__icon"}>
                                            <SvgProfile className={"svg"} />
                                            <p>Мой профиль</p>
                                        </div>

                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.FRIENDS(urlParams.userID)} className={"link__aside"}>
                                        <div className={"row__icon"}>
                                            <SvgFriends className={"svg"} />
                                            <p>Друзья</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.MESSAGES(urlParams.userID)} className={"link__aside"}>
                                        <div className={"row__icon"}>
                                            <SvgMessages className={"svg"} />
                                            <p>Сообщения</p>{unreadMessages ? <span>{unreadMessages}</span> : ''}
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.MUSIC(urlParams.userID)} className={"link__aside"}>
                                        <div className={"row__icon"}>
                                            <SvgMusic className={"svg"} />
                                            <p>Музыка</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.NEWS(urlParams.userID)} className={"link__aside"}>
                                        <div className={"row__icon"}>
                                            <SvgNews className={"svg"} />
                                            <p>Новости</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={logOut} className={"link__aside-button"}>
                                        Выйти
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <section className={"section"}>
                        {props.children}
                    </section>
                </div>
            </div>
        </StyledAccount>

    )
}

export default Account;