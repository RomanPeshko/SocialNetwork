import React, { useState } from "react";
import img from "assets/images/phote.png";
import styled from "styled-components";



const StyledModalWindowCreateMessage = styled.div`
.modul-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .avator {
        width: 70px;
        height: 70px;
        border: 3px solid rgb(165, 140, 1);
        border-radius: 50%;
        margin-right: 50px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        
        }
    }


    .list__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
    }

    .list__name {
        color: 1px solid rgb(165, 140, 1);
        span {
            font-weight: 400;
            color: rgb(165, 140, 1);
            
        }
    }

    .button__item {
        display: flex;
        justify-content: flex-end;
    }

    .button__closeModal {
        border: 0;
        margin-bottom: 10px;
        cursor: pointer;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.4);
        background-color: rgba(0, 0, 0, 0);
        &:hover {
            color: rgba(0, 0, 0, 1);    
        }
    }
    .modul-discription {
        display: flex;
        flex-direction: column;
        label {
            color: rgb(165, 140, 1);
            margin-bottom: 5px;
        }
        textarea {
            width: 100%;
            padding: 5px 10px;
            margin-bottom: 5px;
            border: 0;
            border-radius: 5px;
            resize: none;
            outline: none;
            border: 2px solid rgb(165, 140, 1);
            margin-bottom: 10px;
        }
    }

    .bytton-modul {
        padding: 5px 10px;
        background-color: rgb(40, 71, 250);
        border: 0;
        border: 1px solid rgb(4, 22, 128);
        border-radius: 5px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.616);
        transition: 0.2s;
        margin-top: 5px;
        &:hover {
            transform:scale(1.02, 1.02)
        }
        &:active {
            transform:scale(1)
    }
    }
`;

const ModalCreateMessage = (props) => {
    const [message, setMessage] = useState('');




    return (
        <StyledModalWindowCreateMessage>
            <div className={"modul-container"} >
                <div className={"button__item"}>
                    <button className={'button__closeModal'} onClick={() => { props.openModal(false) }} type="button">X</button>
                </div>
                <div className={"list__item"}>
                    <div className={"avator"}>
                        <img src={img} />
                    </div>
                    <div className={"list__name"}>
                        <span>{props.Name}</span> <span>{props.FirstName}</span>
                    </div>
                </div>
                <div className={"modul-discription"}>
                    <label >Сообщение:</label>
                    <textarea onChange={(event) => { setMessage(event.target.value) }} type="text" ></textarea>
                </div>
                <button className={"bytton-modul"} onClick={() => {
                    if (message !== '') {
                        props.createANewMessage(message, Number(props.userID), props.senderID, props.senderName, props.senderFirstName)
                        props.openModal(false)
                    }
                }} type="button" id="submitModul-add">Отправить</button>
            </div>
        </StyledModalWindowCreateMessage>
    )
}

export default ModalCreateMessage;