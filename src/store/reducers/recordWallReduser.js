import { RECORD_ACTIONS } from '../selectors/actionType';

const recordWallReducer = (state, action) => {
    let newRecord = [];
    switch (action.type) {
        case (RECORD_ACTIONS.logined):
            newRecord = [...state.record];
            newRecord = action.payload.records;
            return { ...state, record: newRecord };

        case (RECORD_ACTIONS.add):
            newRecord = [...state.record];
            newRecord.unshift(action.payload.record);
            return { ...state, record: newRecord };

        case (RECORD_ACTIONS.likeAdd):
            newRecord = [...state.record];
            const recording = newRecord[action.payload.index];
            
            recording.userLike.push(action.payload.userID);
            recording.like = recording.userLike.length;
            return { ...state, record: newRecord };

        case (RECORD_ACTIONS.remove):
            newRecord = [...state.record];
            newRecord.splice(action.payload.index, 1);
            return { ...state, record: newRecord };

        case (RECORD_ACTIONS.logOut):
            newRecord = [...state.record];
            newRecord = [];
            return { ...state, record: newRecord };

        default: return { ...state }
    }
}

export default recordWallReducer;