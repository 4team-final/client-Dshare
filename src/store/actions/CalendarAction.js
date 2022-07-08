import { createPromiseThunk } from '../../api/AsyncUtil';
import * as CalendarApi from '../../api/CalendarApi';

export const SELECT_ROOM_DATE_CALENDAR = 'SELECT_DATE_CALENDAR';
export const SELECT_ROOM_DATE_CALENDAR_SUCCESS = 'SELECT_DATE_CALENDAR_SUCCESS';
export const SELECT_ROOM_DATE_CALENDAR_ERROR = 'SELECT_DATE_CALENDAR_ERROR';

export const SELECT_VEHICLE_DATE_CALENDAR = 'SELECT_DATE_CALENDAR';
export const SELECT_VEHICLE_DATE_CALENDAR_SUCCESS = 'SELECT_DATE_CALENDAR_SUCCESS';
export const SELECT_VEHICLE_DATE_CALENDAR_ERROR = 'SELECT_DATE_CALENDAR_ERROR';

export const SELECT_VEHILCE_NON_RESERVATION = 'SELECT_VEHILCE_NON_RESERVATION';
export const SELECT_VEHILCE_NON_RESERVATION_SUCCESS = 'SELECT_VEHILCE_NON_RESERVATION_SUCCESS';
export const SELECT_VEHILCE_NON_RESERVATION_ERROR = 'SELECT_VEHILCE_NON_RESERVATION_ERROR';

export const FIND_ALL_VEHICLE = 'FIND_ALL_VEHICLE';
export const FIND_ALL_VEHICLE_SUCCESS = 'FIND_ALL_VEHICLE_SUCCESS';
export const FIND_ALL_VEHICLE_ERROR = 'FIND_ALL_VEHICLE_ERROR';

export const FIND_ALL_ROOM = 'FIND_ALL_ROOM';
export const FIND_ALL_ROOM_SUCCESS = 'FIND_ALL_ROOM_SUCCESS';
export const FIND_ALL_ROOM_ERROR = 'FIND_ALL_ROOM_ERROR';

//특정 일시 회의실 예약 현황 조회
export const RESERVATION_TIME_ROOM_GET = 'RESERVATION_TIME_ROOM_GET';
export const RESERVATION_TIME_ROOM_GET_SUCCESS = 'RESERVATION_TIME_ROOM_GET_SUCCESS';
export const RESERVATION_TIME_ROOM_GET_ERROR = 'RESERVATION_TIME_ROOM_GET_ERROR';
//특정 일시 차량 예약 현황 조회
export const RESERVATION_TIME_VEHICLE_GET = 'RESERVATION_TIME_VEHICLE_GET';
export const RESERVATION_TIME_VEHICLE_GET_SUCCESS = 'RESERVATION_TIME_VEHICLE_GET_SUCCESS';
export const RESERVATION_TIME_VEHICLE_GET_ERROR = 'RESERVATION_TIME_VEHICLE_GET_ERROR';

export const selectByRoomDateCalendar = createPromiseThunk(SELECT_ROOM_DATE_CALENDAR, CalendarApi.selectByRoomDateCalendar);
export const selectByVehicleDateCalendar = createPromiseThunk(SELECT_VEHICLE_DATE_CALENDAR, CalendarApi.selectByVehicleDateCalendar);
export const selectByVehicleNonReservation = createPromiseThunk(SELECT_VEHILCE_NON_RESERVATION, CalendarApi.selectByVehicleNonReservation);
export const findAllByVehicle = createPromiseThunk(FIND_ALL_VEHICLE, CalendarApi.findAllByVehicle);
export const findAllByRoom = createPromiseThunk(FIND_ALL_ROOM, CalendarApi.findAllByRoom);
export const reservationRoomTime = createPromiseThunk(RESERVATION_TIME_ROOM_GET, CalendarApi.findReservationRoomTime);
export const reservationVehicleTime = createPromiseThunk(RESERVATION_TIME_VEHICLE_GET, CalendarApi.findReservationVehicleTime);
