import { combineReducers } from 'redux';
import boardReducer from './BoardReducer';
import userReducer from './UserReducer';
import customization from './customizationReducer';

const rootReducer = combineReducers({
    customization,
    boardReducer,
    userReducer
});

export default rootReducer;
