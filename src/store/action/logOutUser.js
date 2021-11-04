import { USER_ACTIONS } from "../selectors/actionType";

export const logOutUser = () => {
    return (
        {
            type: USER_ACTIONS.logOut,
            payload: {
            }
        })
};