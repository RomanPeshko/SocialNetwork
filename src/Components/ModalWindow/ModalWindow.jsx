import React, { useEffect, memo, useRef } from "react";
import styled from "styled-components";



const StyledModalWindow = styled.div`
    .modal-fon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        background-color: rgba(0, 0, 0, 0.65);
    }

    .modal {
        padding: 25px;
        border-radius: 5px;
        background-color: rgba(255, 248, 248, 1);
        width: 500px;
        margin: auto;
        margin-top: 150px;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.7);

    }

`;



const ModalWindow = (props) => {
    return (
        <StyledModalWindow>
            <div className={"modal-fon"}>
                <div className={"modal"}>
                    {props.children}
                </div>
            </div>
        </StyledModalWindow>
    )
}

export default memo(ModalWindow);