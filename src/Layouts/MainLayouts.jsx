import React from "react";
import mainLayouts from "Layouts/mainLayouts.module.scss";
import HeaderSocial from "Components/HeaderSocial/HeaderSocial";

const MainLayouts = (props) => {


    return (
        <React.Fragment>
            <HeaderSocial />
            <div className="app">
                {props.children}
            </div>
        </React.Fragment>

    )
};


export default MainLayouts;