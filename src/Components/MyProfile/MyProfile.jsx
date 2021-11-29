import React, { useCallback, useContext, useEffect, useState } from "react";
import myProfile from "Components/MyProfile/myProfile.module.scss";
import img from "assets/images/phote.png";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { recordWallReducer } from "store/selectors/user";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyRecord from "Components/MyProfile/MyRecord";
import { newRecordingAdd } from "store/action/records/newRecordingAdd";
import { recordingSave } from "api/user";



const MyProfile = (props) => {
    const idParams = useParams();
    const dispatch = useDispatch();
    const userFind = useSelector(userSelector);
    const myRecords = useSelector(recordWallReducer);
    const [user, setUser] = useState('');
    const [clickedOnTheButton, setClickedOnTheButton] = useState(false);
    const [textRecord, setTextRecord] = useState('');
    const date = Date.parse(new Date());


    useEffect(() => {
        console.log(`useEffect`);
        new Promise((resolve, reject) => {
            resolve(
                userFind
            )
        }).then((data) => {
            if (data.userID) {
                setUser(data);
            } else {
                return console.log('Пользователь не найден!');
            }

        })
    }, []);


    const newRecordWall = (textRecord, date) => {
        recordingSave(textRecord, idParams.userID, date)
            .then((data) => {
                dispatch(newRecordingAdd(data));
            })

    }


    const createRecord = () => {
        return setClickedOnTheButton(true);
    }


    const visibleCreateRecord = () => {
        if (!clickedOnTheButton) {
            return (
                <button className={myProfile.createRecord}
                    onClick={createRecord}>
                    Добавить запись
                </button>
            )
        } else {
            return (
                <div className={myProfile.wrapAddRecord}>
                    <button className={myProfile.cancelRecord} onClick={() => { setClickedOnTheButton(false) }}>
                        X
                    </button>
                    <textarea placeholder={'Что у вас нового?'} className={myProfile.inputRecord}
                        onChange={(event) => { setTextRecord(event.target.value) }}
                        value={textRecord}
                    />
                    <button className={myProfile.publishRecord}
                        onClick={() => { !textRecord ? alert('Заполните поле') : newRecordWall(textRecord, date); setClickedOnTheButton(false); setTextRecord('') }}>
                        Опубликовать
                    </button>
                </div>

            )
        }
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
                    <div className={myProfile.wallWrap}>
                        <div className={myProfile.writeOnTheWall}>
                            {visibleCreateRecord()}

                        </div>
                        <div className={myProfile.myWall}>
                            <div className={myProfile.titleWall}>
                                Записи
                            </div>
                            {
                                myRecords.map((record, index) => {
                                    return (
                                        <div key={index}>
                                            <MyRecord
                                                record={record}
                                                visibleRemoveButton={true}
                                                index={index}
                                                userID={idParams.userID}
                                            />
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>

    )
}

export default MyProfile;