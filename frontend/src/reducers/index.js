import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer
});