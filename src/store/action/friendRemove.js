import { FRIEND_ACTIONS } from "../selectors/actionType";


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