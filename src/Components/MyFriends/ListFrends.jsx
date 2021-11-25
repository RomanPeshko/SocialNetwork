import React from "react";
import styled from "styled-components";
import img from "assets/images/phote.png";



const StyledFriendsList = styled.div`
    .list__item {
        display: flex;
        flex-direction: row;
        align-items: center;
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
        cursor: pointer;
        &:hover {
            border-bottom: 1px solid rgb(165, 140, 1);
        }
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
                <h3 className={"list__name"} onClick={() => {
                    props.userProfile(props.userId)
                }}>
                    <span>{props.Name}</span> <span>{props.FirstName}</span>
                </h3>
            </div>
        </StyledFriendsList>
    )
}
export default ListFrends;