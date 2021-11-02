import React from "react";
import styled from "styled-components";
import { ROUTE, PATHS } from "Routing/routing";
import { Link, useParams } from "react-router-dom";
import svg from "assets/svg/my_profile.svg";

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
    
    .svg {
        border-radius: 50%;
        background-color: rgb(165, 140, 1);
        width: 20px;
        display: flex;
        align-items: center;
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
    const urlParams = useParams();

    return (
        <StyledAccount>
            <div className={"container"}>
                <div className={"wrap"}>
                    <aside className={"aside__account"}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={PATHS.PROFILE(urlParams.userID)} className={"link__aside"}>
                                        <img className={"svg"} src={svg} />
                                        Мой профиль
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.FRIENDS(urlParams.userID)} className={"link__aside"}>
                                        Друзья
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.MESSAGES(urlParams.userID)} className={"link__aside"}>
                                        Сообщения
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.MUSIC(urlParams.userID)} className={"link__aside"}>
                                        Музыка
                                    </Link>
                                </li>
                                <li>
                                    <Link to={PATHS.NEWS(urlParams.userID)} className={"link__aside"}>
                                        Новости
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"} className={"link__aside"}>
                                        Выйти
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