import {
    ONEDAY_ROOM_RESERVATION_LIST_GET,
    ONEDAY_ROOM_RESERVATION_LIST_GET_SUCCESS,
    ONEDAY_ROOM_RESERVATION_LIST_GET_ERROR,
    THREEDAY_ROOM_RESERVATION_LIST_GET,
    THREEDAY_ROOM_RESERVATION_LIST_GET_SUCCESS,
    THREEDAY_ROOM_RESERVATION_LIST_GET_ERROR,
    SEVENDAY_ROOM_RESERVATION_LIST_GET,
    SEVENDAY_ROOM_RESERVATION_LIST_GET_SUCCESS,
    SEVENDAY_ROOM_RESERVATION_LIST_GET_ERROR,
    ONEDAY_ROOM_RESERVATION_TIME_LIST_GET,
    ONEDAY_ROOM_RESERVATION_TIME_LIST_GET_SUCCESS,
    ONEDAY_ROOM_RESERVATION_TIME_LIST_GET_ERROR,
    THREEDAY_ROOM_RESERVATION_TIME_LIST_GET,
    THREEDAY_ROOM_RESERVATION_TIME_LIST_GET_SUCCESS,
    THREEDAY_ROOM_RESERVATION_TIME_LIST_GET_ERROR,
    SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET,
    SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET_SUCCESS,
    SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET_ERROR,
    ONEDAY_ROOM_MEET_TIME_LIST_GET,
    ONEDAY_ROOM_MEET_TIME_LIST_GET_SUCCESS,
    ONEDAY_ROOM_MEET_TIME_LIST_GET_ERROR,
    THREEDAY_ROOM_MEET_TIME_LIST_GET,
    THREEDAY_ROOM_MEET_TIME_LIST_GET_SUCCESS,
    THREEDAY_ROOM_MEET_TIME_LIST_GET_ERROR,
    SEVENDAY_ROOM_MEET_TIME_LIST_GET,
    SEVENDAY_ROOM_MEET_TIME_LIST_GET_SUCCESS,
    SEVENDAY_ROOM_MEET_TIME_LIST_GET_ERROR,
    ONEDAY_VEHICLE_RESERVATION_LIST_GET,
    ONEDAY_VEHICLE_RESERVATION_LIST_GET_SUCCESS,
    ONEDAY_VEHICLERESERVATION_LIST_GET_ERROR,
    THREEDAY_VEHICLE_RESERVATION_LIST_GET,
    THREEDAY_VEHICLE_RESERVATION_LIST_GET_SUCCESS,
    THREEDAY_VEHICLE_RESERVATION_LIST_GET_ERROR,
    SEVENDAY_VEHICLE_RESERVATION_LIST_GET,
    SEVENDAY_VEHICLE_RESERVATION_LIST_GET_SUCCESS,
    SEVENDAY_VEHICLE_RESERVATION_LIST_GET_ERROR,
    ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET,
    ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_SUCCESS,
    ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_ERROR,
    THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET,
    THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_SUCCESS,
    THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_ERROR,
    SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET,
    SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET_SUCCESS,
    SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET_ERROR,
    ONEDAY_VEHICLE_MEET_TIME_LIST_GET,
    ONEDAY_VEHICLE_MEET_TIME_LIST_GET_SUCCESS,
    ONEDAY_VEHICLE_MEET_TIME_LIST_GET_ERROR,
    THREEDAY_VEHICLE_MEET_TIME_LIST_GET,
    THREEDAY_VEHICLE_MEET_TIME_LIST_GET_SUCCESS,
    THREEDAY_VEHICLE_MEET_TIME_LIST_GET_ERROR,
    SEVENDAY_VEHICLE_MEET_TIME_LIST_GET,
    SEVENDAY_VEHICLE_MEET_TIME_LIST_GET_SUCCESS,
    SEVENDAY_VEHICLE_MEET_TIME_LIST_GET_ERROR,
    BOOKMARK_ROOM_TOP_GET,
    BOOKMARK_ROOM_TOP_GET_SUCCESS,
    BOOKMARK_ROOM_TOP_GET_ERROR,
    BOOKMARK_VEHICLE_TOP_GET,
    BOOKMARK_VEHICLE_TOP_GET_SUCCESS,
    BOOKMARK_VEHICLE_TOP_GET_ERROR,
    RECENT_ROOM_RESERVATION_GET,
    RECENT_ROOM_RESERVATION_GET_SUCCESS,
    RECENT_ROOM_RESERVATION_GET_ERROR,
    RECENT_VEHICLE_RESERVATION_GET,
    RECENT_VEHICLE_RESERVATION_GET_SUCCESS,
    RECENT_VEHICLE_RESERVATION_GET_ERROR
} from '../actions/DashboardActions';
import { reducerUtils, handleAsyncActions } from '../../api/AsyncUtil';
const initialState = {
    oneDayRoomReservationCount: reducerUtils.initial(),
    threeDayRoomReservationCount: reducerUtils.initial(),
    sevenDayRoomReservationCount: reducerUtils.initial(),

    oneDayRoomReservationTime: reducerUtils.initial(),
    threeDayRoomReservationTime: reducerUtils.initial(),
    sevenDayRoomReservationTime: reducerUtils.initial(),

    oneDayRoomMeetTime: reducerUtils.initial(),
    threeDayRoomMeetTime: reducerUtils.initial(),
    sevenDayRoomMeetTime: reducerUtils.initial(),

    oneDayVehicleReservationCount: reducerUtils.initial(),
    threeDayVehicleReservationCount: reducerUtils.initial(),
    sevenDayVehicleReservationCount: reducerUtils.initial(),

    oneDayVehicleReservationTime: reducerUtils.initial(),
    threeDayVehicleReservationTime: reducerUtils.initial(),
    sevenDayVehicleReservationTime: reducerUtils.initial(),

    oneDayVehicleMeetTime: reducerUtils.initial(),
    threeDayVehicleMeetTime: reducerUtils.initial(),
    sevenDayVehicleMeetTime: reducerUtils.initial(),

    bookmarkRoomTop: reducerUtils.initial(),
    bookmarkVehicleTop: reducerUtils.initial(),

    recentReservationRoom: reducerUtils.initial(),
    recentReservationVehicle: reducerUtils.initial()
};

export default function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        case ONEDAY_ROOM_RESERVATION_LIST_GET:
        case ONEDAY_ROOM_RESERVATION_LIST_GET_SUCCESS:
        case ONEDAY_ROOM_RESERVATION_LIST_GET_ERROR:
            return handleAsyncActions(ONEDAY_ROOM_RESERVATION_LIST_GET, 'oneDayRoomReservationCount')(state, action);
        case THREEDAY_ROOM_RESERVATION_LIST_GET:
        case THREEDAY_ROOM_RESERVATION_LIST_GET_SUCCESS:
        case THREEDAY_ROOM_RESERVATION_LIST_GET_ERROR:
            return handleAsyncActions(THREEDAY_ROOM_RESERVATION_LIST_GET, 'threeDayRoomReservationCount')(state, action);
        case SEVENDAY_ROOM_RESERVATION_LIST_GET:
        case SEVENDAY_ROOM_RESERVATION_LIST_GET_SUCCESS:
        case SEVENDAY_ROOM_RESERVATION_LIST_GET_ERROR:
            return handleAsyncActions(SEVENDAY_ROOM_RESERVATION_LIST_GET, 'sevenDayRoomReservationCount')(state, action);

        case ONEDAY_ROOM_RESERVATION_TIME_LIST_GET:
        case ONEDAY_ROOM_RESERVATION_TIME_LIST_GET_SUCCESS:
        case ONEDAY_ROOM_RESERVATION_TIME_LIST_GET_ERROR:
            return handleAsyncActions(ONEDAY_ROOM_RESERVATION_TIME_LIST_GET, 'oneDayRoomReservationTime')(state, action);
        case THREEDAY_ROOM_RESERVATION_TIME_LIST_GET:
        case THREEDAY_ROOM_RESERVATION_TIME_LIST_GET_SUCCESS:
        case THREEDAY_ROOM_RESERVATION_TIME_LIST_GET_ERROR:
            return handleAsyncActions(THREEDAY_ROOM_RESERVATION_TIME_LIST_GET, 'threeDayRoomReservationTime')(state, action);
        case SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET:
        case SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET_SUCCESS:
        case SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET_ERROR:
            return handleAsyncActions(SEVENDAY_ROOM_RESERVATION_TIME_LIST_GET, 'sevenDayRoomReservationTime')(state, action);

        case ONEDAY_ROOM_MEET_TIME_LIST_GET:
        case ONEDAY_ROOM_MEET_TIME_LIST_GET_SUCCESS:
        case ONEDAY_ROOM_MEET_TIME_LIST_GET_ERROR:
            return handleAsyncActions(ONEDAY_ROOM_MEET_TIME_LIST_GET, 'oneDayRoomMeetTime')(state, action);
        case THREEDAY_ROOM_MEET_TIME_LIST_GET:
        case THREEDAY_ROOM_MEET_TIME_LIST_GET_SUCCESS:
        case THREEDAY_ROOM_MEET_TIME_LIST_GET_ERROR:
            return handleAsyncActions(THREEDAY_ROOM_MEET_TIME_LIST_GET, 'threeDayRoomMeetTime')(state, action);
        case SEVENDAY_ROOM_MEET_TIME_LIST_GET:
        case SEVENDAY_ROOM_MEET_TIME_LIST_GET_SUCCESS:
        case SEVENDAY_ROOM_MEET_TIME_LIST_GET_ERROR:
            return handleAsyncActions(SEVENDAY_ROOM_MEET_TIME_LIST_GET, 'sevenDayRoomMeetTime')(state, action);

        case ONEDAY_VEHICLE_RESERVATION_LIST_GET:
        case ONEDAY_VEHICLE_RESERVATION_LIST_GET_SUCCESS:
        case ONEDAY_VEHICLERESERVATION_LIST_GET_ERROR:
            return handleAsyncActions(ONEDAY_VEHICLE_RESERVATION_LIST_GET, 'oneDayVehicleReservationCount')(state, action);
        case THREEDAY_VEHICLE_RESERVATION_LIST_GET:
        case THREEDAY_VEHICLE_RESERVATION_LIST_GET_SUCCESS:
        case THREEDAY_VEHICLE_RESERVATION_LIST_GET_ERROR:
            return handleAsyncActions(THREEDAY_VEHICLE_RESERVATION_LIST_GET, 'threeDayVehicleReservationCount')(state, action);
        case SEVENDAY_VEHICLE_RESERVATION_LIST_GET:
        case SEVENDAY_VEHICLE_RESERVATION_LIST_GET_SUCCESS:
        case SEVENDAY_VEHICLE_RESERVATION_LIST_GET_ERROR:
            return handleAsyncActions(SEVENDAY_VEHICLE_RESERVATION_LIST_GET, 'sevenDayVehicleReservationCount')(state, action);

        case ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET:
        case ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_SUCCESS:
        case ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_ERROR:
            return handleAsyncActions(ONEDAY_VEHICLE_RESERVATION_TIME_LIST_GET, 'oneDayVehicleReservationTime')(state, action);
        case THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET:
        case THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_SUCCESS:
        case THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET_ERROR:
            return handleAsyncActions(THREEDAY_VEHICLE_RESERVATION_TIME_LIST_GET, 'threeDayVehicleReservationTime')(state, action);
        case SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET:
        case SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET_SUCCESS:
        case SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET_ERROR:
            return handleAsyncActions(SEVENDAY_VEHICLE_RESERVATION_TIME_LIST_GET, 'sevenDayVehicleReservationTime')(state, action);

        case ONEDAY_VEHICLE_MEET_TIME_LIST_GET:
        case ONEDAY_VEHICLE_MEET_TIME_LIST_GET_SUCCESS:
        case ONEDAY_VEHICLE_MEET_TIME_LIST_GET_ERROR:
            return handleAsyncActions(ONEDAY_VEHICLE_MEET_TIME_LIST_GET, 'oneDayVehicleMeetTime')(state, action);
        case THREEDAY_VEHICLE_MEET_TIME_LIST_GET:
        case THREEDAY_VEHICLE_MEET_TIME_LIST_GET_SUCCESS:
        case THREEDAY_VEHICLE_MEET_TIME_LIST_GET_ERROR:
            return handleAsyncActions(THREEDAY_VEHICLE_MEET_TIME_LIST_GET, 'threeDayVehicleMeetTime')(state, action);
        case SEVENDAY_VEHICLE_MEET_TIME_LIST_GET:
        case SEVENDAY_VEHICLE_MEET_TIME_LIST_GET_SUCCESS:
        case SEVENDAY_VEHICLE_MEET_TIME_LIST_GET_ERROR:
            return handleAsyncActions(SEVENDAY_VEHICLE_MEET_TIME_LIST_GET, 'sevenDayVehicleMeetTime')(state, action);

        case BOOKMARK_ROOM_TOP_GET:
        case BOOKMARK_ROOM_TOP_GET_SUCCESS:
        case BOOKMARK_ROOM_TOP_GET_ERROR:
            return handleAsyncActions(BOOKMARK_ROOM_TOP_GET, 'bookmarkRoomTop')(state, action);
        case BOOKMARK_VEHICLE_TOP_GET:
        case BOOKMARK_VEHICLE_TOP_GET_SUCCESS:
        case BOOKMARK_VEHICLE_TOP_GET_ERROR:
            return handleAsyncActions(BOOKMARK_VEHICLE_TOP_GET, 'bookmarkVehicleTop')(state, action);

        case RECENT_ROOM_RESERVATION_GET:
        case RECENT_ROOM_RESERVATION_GET_SUCCESS:
        case RECENT_ROOM_RESERVATION_GET_ERROR:
            return handleAsyncActions(RECENT_ROOM_RESERVATION_GET, 'recentReservationRoom')(state, action);

        case RECENT_VEHICLE_RESERVATION_GET:
        case RECENT_VEHICLE_RESERVATION_GET_SUCCESS:
        case RECENT_VEHICLE_RESERVATION_GET_ERROR:
            return handleAsyncActions(RECENT_VEHICLE_RESERVATION_GET, 'recentReservationVehicle')(state, action);

        default:
            return state;
    }
}