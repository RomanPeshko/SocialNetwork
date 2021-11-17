import { combineReducers } from 'redux';
import userReducer from './userReducer';
import friendReducer from './friendReducer';
import recordWallReducer from './recordWallReduser';

const rootReducer = combineReducers({
    userReducer,
    friendReducer,
    recordWallReducer
})

export default rootReducer;