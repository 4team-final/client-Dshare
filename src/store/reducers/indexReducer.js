import { combineReducers } from 'redux';
import reservationReducer from './ReservationReducer';
import changeReducer from './ChangeReducer';
import customization from './customizationReducer';

const rootReducer = combineReducers({
    reservationReducer,
    changeReducer,
    customization
});

export default rootReducer;
