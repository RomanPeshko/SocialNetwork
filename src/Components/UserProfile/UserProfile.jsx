import React, { useCallback, useContext, useEffect, useState } from "react";
import myProfile from "Components/MyProfile/myProfile.module.scss";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user"
import { useParams } from "react-router-dom";
import { userProfile } from "api/instance";
import { newFriendAdd } from "store/action/friendAdd";
import { useDispatch } from "react-redux";




const UserProfile = (props) => {
    const dispatch = useDispatch();
    const id = useParams();
    const [user, setUser] = useState('');

    useEffect(() => {
        console.log(`useEffect`);
        userProfile(id)
            .then((data) => {
                setUser(data)
            })
    }, []);

    const addFriend = (Name, FirstName, City, Birthday, userID) => {
        dispatch(newFriendAdd(Name, FirstName, City, Birthday, userID))
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
                        <button className={myProfile.add} onClick={() => {addFriend(
                            user.Name, 
                            user.FirstName, 
                            user.City, 
                            user.Birthday,
                            user.userID
                        )}}>
                            Добавить в друзья
                        </button>
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
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default UserProfile;