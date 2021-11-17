import { USER_ACTIONS } from "../selectors/actionType";
import { FRIEND_ACTIONS } from "../selectors/actionType";
import { RECORD_ACTIONS } from "../selectors/actionType";


export const logOutUser = () => {
    return (
        {
            type: USER_ACTIONS.logOut,
            payload: {},
        })
};

export const logOutFriend = () => {
    return (
        {
            type: FRIEND_ACTIONS.logOut,
            payload: {},
        })
};

export const logOutRecord = () => {
    return (
        {
            type: RECORD_ACTIONS.logOut,
            payload: {},
        })
};