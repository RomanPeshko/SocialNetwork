import { USER_ACTIONS } from "store/selectors/actionType";

export const newUserAdd = (Birthday, City, FirstName, Name, userID) => {
    return (
        {
            type: USER_ACTIONS.newUser,
            payload: {
                name: Name,
                firstName: FirstName,
                city: City, 
                birthday: Birthday,
                id: userID
            }
        })
};