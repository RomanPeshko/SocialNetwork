import { combineReducers } from 'redux';
import userReducer from './userReducer';
import friendReducer from './friendReducer';
import recordWallReducer from './recordWallReduser';
import userMessages from './userMessages';

const rootReducer = combineReducers({
    userReducer,
    friendReducer,
    recordWallReducer,
    userMessages
})

export default rootReducer;