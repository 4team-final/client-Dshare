import { combineReducers } from 'redux';
import customization from './customizationReducer';
import reservationReducer from './ReservationReducer';
import changeReducer from './ChangeReducer';
import calendarReducer from './CalendarReducer';
import websocketReducer from './WebsocketReducer';

const rootReducer = combineReducers({
    customization,
    reservationReducer,
    changeReducer,
    calendarReducer,
    websocketReducer
});

export default rootReducer;
