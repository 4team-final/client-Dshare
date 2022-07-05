import {
    ONEDAY_ROOM_RESERVATION_LIST_GET,
    ONEDAY_ROOM_RESERVATION_LIST_GET_SUCCESS,
    ONEDAY_ROOM_RESERVATION_LIST_GET_ERROR,
    THREEDAY_ROOM_RESERVATION_LIST_GET,
    THREEDAY_ROOM_RESERVATION_LIST_GET_SUCCESS,
    THREEDAY_ROOM_RESERVATION_LIST_GET_ERROR,
    SEVENDAY_ROOM_RESERVATION_LIST_GET,
    SEVENDAY_ROOM_RESERVATION_LIST_GET_SUCCESS,
    SEVENDAY_ROOM_RESERVATION_LIST_GET_ERROR
} from '../actions/DashboardActions';
import { reducerUtils, handleAsyncActions } from '../../api/AsyncUtil';
const initialState = {
    oneDayRoomReservationCount: reducerUtils.initial(),
    threeDayRoomReservationCount: reducerUtils.initial(),
    sevenDayRoomReservationCount: reducerUtils.initial()
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

        default:
            return state;
    }
}
