import { MESSAGE_ACTIONS } from 'store/selectors/actionType';

const userMessages = (state, action) => {
    let newMessage = [];
    switch (action.type) {
        case (MESSAGE_ACTIONS.logined):
            newMessage = [...state.message];
            newMessage = action.payload.messages;
            return { ...state, message: newMessage };

        case (MESSAGE_ACTIONS.logOut):
            newMessage = [...state.message];
            newMessage = [];
            return { ...state, message: newMessage };

        default: return { ...state }
    }
}

export default userMessages;