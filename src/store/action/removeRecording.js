import { RECORD_ACTIONS } from "../selectors/actionType";


export const removeRecording = (index) => {
    return (
        {
            type: RECORD_ACTIONS.remove,
            payload: {
                index: index,
            }
        }
    )
};