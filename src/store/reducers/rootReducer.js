import { combineReducers } from 'redux';
import userReducer from './userReducer';
import friendReducer from './friendReducer';

const rootReducer = combineReducers({
    userReducer,
    friendReducer
})

export default rootReducer;