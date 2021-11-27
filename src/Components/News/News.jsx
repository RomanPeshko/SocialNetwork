import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { friendSelector } from "store/selectors/user";
import { compareDesc } from 'date-fns'
import MyRecord from "Components/MyProfile/MyRecord";


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
    const listNewsfriends = useSelector(friendSelector);
    return (
        <StyledNews>
            <div className={"news__row"}>
                <div className={"title__news"}>
                    Новости
                </div>
                {
                    listNewsfriends.map((friend, index) => {
                        return (
                            friend.record.map((record, index) => {

                                return (
                                    <React.Fragment>
                                        <div key={friend.id} >
                                            <MyRecord
                                                record={record}
                                                index={index}
                                                userID={friend.userID}
                                            />
                                        </div>
                                    </React.Fragment>

                                )

                            })
                        )

                    })

                }
            </div >
        </StyledNews >
    )
}

export default News;