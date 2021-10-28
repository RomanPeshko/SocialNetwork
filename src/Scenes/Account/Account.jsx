import React from "react";
import styled from "styled-components";
import { ROUTE } from "Routing/routing";
import { Link } from "react-router-dom";

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
        width: 20%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 1);
        padding: 15px 3px;
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


    return (
        <StyledAccount>
            <div className={"container"}>
                <div className={"wrap"}>
                    <aside className={"aside__account"}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={ROUTE.PROFILE} className={"link__aside"}>
                                        Мой профиль
                                    </Link>
                                </li>
                                <li>
                                    <Link to={ROUTE.FRIENDS} className={"link__aside"}>
                                        Друзья
                                    </Link>
                                </li>
                                <li>
                                    <Link to={ROUTE.MESSAGES} className={"link__aside"}>
                                        Сообщения
                                    </Link>
                                </li>
                                <li>
                                    <Link to={ROUTE.MUSIC} className={"link__aside"}>
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