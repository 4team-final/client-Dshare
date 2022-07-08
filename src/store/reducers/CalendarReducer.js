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
    FIND_ALL_VEHICLE_ERROR,
    FIND_ALL_ROOM,
    FIND_ALL_ROOM_SUCCESS,
    FIND_ALL_ROOM_ERROR,
    MAKE_ROOM_RESERVATION,
    MAKE_ROOM_RESERVATION_SUCCESS,
    MAKE_ROOM_RESERVATION_ERROR,
    MAKE_VEHICLE_RESERVATION,
    MAKE_VEHICLE_RESERVATION_SUCCESS,
    MAKE_VEHICLE_RESERVATION_ERROR,
    MODIFY_ROOM_RESERVATION,
    MODIFY_ROOM_RESERVATION_SUCCESS,
    MODIFY_ROOM_RESERVATION_ERROR,
    MODIFY_VEHICLE_RESERVATION,
    MODIFY_VEHICLE_RESERVATION_SUCCESS,
    MODIFY_VEHICLE_RESERVATION_ERROR,
    SELECT_COMPLETE_ROOM_RESERVATION,
    SELECT_COMPLETE_ROOM_RESERVATION_SUCCESS,
    SELECT_COMPLETE_ROOM_RESERVATION_ERROR,
    SELECT_COMPLETE_VEHICLE_RESERVATION,
    SELECT_COMPLETE_VEHICLE_RESERVATION_SUCCESS,
    SELECT_COMPLETE_VEHICLE_RESERVATION_ERROR
} from 'store/actions/CalendarAction';

const initialState = {
    calendarRoom: reducerUtils.initial(),
    calendarVehicle: reducerUtils.initial(),
    selectTableVehicle: reducerUtils.initial(),
    allVehicle: reducerUtils.initial(),
    allRoom: reducerUtils.initial(),
    roomReservation: reducerUtils.initial(),
    vehicleReservation: reducerUtils.initial(),
    completeRoomReservation: reducerUtils.initial(),
    completeVehicleReservation: reducerUtils.initial()
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
        case FIND_ALL_ROOM:
        case FIND_ALL_ROOM_SUCCESS:
        case FIND_ALL_ROOM_ERROR:
            return handleAsyncActions(FIND_ALL_ROOM, 'allRoom')(state, action);
        case MAKE_ROOM_RESERVATION:
        case MAKE_ROOM_RESERVATION_SUCCESS:
        case MAKE_ROOM_RESERVATION_ERROR:
            return handleAsyncActions(MAKE_ROOM_RESERVATION, 'roomReservation')(state, action);
        case MAKE_VEHICLE_RESERVATION:
        case MAKE_VEHICLE_RESERVATION_SUCCESS:
        case MAKE_VEHICLE_RESERVATION_ERROR:
            return handleAsyncActions(MAKE_VEHICLE_RESERVATION, 'vehicleReservation')(state, action);
        case MODIFY_ROOM_RESERVATION:
        case MODIFY_ROOM_RESERVATION_SUCCESS:
        case MODIFY_ROOM_RESERVATION_ERROR:
            return handleAsyncActions(MODIFY_ROOM_RESERVATION, 'roomReservation')(state, action);
        case MODIFY_VEHICLE_RESERVATION:
        case MODIFY_VEHICLE_RESERVATION_SUCCESS:
        case MODIFY_VEHICLE_RESERVATION_ERROR:
            return handleAsyncActions(MODIFY_VEHICLE_RESERVATION, 'vehicleReservation')(state, action);
        case SELECT_COMPLETE_ROOM_RESERVATION:
        case SELECT_COMPLETE_ROOM_RESERVATION_SUCCESS:
        case SELECT_COMPLETE_ROOM_RESERVATION_ERROR:
            return handleAsyncActions(SELECT_COMPLETE_ROOM_RESERVATION, 'completeRoomReservation')(state, action);
        case SELECT_COMPLETE_VEHICLE_RESERVATION:
        case SELECT_COMPLETE_VEHICLE_RESERVATION_SUCCESS:
        case SELECT_COMPLETE_VEHICLE_RESERVATION_ERROR:
            return handleAsyncActions(SELECT_COMPLETE_VEHICLE_RESERVATION, 'completeVehicleReservation')(state, action);
        default:
            return state;
    }
}
