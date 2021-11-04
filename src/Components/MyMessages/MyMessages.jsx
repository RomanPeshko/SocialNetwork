import React from "react";
import styled from "styled-components";

const StyledMessages = styled.div`
    .messages__row {
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .title__messages {
        color: rgb(165, 140, 1);
        &::after {
            content: '';
            display: block;
            height: 3px;
            width: 100%;
            background-color: rgb(165, 140, 1);
            margin-top: 10px;
            margin-bottom: 30px;
            
    } 
    }
`;

const MyMessages = () => {
    return (
        <StyledMessages>
            <div className={"messages__row"}>
                <div className={"title__messages"}>
                    Сообщения
                </div>
            </div>
        </StyledMessages>
    )
}

export default MyMessages;