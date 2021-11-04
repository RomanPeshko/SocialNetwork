import React, { useState } from "react";
import loginPage from "Scenes/LoginPage/loginPage.module.scss";
import { Link, useHistory } from "react-router-dom";
import { PATHS, ROUTE } from "Routing/routing";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { Formik, Form } from "formik";
import FormikInput from "Components/FormikInput/FormikInput";
import { formValidLogin } from "./formValidLogin";

const LoginPage = () => {
    const history = useHistory();
    const userFind = useSelector(userSelector);

    const logIn = (formData) => {
        const user = userFind.find(x => x.email === formData.email);
        console.log(user)
        if (!user) {
            alert('Не верный логин');
        } else if (user.email === formData.email && user.password !== formData.password) {
            alert('Не верный пароль');

        } else if (user.email === formData.email && user.password === formData.password) {
            history.push(PATHS.NEWS(user.userId))
        }

    }

    

    return (
        <div className={loginPage.wrap}>

            <Formik initialValues={{}}
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