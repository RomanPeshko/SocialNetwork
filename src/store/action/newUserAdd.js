import { USER_ACTIONS } from "../selectors/actionType";

export const newUserAdd = (email, password, name, firstName, city, birthday) => {
    return (
        {
            type: USER_ACTIONS.newUser,
            payload: {
                email: email,
                password: password,
                name: name,
                firstName: firstName,
                city: city, 
                birthday: birthday,
            }
        })
};