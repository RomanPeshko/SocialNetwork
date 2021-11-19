import { FRIEND_ACTIONS } from "store/selectors/actionType";


export const myLikeFriendAdd = (userID, index, muID) => {
    return (
        {
            type: FRIEND_ACTIONS.myLikeFriendAdd,
            payload: {
                userFriend: userID,
                index: index,
                myUserID: muID
            }
        }
    )
};

export const myLikeFriendRemove = (userID, index, muID) => {
    return (
        {
            type: FRIEND_ACTIONS.myLikeFriendRemove,
            payload: {
                userFriend: userID,
                index: index,
                myUserID: muID
            }
        }
    )
};