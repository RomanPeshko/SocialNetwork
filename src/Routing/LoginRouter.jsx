import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "Scenes/LoginPage/LoginPage";
import Registration from "Scenes/Registration/Registration";
import { ROUTE } from "./routing";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import RootRouter from "./Root";



const LoginRouter = (props) => {
    const user = useSelector(userSelector);

    const renderForLoggedInUser = (Scene) => {
        if(!user.userID) {
            return <Redirect to={"/"}/>
        }
        return (<Scene/> )
    }

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage />
                </Route>
                <Route exact path={ROUTE.REGISTRATION} >
                    <Registration />
                </Route>
                <Route exact path={ROUTE.ACCOUNT} >
                    {renderForLoggedInUser(RootRouter)}
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default LoginRouter;