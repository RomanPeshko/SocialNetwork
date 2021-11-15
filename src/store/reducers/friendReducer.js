import { FRIEND_ACTIONS } from '../selectors/actionType';


const friendReducer = (state, action) => {
    let myFriend = [];
    switch (action.type) {
        case (FRIEND_ACTIONS.friendAdd):
            myFriend = [...state.friend];
            myFriend.push(
                {
                    name: action.payload.name,
                    firstName: action.payload.firstName,
                    city: action.payload.city,
                    birthday: action.payload.birthday,
                    userID: action.payload.id,
                }
            );
            return { ...state, friend: myFriend };

       

        default: return { ...state, friend: [] }
    }
}

export default friendReducer;