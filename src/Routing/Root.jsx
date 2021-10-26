import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyProfile from "Components/MyProfile/MyProfile";
import MyMessages from "Components/MyMessages/MyMessages";
import MyFriends from "Components/MyFriends/MyFriends";
import MyMusic from "Components/MyMusic/MyMusic";
import Account from "Components/Account/Account";
import FirstPage from "Components/FirstPage/FirstPage";

const RootRouter = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={"/"}>
                    <FirstPage />
                </Route>
                <Route path={"/account"}>
                    <Account>
                        <Route path={"/account/myProfile"}>
                            <MyProfile />
                        </Route>
                        <Route path={"/account/myFriends"}>
                            <MyFriends />
                        </Route>
                        <Route path={"/account/myMessages"}>
                            <MyMessages />
                        </Route>
                        <Route path={"/account/myMusic"}>
                            <MyMusic />
                        </Route>
                    </Account>
                </Route>
                <Route exact path={"/registration"} >
                    Регистрация...
                </Route>

                {/* <Route path={"/"}>
                    <Redirect to={"/myProfile"} />
                </Route> */}
            </Switch>
        </React.Fragment>
    )
}

export default RootRouter;