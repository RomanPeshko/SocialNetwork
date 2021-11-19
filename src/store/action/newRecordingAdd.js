import { RECORD_ACTIONS } from "store/selectors/actionType";

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