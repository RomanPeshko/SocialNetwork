import {
    USER_ACTIONS,
    FRIEND_ACTIONS,
    RECORD_ACTIONS,
    MESSAGE_ACTIONS
} from "store/selectors/actionType";


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

export const logOutMessage = () => {
    return (
        {
            type: MESSAGE_ACTIONS.logOut,
            payload: {},
        })
};