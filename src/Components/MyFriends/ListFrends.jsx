import React from "react";
import styled from "styled-components";
import img from "assets/images/phote.png";


const StyledFriendsList = styled.div`
    .list__item {
        display: flex;
        flex-direction: row;
        background-color: rgba(49, 46, 46, 0.863);
        padding: 10px 30px;
        margin-top: 5px;
    }

    .avator {
        width: 100px;
        height: 100px;
        border: 3px solid rgb(165, 140, 1);
        border-radius: 50%;
        margin-right: 50px;
        overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        
    }   
    }

    .list__name {
        padding: 30px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        span {
            font-weight: 400;
            color: rgb(165, 140, 1);
        }
    }
`

const ListFrends = (props) => {
    return (
        <StyledFriendsList>
            <div className={"list__item"}>
                <div className={"avator"}>
                    <img src={img} />
                </div>
                <h3 className={"list__name"}>
                    <span>{props.Name}</span> <span>{props.FirstName}</span>
                </h3>
            </div>
        </StyledFriendsList>
    )
}
export default ListFrends;