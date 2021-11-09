import React, { useCallback, useContext, useEffect, useState } from "react";
import myProfile from "Components/MyProfile/myProfile.module.scss";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user"
import { useParams } from "react-router-dom";

const MyProfile = (props) => {
    const idParams = useParams();
    const userFind = useSelector(userSelector);
    const [user, setUser] = useState('');


    useEffect(() => {
        console.log(`useEffect`);
        new Promise((resolve, reject) => {
            resolve(
                userFind
            )
        }).then((data) => {
            const id = data.find(x => x.userID);
            if (id) {
                setUser(id);
            } else {
                return console.log('Пользователь не найден!');
            }

        })
    }, []);

    return (

        <React.Fragment>
            <div className={myProfile.wrap}>
                <div className={myProfile.profile}>
                    <div className={myProfile.avator}>
                        <img src={img} />
                    </div>
                    <div className={myProfile.descriptionProfile}>
                        <h3 className={myProfile.name}>
                            <span>{user.name}</span> <span>{user.firstName}</span>
                        </h3>
                        <div className={myProfile.description}>
                            <div className={myProfile.describe}>
                                <div className={myProfile.title}>
                                    Город:
                                </div>
                                <div className={myProfile.titleDescribe}>
                                    {user.city}
                                </div>
                            </div>
                            <div className={myProfile.describe}>
                                <div className={myProfile.title}>
                                    День Рождения:
                                </div>
                                <div className={myProfile.titleDescribe}>
                                    {user.birthday}
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

export default MyProfile;