import React from "react";
import myProfile from "Components/MyProfile/myProfile.module.scss";

const MyProfile = () => {
    return (
        <React.Fragment>
            <div className={myProfile.wrap}>
                <div className={myProfile.profile}>
                    <div>
                    </div>
                </div>
                <div className={myProfile.myPhoto}>
                    Фото
                </div>
                <div className={myProfile.myWall}>
                     стена
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyProfile;