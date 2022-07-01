//BoardAction.js
import * as ReserveApi from '../../api/ReserveApi';
import { createPromiseThunk } from '../../api/AsyncUtil';

//액션 타입
export const SOON_ING_TIME_ROOM_GET = 'SOON_ING_TIME_ROOM_GET';
export const SOON_ING_TIME_ROOM_GET_SUCCESS = 'SOON_ING_TIME_ROOM_GET_SUCCESS';
export const SOON_ING_TIME_ROOM_GET_ERROR = 'SOON_ING_TIME_ROOM_GET_ERROR';

export const SOON_TIME_VEHICLE_GET = 'SOON_TIME_VEHICLE_GET';
export const SOON_TIME_VEHICLE_GET_SUCCESS = 'SOON_TIME_VEHICLE_GET_SUCCESS';
export const SOON_TIME_VEHICLE_GET_ERROR = 'SOON_TIME_VEHICLE_GET_ERROR';

export const ING_TIME_VEHICLE_GET = 'ING_TIME_VEHICLE_GET';
export const ING_TIME_VEHICLE_GET_SUCCESS = 'ING_TIME_VEHICLE_GET_SUCCESS';
export const ING_TIME_VEHICLE_GET_ERROR = 'ING_TIME_VEHICLE_GET_ERROR';

export const MY_RESERVATION_ROOM_GET = 'MY_RESERVATION_ROOM_GET';
export const MY_RESERVATION_ROOM_GET_SUCCESS = 'MY_RESERVATION_ROOM_GET_SUCCESS';
export const MY_RESERVATION_ROOM_GET_ERROR = 'MY_RESERVATION_ROOM_GET_ERROR';

export const MY_RESERVATION_VEHICLE_GET = 'MY_RESERVATION_VEHICLE_GET';
export const MY_RESERVATION_VEHICLE_GET_SUCCESS = 'MY_RESERVATION_VEHICLE_GET_SUCCESS';
export const MY_RESERVATION_VEHICLE_GET_ERROR = 'MY_RESERVATION_VEHICLE_GET_ERROR';

export const MY_RESERVATION_ROOM_DELETE = 'MY_RESERVATION_ROOM_DELETE';
export const MY_RESERVATION_ROOM_DELETE_SUCCESS = 'MY_RESERVATION_ROOM_DELETE_SUCCESS';
export const MY_RESERVATION_ROOM_DELETE_ERROR = 'MY_RESERVATION_ROOM_DELETE_ERROR';

export const MY_RESERVATION_VEHICLE_DELETE = 'MY_RESERVATION_VEHICLE_DELETE';
export const MY_RESERVATION_VEHICLE_DELETE_SUCCESS = 'MY_RESERVATION_VEHICLE_DELETE_SUCCESS';
export const MY_RESERVATION_VEHICLE_DELETE_ERROR = 'MY_RESERVATION_VEHICLE_DELETE_ERROR';

export const soonIngTimeRoom = createPromiseThunk(SOON_ING_TIME_ROOM_GET, ReserveApi.findSoonIngTimeRoom);

export const soonTimeVehicle = createPromiseThunk(SOON_TIME_VEHICLE_GET, ReserveApi.findSoonTimeVehcle);
export const ingTimeVehicle = createPromiseThunk(ING_TIME_VEHICLE_GET, ReserveApi.findIngTimeVehcle);

export const myReservationRoomList = createPromiseThunk(MY_RESERVATION_ROOM_GET, ReserveApi.findMyReservationRoomPage);
export const myReservationVehicleList = createPromiseThunk(MY_RESERVATION_VEHICLE_GET, ReserveApi.findMyReservationVehiclePage);

export const myReservationDeleteRoom = createPromiseThunk(MY_RESERVATION_ROOM_DELETE, ReserveApi.deleteMyReservationRoom);
export const myReservationDeleteVehicle = createPromiseThunk(MY_RESERVATION_VEHICLE_DELETE, ReserveApi.deleteMyReservationVehicle);
