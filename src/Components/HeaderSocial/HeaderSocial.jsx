import React from "react";
import headerSocial from "Components/HeaderSocial/headerSocial.module.scss";

const HeaderSocial = () => {


    return (
        <div className={headerSocial.header}>
            <div className={headerSocial.wrap}>
                <div className={headerSocial.logo}>
                    SOCIAL NETWORK
                </div>
            </div>
        </div>
    )
}

export default HeaderSocial;