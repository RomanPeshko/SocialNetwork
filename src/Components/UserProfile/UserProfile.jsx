import React, { useCallback, useContext, useEffect, useState } from "react";
import myProfile from "Components/MyProfile/myProfile.module.scss";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { friendSelector } from "store/selectors/user";
import { useParams } from "react-router-dom";
import { userProfile } from "api/instance";
import { newFriendAdd } from "store/action/friends/friendAdd";
import { useDispatch } from "react-redux";
import { friendSave } from "api/instance";
import { removeFriend } from "api/instance";
import { removeUserFriend } from "store/action/friends/friendRemove";
import MyRecord from "Components/MyProfile/MyRecord";
import { ModalContext } from "HOC/GlobalModalProvider";
import ModalCreateMessage from "Components/ModalContext/CreateMessage";




const UserProfile = (props) => {
    const openModal = useContext(ModalContext);
    const dispatch = useDispatch();
    const id = useParams();
    const [user, setUser] = useState('');
    const [userRecords, setUserRecords] = useState([])
    const friendFind = useSelector(friendSelector);
    const myID = useSelector(userSelector);



    useEffect(() => {
        console.log(`useEffect`);
        userProfile(id)
            .then((data) => {
                setUser(data);
                setUserRecords(data.record);
            })
    }, []);

    const addFriend = (Name, FirstName, City, Birthday, userID, record) => {
        friendSave(myID.userID, userID)
            .then((data) => {
                dispatch(newFriendAdd(Name, FirstName, City, Birthday, userID, record))
            })

    }

    const removeMyFriend = (friendID) => {
        removeFriend(myID.userID, friendID)
            .then((data) => {
                dispatch(removeUserFriend(friendID))
            })
    }

    const myFriendsFind = (userFriendId) => {
        let usid = friendFind.find(x => x.userID === userFriendId);
        return usid
    }

    const buttonVisible = () => {
        if (!myFriendsFind(user.userID)) {
            return (
                <button className={myProfile.add} onClick={() => {
                    addFriend(
                        user.Name,
                        user.FirstName,
                        user.City,
                        user.Birthday,
                        user.userID,
                        user.record
                    )
                }}>
                    Добавить в друзья
                </button>
            )
        } else {
            return (
                <div className={myProfile.stateItem}>
                    <div className={myProfile.state}>
                        У вас в друзьях!
                    </div>
                    <button className={myProfile.stateButtonRemove} onClick={() => {
                        removeMyFriend(
                            user.userID,
                        )
                    }}>
                        Удалить из друзей
                    </button>
                </div>


            )
        }

    }

    const createANewMessage = (message, userId) => {
        console.log(message, userId)
    }

    return (
        <React.Fragment>
            <div className={myProfile.wrap}>
                <div className={myProfile.profile}>
                    <div className={myProfile.avator}>
                        <img src={img} />
                    </div>
                    <div className={myProfile.descriptionProfile}>
                        <h3 className={myProfile.name}>
                            <span>{user.Name}</span> <span>{user.FirstName}</span>
                        </h3>
                        <div className={myProfile.description}>
                            <div className={myProfile.describe}>
                                <div className={myProfile.title}>
                                    Город:
                                </div>
                                <div className={myProfile.titleDescribe}>
                                    {user.City}
                                </div>
                            </div>
                            <div className={myProfile.describe}>
                                <div className={myProfile.title}>
                                    День Рождения:
                                </div>
                                <div className={myProfile.titleDescribe}>
                                    {user.Birthday}
                                </div>
                            </div>
                        </div>
                        <div className={myProfile.itemByttons}>
                            {buttonVisible()}
                            <button className={myProfile.add} onClick={() => {
                                openModal(<ModalCreateMessage
                                    Name={user.Name}
                                    FirstName={user.FirstName}
                                    openModal={openModal}
                                    createANewMessage={createANewMessage}
                                    id={id}
                                />)
                            }}>
                                Написать сообщение
                            </button>
                        </div>

                    </div>
                </div>
                <div className={myProfile.wrapContent}>
                    <div className={myProfile.myPhoto}>
                        <div className={myProfile.photesWall}>
                            Фото
                        </div>
                    </div>
                    <div className={myProfile.myWall}>
                        <div className={myProfile.titleWall}>
                            Записи
                        </div>
                        {
                            userRecords.map((record, index) => {
                                return (
                                    <div key={index}>
                                        <MyRecord
                                            record={record}
                                            visibleRemoveButton={false}
                                            index={index}
                                            userID={id}
                                        />
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default UserProfile;