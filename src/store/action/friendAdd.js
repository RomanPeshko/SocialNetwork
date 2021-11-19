import { FRIEND_ACTIONS } from "store/selectors/actionType";


export const newFriendAdd = (Name, FirstName, City, Birthday, userID) => {
    return (
        {
            type: FRIEND_ACTIONS.friendAdd,
            payload: {
                name: Name,
                firstName: FirstName,
                city: City,
                birthday: Birthday,
                id: userID,
            }
        }
    )
};