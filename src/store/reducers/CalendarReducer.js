import { reducerUtils, handleAsyncActions } from '../../api/AsyncUtil';
import {
    SELECT_ROOM_DATE_CALENDAR,
    SELECT_ROOM_DATE_CALENDAR_SUCCESS,
    SELECT_ROOM_DATE_CALENDAR_ERROR,
    SELECT_VEHICLE_DATE_CALENDAR,
    SELECT_VEHICLE_DATE_CALENDAR_SUCCESS,
    SELECT_VEHICLE_DATE_CALENDAR_ERROR,
    SELECT_VEHILCE_NON_RESERVATION,
    SELECT_VEHILCE_NON_RESERVATION_SUCCESS,
    SELECT_VEHILCE_NON_RESERVATION_ERROR,
    FIND_ALL_VEHICLE,
    FIND_ALL_VEHICLE_SUCCESS,
    FIND_ALL_VEHICLE_ERROR
} from 'store/actions/CalendarAction';

const initialState = {
    calendarRoom: reducerUtils.initial(),
    calendarVehicle: reducerUtils.initial(),
    selectTableVehicle: reducerUtils.initial(),
    allVehicle: reducerUtils.initial()
};

export default function CalendarReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_ROOM_DATE_CALENDAR:
        case SELECT_ROOM_DATE_CALENDAR_SUCCESS:
        case SELECT_ROOM_DATE_CALENDAR_ERROR:
            return handleAsyncActions(SELECT_ROOM_DATE_CALENDAR, 'calendarRoom')(state, action);
        case SELECT_VEHICLE_DATE_CALENDAR:
        case SELECT_VEHICLE_DATE_CALENDAR_SUCCESS:
        case SELECT_VEHICLE_DATE_CALENDAR_ERROR:
            return handleAsyncActions(SELECT_VEHICLE_DATE_CALENDAR, 'calendarVehicle')(state, action);
        case SELECT_VEHILCE_NON_RESERVATION:
        case SELECT_VEHILCE_NON_RESERVATION_SUCCESS:
        case SELECT_VEHILCE_NON_RESERVATION_ERROR:
            return handleAsyncActions(SELECT_VEHILCE_NON_RESERVATION, 'selectTableVehicle')(state, action);
        case FIND_ALL_VEHICLE:
        case FIND_ALL_VEHICLE_SUCCESS:
        case FIND_ALL_VEHICLE_ERROR:
            return handleAsyncActions(FIND_ALL_VEHICLE, 'allVehicle')(state, action);
        default:
            return state;
    }
}
