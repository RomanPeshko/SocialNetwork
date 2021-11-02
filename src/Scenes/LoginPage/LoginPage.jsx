import React, { useState } from "react";
import loginPage from "Scenes/LoginPage/loginPage.module.scss";
import { Link, useHistory } from "react-router-dom";
import { PATHS, ROUTE } from "Routing/routing";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";

const LoginPage = () => {
    const history = useHistory();
    const userFind = useSelector(userSelector);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
        const user = userFind.find(x => x.email === login);
        if (!user) {
            alert('Не верный логин');
        } else if (user.email === login && user.password !== password) {
            alert('Не верный пароль');

        } else if (user.email === login && user.password === password) {
            history.push(PATHS.NEWS(user.userId))
        }
    }

    return (
        <React.Fragment>
            <div className={loginPage.wrap}>


                <input type="email" placeholder="Логин" className={loginPage.inputEmail}
                    onChange={(event) => { setLogin(event.target.value) }}
                    value={login} />
                <input type="password" placeholder="Пароль" className={loginPage.inputPassword}
                    onChange={(event) => { setPassword(event.target.value) }}
                    value={password} />
                <div>
                    <button onClick={() => { logIn() }} className={loginPage.link}>
                        Войти
                    </button>
                </div>
                <div>
                    <Link to={ROUTE.REGISTRATION} className={loginPage.link}>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;