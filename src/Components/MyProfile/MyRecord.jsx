import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SvgHeart from "assets/svg/heart.svg";
import SvgTrash from "assets/svg/trash.svg";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { recordWallReducer } from "store/selectors/user";
import { useDispatch } from "react-redux";
import { removeRecording } from "store/action/removeRecording";
import { removeRecordingWall } from "api/instance";
import { addLikeRecording, removeLikeRecording } from "store/action/LikeRecording";
import { myLikeFriendAdd, myLikeFriendRemove } from "store/action/myLikeFriend";
import { Link, useParams, useHistory } from "react-router-dom";
import { 
    addLikePostServer, 
    deleteLikePostServer, 
    findUserLikePostServer,
    addMyLikeFriendServer,
    deleteMyLikeFriendServer
} from "api/instance";



const StyledMyRecord = styled.div`
    .heart {
        color: #db2020a2;
        width: 20px;
        &:hover {
            color: #db2020;
        }
    }

    .like__true {
        background-color: #db2020a2;
        background-size: contain;
        color: #7a0909;
        border-radius: 50%;
        &:hover {
            background-color: #db2020;
            color: #7a0909;
        }
    }

    .like__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 55px;
        background-color: #db20202d;
        padding: 5px 10px;
        border-radius: 12px;
        button {
            border-radius: 50%;
            border: 0;
            background-color: rgba(20, 6, 6, 0);
            margin-right: 5px;
            cursor: pointer;
        }
        div {
            color: #db2020;
        }
    }

    .record__wrap {
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.7);
        margin-bottom: 20px;
    }

    .item__text {
        margin-bottom: 30px;
        color: rgb(165, 140, 1);
        width: 450px;
        overflow: hidden;
        word-wrap: break-word;
    }

    .remove__record {
        width: 15px;
        border: 0;
        cursor: pointer;
        font-size: 16px;
        color: rgba(165, 140, 1, 0.4);
        &:hover {
            color: rgba(165, 140, 1, 1);
            
        }
       
    }
    

    .remove__blok {
        display: flex;
        justify-content: flex-end;
        button {
            margin-bottom: 10px;
            background-color: rgba(49, 46, 46, 0);
            border: 0;
            position: relative;
            &:hover::after {
                content: 'Удалить запись';
                position: absolute; 
                left: -630%; top: -120%;
                width: 80px;
                z-index: 1000; 
                background: #f8f8f6e4; 
                font-size: 11px;
                padding: 5px 10px;
                border: 1px solid #333;
                border-radius: 5px;
            }
        }
    }
`;



const MyRecord = (props) => {
    const userIdParams = useParams();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const userrecords = useSelector(recordWallReducer);
    const [like, setLike] = useState(false);
    const [likeRecording, setLikeRecording] = useState('')


    useEffect(() => {
        console.log(`useEffect records`);
        new Promise((resolve, reject) => {
            resolve(
                findUserLikePostServer(userIdParams.userID)
            )
        }).then((data) => {
            const findRecording = data[props.index].userLike.find(x => x === String(user.userID));
            if (findRecording) {
                setLike(true)
            } else {
                setLike(false)
            }
            setLikeRecording(data[props.index].like)
        })
        
    }, [like, userrecords]);


    const deleteEntry = (index, userID) => {
        removeRecordingWall(index, userID)
            .then((data) => {
                dispatch(removeRecording(index));
            })
    }

    const addLike = (userID, index) => {
        addLikePostServer(userID, index)
            .then((data) => {
                dispatch(addLikeRecording(userID, index));
            })

    }

    const removeLike = (userID, index) => {
        deleteLikePostServer(userID, index)
            .then((data) => {
                dispatch(removeLikeRecording(userID, index));
            })

    }

    const addLikeFriend = (userID, index, muID) => {
        addMyLikeFriendServer(userID, index, user.userID)
        .then((data) => {
            dispatch(myLikeFriendAdd(userID, index, muID));
        })
        
    }

    const removeLikeFriend = (userID, index, muID) => {
        deleteMyLikeFriendServer(userID, index, muID)
        .then((data) => {
            dispatch(myLikeFriendRemove(userID, index, muID));
        })
        
    }



    const myLikeRecords = () => {
        if (user.userID === Number(userIdParams.userID)) {
            if (!like) {
                return addLike(userIdParams.userID, props.index);
            } else {
                return removeLike(userIdParams.userID, props.index), setLike(false)
            }
        } else {
            if (!like) {
                return addLikeFriend(userIdParams.userID, props.index, user.userID), setLike(true)
            } else {
                return removeLikeFriend(userIdParams.userID, props.index, user.userID), setLike(false)
            }
        }
        console.log('ахахахаа')

    }

    return (
        <StyledMyRecord>
            <div className={'record__wrap'}>
                <div className={'remove__blok'}>
                    {props.visibleRemoveButton ?
                        <button onClick={() => { deleteEntry(props.index, props.id.userID) }}>
                            <SvgTrash className={'remove__record'} />
                        </button>
                        :
                        ''
                    }

                </div>
                <div className={'item__text'}>
                    <p>
                        {props.record.text}
                    </p>

                </div>
                <div className={'like__item'}>
                    <button className={'button__heart'} type={'button'}
                        onClick={() => { myLikeRecords() }}>
                        <SvgHeart className={`heart ${like ? 'like__true' : ''}`} />
                    </button>
                    <div className={'counter'}>
                        {likeRecording}
                    </div>
                </div>
            </div>
        </StyledMyRecord>
    )
}

export default MyRecord;