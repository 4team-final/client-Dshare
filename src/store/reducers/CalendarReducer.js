import { reducerUtils, handleAsyncActions } from '../../api/AsyncUtil';
import {
    SELECT_ROOM_DATE_CALENDAR,
    SELECT_ROOM_DATE_CALENDAR_SUCCESS,
    SELECT_ROOM_DATE_CALENDAR_ERROR,
    SELECT_VEHICLE_DATE_CALENDAR,
    SELECT_VEHICLE_DATE_CALENDAR_SUCCESS,
    SELECT_VEHICLE_DATE_CALENDAR_ERROR
} from 'store/actions/CalendarAction';

const initialState = {
    calendarRoom: reducerUtils.initial(),
    calendarVehicle: reducerUtils.initial()
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
        default:
            return state;
    }
}
