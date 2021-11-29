import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { compareDesc } from 'date-fns';
import MyRecord from "Components/MyProfile/MyRecord";
import { myFriendsData } from "api/user";


const StyledNews = styled.div`
    .news__row {
        margin: 0 5px 0 5px;
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .title__news {
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

const News = () => {
    const myData = useSelector(userSelector);
    const [listNewsfriends, setListNewsfriends] = useState([]);
    const [newList, setNewList] = useState([]);


    useEffect(() => {
        console.log(`useEffect news`);
        myFriendsData(myData.userID)
            .then((data) => {
                const arrayRecordsFriends = [];
                for (const friends of data) {
                    let index = 0;
                    for (const recording of friends.record) {

                        recording.userID = friends.userID;
                        recording.index = index;
                        index++
                        arrayRecordsFriends.push(recording);
                    }
                }
                console.log(arrayRecordsFriends)
                arrayRecordsFriends.sort(function (a, b) {
                    if (a.date > b.date) {
                        return -1;
                    }
                    if (a.date < b.date) {
                        return 1;
                    }
                });
                setListNewsfriends(arrayRecordsFriends);
            })
    }, []);





    return (
        <StyledNews>
            <div className={"news__row"}>
                <div className={"title__news"}>
                    Новости
                </div>
                {
                    listNewsfriends.map((record, index) => {
                        console.log(record)
                        return (
                            <div key={record.date} >
                                <MyRecord
                                    record={record}
                                    index={record.index}
                                    userID={record.userID}
                                />
                            </div>

                        )

                    })
                }


            </div >
        </StyledNews >
    )
}

export default News;