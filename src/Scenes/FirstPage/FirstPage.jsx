import React from "react";
import firstPage from "Scenes/FirstPage/firstPage.module.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "Routing/routing";

const FirstPage = () => {
    return (
        <React.Fragment>
            <div className={firstPage.wrap}>
                <input type="email" placeholder="Логин" className={firstPage.inputEmail} />
                <input type="password" placeholder="Пароль" className={firstPage.inputPassword} />
                <div>
                    <Link to={ROUTE.ACCOUNT} className={firstPage.link}>
                        Войти
                    </Link>
                </div>
                <div>
                    <Link to={ROUTE.REGISTRATION} className={firstPage.link}>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FirstPage;