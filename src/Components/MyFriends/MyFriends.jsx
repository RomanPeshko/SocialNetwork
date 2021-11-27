import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { listUser } from "api/instance";
import ListFrends from "Components/MyFriends/ListFrends";
import { Link, useParams, useHistory } from "react-router-dom";
import { PATHS } from "Routing/routing";
import { useSelector } from "react-redux";
import { friendSelector } from "store/selectors/user"

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

    .another__item {
        color: rgb(165, 140, 1);
        &::after {
            content: '';
            display: block;
            height: 3px;
            width: 100%;
            background-color: rgb(165, 140, 1);
            margin-top: 5px;
            
        } 
        &::before {
            content: '';
            display: block;
            height: 3px;
            width: 100%;
            background-color: rgb(165, 140, 1);
            margin-top: 30px;
            margin-bottom: 5px;
        } 
    }

`;



const MyFriends = () => {
    const history = useHistory();
    const idParams = useParams();
    const searchFriends = useSelector(friendSelector);
    const [searchPerson, setSearchPerson] = useState([]);
    const [searchString, setSearchString] = useState('');
    let throttleTimeOutId = null;

    useEffect(() => {
        throttleTimeOutId = setTimeout(() => {
            findperson(searchString)
        }, 500)
    }, [searchString, searchPerson])

    const findperson = (searchString) => {
        listUser(searchString).then((data) => {
            setSearchPerson(data)
        })
    }

    const filterListUser = (dataToFilter) => {
        return dataToFilter.filter(friend => {
            return (friend.Name.toLowerCase().includes(searchString.toLowerCase()) || friend.FirstName.toLowerCase().includes(searchString.toLowerCase()));
        })
    }

    const userProfile = (userId) => {
        history.push(PATHS.USER_PROFILE(idParams.userID, userId))
    }

    const myFriendsFind = (userFriendId) => {
        let usid = searchFriends.find(x => x.userID === userFriendId);
        return usid
    }

    return (
        <StyledFriends>
            <div className={"friends__row"}>
                <div className={"title__friends"}>
                    Друзья
                    <input type={"text"}
                        placeholder={"Поиск"}
                        onChange={(event) => {
                            setSearchString(event.target.value);
                        }}
                    />
                </div>
                <div className={"friends__item"}>
                    {searchFriends.length === 0 ? "Нет друзей" :
                        filterListUser(searchFriends).map((friend, index) => {

                            return (
                                <div key={friend.userID}>
                                    <ListFrends
                                        Name={friend.Name}
                                        FirstName={friend.FirstName}
                                        City={friend.City}
                                        Birthday={friend.Birthday}
                                        userProfile={userProfile}
                                        userId={friend.userID}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                <div className={"user__item"}>
                    {searchPerson.length === 0 ? '' : 
                       <div className={"another__item"}>
                        Другие пользователи
                    </div> 
                    }
                    
                    {
                        searchPerson.map((friend, index) => {
                            if (friend.userID !== Number(idParams.userID) && !myFriendsFind(friend.userID)) {
                                return (
                                    <div key={friend.userID}>
                                        <ListFrends
                                            Name={friend.Name}
                                            FirstName={friend.FirstName}
                                            City={friend.City}
                                            Birthday={friend.Birthday}
                                            userProfile={userProfile}
                                            userId={friend.userID}
                                        />
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