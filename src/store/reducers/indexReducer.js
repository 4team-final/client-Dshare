import { combineReducers } from 'redux';
import customization from './customizationReducer';
import reservationReducer from './ReservationReducer';
import changeReducer from './ChangeReducer';
import calendarReducer from './CalendarReducer';
import websocketReducer from './WebsocketReducer';
import dashboardReducer from './DashboardReducer';

const rootReducer = combineReducers({
    reservationReducer,
    changeReducer,
    calendarReducer,
    websocketReducer,
    customization,
    dashboardReducer
});

export default rootReducer;
