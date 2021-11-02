import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const StyledInputForm = styled.div`
    .input__form {
        width: 100%;
        margin-bottom: 15px;
        padding: 3px;
        border: 0;
        border-bottom: 1px solid rgba(49, 46, 46, 0.863);
    }
    .input__error {
        color: red;
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: -15px;
    }
`;

const FormikInput = (props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        <StyledInputForm>
            <input {...field} placeholder={props.placeholder} className={"input__form"}/>
            {(meta.touched && meta.error) &&
                <div className={"input__error"}>
                    {meta.error}
                </div>
            }
        </StyledInputForm>
    )
}


export default FormikInput;