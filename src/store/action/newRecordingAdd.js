import { RECORD_ACTIONS } from "../selectors/actionType";

export const newRecordingAdd = (textRecord) => {
    return (
        {
            type: RECORD_ACTIONS.add,
            payload: {
                record: textRecord,
            }
        }
    )
};