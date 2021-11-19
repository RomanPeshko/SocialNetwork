import { RECORD_ACTIONS } from "../selectors/actionType";


export const addLikeRecording = (userID, index) => {
    return (
        {
            type: RECORD_ACTIONS.likeAdd,
            payload: {
                userID: userID,
                index: index
            }
        }
    )
};

export const removeLikeRecording = (userID, index) => {
    return (
        {
            type: RECORD_ACTIONS.likeRemove,
            payload: {
                userID: userID,
                index: index
            }
        }
    )
};