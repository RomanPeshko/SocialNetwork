import {
    USER_ACTIONS,
    FRIEND_ACTIONS,
    RECORD_ACTIONS,
    MESSAGE_ACTIONS
} from "store/selectors/actionType";


export const logined = (Birthday, City, FirstName, Name, userID) => {
    return (
        {
            type: USER_ACTIONS.logined,
            payload: {
                name: Name,
                firstName: FirstName,
                city: City,
                birthday: Birthday,
                id: userID
            }
        }
    )
};

export const loginedAddFriends = (friends) => {
    return (
        {
            type: FRIEND_ACTIONS.logined,
            payload: {
                friends: friends
            }
        }
    )
};

export const loginedAddRecording = (record) => {
    return (
        {
            type: RECORD_ACTIONS.logined,
            payload: {
                records: record
            }
        }
    )
};


export const loginedAddMessages = (messages) => {
    return (
        {
            type: MESSAGE_ACTIONS.logined,
            payload: {
                messages: messages
            }
        }
    )
};