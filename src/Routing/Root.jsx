import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyProfile from "Components/MyProfile/MyProfile";
import MyMessages from "Components/MyMessages/MyMessages";
import MyFriends from "Components/MyFriends/MyFriends";
import MyMusic from "Components/MyMusic/MyMusic";
import News from "Components/News/News";
import Account from "Scenes/Account/Account";
import LoginPage from "Scenes/LoginPage/LoginPage";
import Registration from "Scenes/Registration/Registration";
import { ROUTE } from "./routing";

const RootRouter = (props) => {

    return (
        // <React.Fragment>
        //     <Switch>
        //         <Route exact path={"/"}>
        //             <LoginPage />
        //         </Route>
        //         <Route path={ROUTE.ACCOUNT} render={(rootProps) => {
        //             console.log(rootProps.match.params.userID);
        //             return (
                        <Account>
                            <Route path={ROUTE.PROFILE}>
                                <MyProfile />
                            </Route>
                            <Route path={ROUTE.FRIENDS}>
                                <MyFriends />
                            </Route>
                            <Route path={ROUTE.MESSAGES}>
                                <MyMessages />
                            </Route>
                            <Route path={ROUTE.MUSIC}>
                                <MyMusic />
                            </Route>
                            <Route path={ROUTE.NEWS}>
                                <News/>    
                            </Route> 
                        </Account>
    //                 )
    //             }}>

    //             </Route>
    //             <Route exact path={ROUTE.REGISTRATION} >
    //                 <Registration />
    //             </Route>

    //             {/* <Route path={"/"}>
    //                 <Redirect to={"/myProfile"} />
    //             </Route> */}
    //         </Switch>
    //     </React.Fragment>
    )
}

export default RootRouter;