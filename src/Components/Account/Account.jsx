import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Account = (props) => {
    const StyledAccount = styled.div`
    .wrap {
        display: flex;
        position: fixed;
        width: 100%;
    }
    
    .aside__account {
        width: 20%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 1);
        padding: 15px 3px;
        border-radius: 0 5px 5px 0;
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
    
    .link__aside {
        color: white;
        width: 100%;
        display: block;
        padding: 15px 30px;
        border-radius: 0 5px 5px 0;
        font-family: Bradley Hand;
        font-size: 20px;
        
        &:hover {
            background-color: rgba(36, 36, 36, 1);
        }
        &:focus {
            color: black;
            background-color: white;
        }
    }
    
    .section {
        overflow-x: scroll;
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(36, 36, 36, 0);
        width: 100%;
    }
    `

    return (
        <StyledAccount>
            <div className={"container"}>
                <div className={"wrap"}>
                    <aside className={"aside__account"}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={"/account/myProfile"} className={"link__aside"}>
                                        Мой профиль
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/account/myFriends"} className={"link__aside"}>
                                        Друзья
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/account/myMessages"} className={"link__aside"}>
                                        Сообщения
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/account/myMusic"} className={"link__aside"}>
                                        Музыка
                                    </Link>
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