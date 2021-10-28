import React, { useCallback, useContext, useEffect, useState } from "react";
import myProfile from "Components/MyProfile/myProfile.module.scss";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";

const MyProfile = (props) => {
    const user = useSelector(userSelector);

    useEffect(() => {
        console.log(`useEffect`);
        new Promise((resolve, reject) => {
            resolve([
                {
                    name: "Роман",
                    firstName: "Пешко",
                    city: "Минск",
                    birthday: "9 ноября",
                    userId: 12345,
                },

            ])
        }).then((data) => {
        })
    }, []);

    return (
        <React.Fragment>
            {user.map((use, index) => {

                if (use.userId === props.userID) {
                    return (
                        <React.Fragment key={use.userId}>
                            <div className={myProfile.wrap}>
                                <div className={myProfile.profile}>
                                    <div className={myProfile.avator}>
                                        <img src={img} />
                                    </div>
                                    <div className={myProfile.descriptionProfile}>
                                        <h3 className={myProfile.name}>
                                            <span>{use.name}</span> <span>{use.firstName}</span>
                                        </h3>
                                        <div className={myProfile.description}>
                                            <div className={myProfile.describe}>
                                                <div className={myProfile.title}>
                                                    Город:
                                                </div>
                                                <div className={myProfile.titleDescribe}>
                                                    {use.city}
                                                </div>
                                            </div>
                                            <div className={myProfile.describe}>
                                                <div className={myProfile.title}>
                                                    День Рождения:
                                                </div>
                                                <div className={myProfile.titleDescribe}>
                                                    {use.birthday}
                                                </div>
                                            </div>
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
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }



            })}
        </React.Fragment>

    )
}

export default MyProfile;