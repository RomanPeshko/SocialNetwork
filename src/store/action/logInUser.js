import { USER_ACTIONS } from "../selectors/actionType";


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
        })
};