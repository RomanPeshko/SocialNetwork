import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { findFriend } from "../../api/instance";
import ListFrends from "Components/MyFriends/ListFrends";

import { Link, useParams, useHistory } from "react-router-dom";

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

    .title__friends {
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
    input {
        margin-bottom: 20px;
        margin: auto;
        padding: 5px;
        margin-left: 60px;
        width: 500px;
    }

`;



const MyFriends = () => {
    const idParams = useParams();
    const [findFriends, setFindFriends] = useState([]);
    const [value, setValue] = useState('');
    const find = () => {
        findFriend(idParams.userID).then((data) => {
            setFindFriends(data)
            console.log(data)
        })
    }

    useEffect(() => {
        console.log(`useEffect`);
        find()
    }, []);

    const filterFriends = findFriends.filter(friend => {
        return friend.FirstName.toLowerCase().includes(value.toLowerCase());
    })


    return (
        <StyledFriends>
            <div className={"friends__row"}>
                <div className={"title__friends"}>
                    Друзья
                    <input type={"text"}
                        placeholder={"Поиск"}
                        onChange={(event) => {
                            setValue(event.target.value);
                        }}
                    />
                </div>



                <div className="friend__item">
                    {
                        filterFriends.map((friend, index) => {
                            if (friend.userID !== Number(idParams.userID)) {
                                return (
                                    <div key={index}>
                                        <ListFrends
                                            Name={friend.Name}
                                            FirstName={friend.FirstName} />
                                    </div>
                                )
                            }

                        })
                    }
                </div>
            </div>
        </StyledFriends>
    )
}

export default MyFriends;