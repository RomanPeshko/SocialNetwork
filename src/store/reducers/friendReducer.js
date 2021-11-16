import { FRIEND_ACTIONS } from '../selectors/actionType';


const friendReducer = (state, action) => {
    let myFriend = [];
    switch (action.type) {
        case (FRIEND_ACTIONS.logined):
            myFriend = [...state.friend];
            myFriend = action.payload.friends;
            return { ...state, friend: myFriend };

        case (FRIEND_ACTIONS.friendAdd):
            myFriend = [...state.friend];
            myFriend.push(
                {
                    Name: action.payload.name,
                    FirstName: action.payload.firstName,
                    City: action.payload.city,
                    Birthday: action.payload.birthday,
                    userID: action.payload.id,
                }
            );
            return { ...state, friend: myFriend };

        case (FRIEND_ACTIONS.remove):
            myFriend = [...state.friend];
            const friendUserId = myFriend.find(x => x.id === action.payload.id);
            myFriend.splice(friendUserId, 1);
            return { ...state, friend: myFriend };

        case (FRIEND_ACTIONS.logOut):
            myFriend = [...state.friend];
            myFriend = [];
            return { ...state, friend: myFriend };

        default: return { ...state }
    }
}

export default friendReducer;