import { combineReducers } from 'redux';
import reservationReducer from './ReservationReducer';
import changeReducer from './ChangeReducer';
import customization from './customizationReducer';
import dashboardReducer from './DashboardReducer';

const rootReducer = combineReducers({
    reservationReducer,
    changeReducer,
    customization,
    dashboardReducer
});

export default rootReducer;
