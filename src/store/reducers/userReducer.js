import { USER_ACTIONS } from '../selectors/actionType';


const userReducer = (state , action) => {
    let newUser = [];
    switch (action.type) {
        case (USER_ACTIONS.newUser):
            newUser = [...state.user];
            newUser.push(
                {
                    email: action.payload.email,
                    password: action.payload.password,
                    name: action.payload.name,
                    firstName: action.payload.firstName,
                    city: action.payload.city,
                    birthday: action.payload.birthday,
                    userID: action.payload.id,
                }
            );
            return { ...state, user: newUser };
        
        case (USER_ACTIONS.logOut):
        newUser = [...state.user];
        newUser.splice(action.payload.index, 1);
        return { ...state, user: newUser };

        default: return { ...state, user:[]}
    }
}

export default userReducer;