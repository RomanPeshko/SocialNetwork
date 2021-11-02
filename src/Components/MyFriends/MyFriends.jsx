import React from "react";
import styled from "styled-components";

const StyledFriends = styled.div`
    .friends__row {
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .title__riends {
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



const MyFriends = () => {
    

    return (
        <StyledFriends>
            <div className={"friends__row"}>
                <div className={"title__riends"}>
                    Друзья
                </div>
            </div>
        </StyledFriends>
    )
}

export default MyFriends;