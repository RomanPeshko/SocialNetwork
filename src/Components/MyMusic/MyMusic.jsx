import React from "react";
import styled from "styled-components";

const StyledMusic = styled.div`
    .music__row {
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .title__music {
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

const MyMusic = () => {
    return (
        <StyledMusic>
            <div className={"music__row"}>
                <div className={"title__music"}>
                    Музыка
                </div>
            </div>
        </StyledMusic>
    )
}

export default MyMusic;