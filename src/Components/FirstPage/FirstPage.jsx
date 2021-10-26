import React from "react";
import firstPage from "Components/FirstPage/firstPage.module.scss";
import { Link } from "react-router-dom";

const FirstPage = () => {
    return (
        <React.Fragment>
            <div className={firstPage.wrap}>
                <input type="email" placeholder="Логин" className={firstPage.inputEmail} />
                <input type="password" placeholder="Пароль" className={firstPage.inputPassword} />
                <div>
                    <Link to={"/account"} className={firstPage.link}>
                        Войти
                    </Link>
                </div>
                <div>
                    <Link to={"/registration"} className={firstPage.link}>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FirstPage;