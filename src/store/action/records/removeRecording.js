import { RECORD_ACTIONS } from "store/selectors/actionType";


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