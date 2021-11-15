import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newUserAdd } from "store/action/newUserAdd";
import { PATHS, ROUTE } from "Routing/routing";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import FormikInput from "Components/FormikInput/FormikInput";
import { formValid } from "./formValid";
import { registerUser } from "api/instance";


const StyledRegistration = styled.div`
    .form__registration {
        padding: 25px;
        border-radius: 5px;
        background-color: rgb(255, 255, 255);
        width: 500px;
        margin: auto;
        margin-top: 150px;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.7);
    }
    .submit__form {
        color: white;
        display: block;
        width: 100%;
        text-align: center;
        font-family:'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        margin-bottom: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 5px;
        border-radius: 5px; 
        cursor: pointer;
    }
`;


const Registration = () => {
    const dispatch = useDispatch();
    const history = useHistory();





    return (

        <StyledRegistration>
            <div className={"form__registration"}>
                <Formik initialValues={{email: '', password: '', Name: '', FirstName: '', City: '', Birthday: ''}}
                    onSubmit={(formData) => {
                        console.log("form submitted", formData)
                        registerUser(formData.Birthday, formData.City, formData.FirstName, formData.Name, formData.password, formData.email)
                            .then(({ data }) => {
                                dispatch(newUserAdd(formData.Birthday, formData.City, formData.FirstName, formData.Name, data));
                                history.push(PATHS.NEWS(data));
                            })
                    }}
                    validate={formValid}>

                    <Form>
                        <FormikInput placeholder={"Email"} name={'email'} />
                        <FormikInput placeholder={"Пароль"} name={'password'} />
                        <FormikInput placeholder={"Имя"} name={'Name'} />
                        <FormikInput placeholder={"Фамилия"} name={'FirstName'} />
                        <FormikInput placeholder={"Город"} name={'City'} />
                        <FormikInput placeholder={"День Рождения(1 января 1900)"} name={'Birthday'} />
                        <button type={"submit"}
                            className={"submit__form"}>Создать</button>
                    </Form>

                </Formik>
            </div>
        </StyledRegistration>
    )
}

export default Registration;