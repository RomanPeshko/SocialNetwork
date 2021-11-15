import React, { useState } from "react";
import loginPage from "Scenes/LoginPage/loginPage.module.scss";
import { Link, useHistory } from "react-router-dom";
import { PATHS, ROUTE } from "Routing/routing";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { Formik, Form } from "formik";
import FormikInput from "Components/FormikInput/FormikInput";
import { formValidLogin } from "./formValidLogin";
import { loginedUser } from "api/instance";
import { logined } from "store/action/logInUser";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const history = useHistory();
    const userFind = useSelector(userSelector);
    const dispatch = useDispatch();

    const logIn = (formData) => {
        loginedUser(formData.email)
            .then((data) => {
                if (!data) {
                    alert('Не верный логин');
                } else if (data.email === formData.email && data.password !== formData.password) {
                    alert('Не верный пароль');

                } else if (data.email === formData.email && data.password === formData.password) {
                    dispatch(logined(data.Birthday, data.City, data.FirstName, data.Name, data.userID))
                    history.push(PATHS.NEWS(data.userID))
                }
            })

    }



    return (
        <div className={loginPage.wrap}>

            <Formik initialValues={{ email: '', password: '' }}
                onSubmit={logIn}
                validate={formValidLogin}>

                <Form>
                    <FormikInput placeholder={"Логин"} name={'email'} />
                    <FormikInput placeholder={"Пароль"} name={'password'} />

                    <button type={"submit"}
                        className={loginPage.link}>
                        Войти
                    </button>

                </Form>

            </Formik>
            <div>
                <Link to={ROUTE.REGISTRATION} className={loginPage.link}>
                    Зарегистрироваться
                </Link>
            </div>

        </div>
    )
}

export default LoginPage;