import { FRIEND_ACTIONS } from "store/selectors/actionType";


export const removeUserFriend = (userID) => {
    return (
        {
            type: FRIEND_ACTIONS.remove,
            payload: {
                id: userID,
            }
        }
    )
};