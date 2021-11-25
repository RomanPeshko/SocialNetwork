import { RECORD_ACTIONS } from 'store/selectors/actionType';

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
            const recordingAdd = newRecord[action.payload.index];
            recordingAdd.userLike.push(action.payload.userID);
            recordingAdd.like = recordingAdd.userLike.length;
            return { ...state, record: newRecord };

        case (RECORD_ACTIONS.likeRemove):
            newRecord = [...state.record];
            const recordingRemove = newRecord[action.payload.index];
            const findRecording = recordingRemove.userLike.indexOf(action.payload.userID);
            recordingRemove.userLike.splice(findRecording, 1);
            recordingRemove.like = recordingRemove.userLike.length;
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