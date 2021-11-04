import { USER_ACTIONS } from "../selectors/actionType";

export const newUserAdd = (Birthday, City, FirstName, Name, password, email, userID) => {
    return (
        {
            type: USER_ACTIONS.newUser,
            payload: {
                email: email,
                password: password,
                name: Name,
                firstName: FirstName,
                city: City, 
                birthday: Birthday,
                id: userID
            }
        })
};