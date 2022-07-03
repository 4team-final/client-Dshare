import { combineReducers } from 'redux';
import boardReducer from './BoardReducer';
import userReducer from './UserReducer';
import customization from './customizationReducer';
import reservationReducer from './ReservationReducer';
import changeReducer from './ChangeReducer';
import calendarReducer from './CalendarReducer';
import websocketReducer from './WebsocketReducer';

const rootReducer = combineReducers({
    customization,
    reservationReducer,
    changeReducer,
    boardReducer,
    userReducer,
    calendarReducer,
    websocketReducer
});

export default rootReducer;
