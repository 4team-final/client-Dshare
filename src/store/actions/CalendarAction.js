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

export const MAKE_ROOM_RESERVATION = 'MAKE_ROOM_RESERVATION';
export const MAKE_ROOM_RESERVATION_SUCCESS = 'MAKE_ROOM_RESERVATION_SUCCESS';
export const MAKE_ROOM_RESERVATION_ERROR = 'MAKE_ROOM_RESERVATION_ERROR';

export const MAKE_VEHICLE_RESERVATION = 'MAKE_VEHICLE_RESERVATION';
export const MAKE_VEHICLE_RESERVATION_SUCCESS = 'MAKE_VEHICLE_RESERVATION_SUCCESS';
export const MAKE_VEHICLE_RESERVATION_ERROR = 'MAKE_VEHICLE_RESERVATION_ERROR';

export const MODIFY_ROOM_RESERVATION = 'MODIFY_ROOM_RESERVATION';
export const MODIFY_ROOM_RESERVATION_SUCCESS = 'MODIFY_ROOM_RESERVATION_SUCCESS';
export const MODIFY_ROOM_RESERVATION_ERROR = 'MODIFY_ROOM_RESERVATION_ERROR';

export const MODIFY_VEHICLE_RESERVATION = 'MODIFY_VEHICLE_RESERVATION';
export const MODIFY_VEHICLE_RESERVATION_SUCCESS = 'MODIFY_VEHICLE_RESERVATION_SUCCESS';
export const MODIFY_VEHICLE_RESERVATION_ERROR = 'MODIFY_VEHICLE_RESERVATION_ERROR';

export const selectByRoomDateCalendar = createPromiseThunk(SELECT_ROOM_DATE_CALENDAR, CalendarApi.selectByRoomDateCalendar);
export const selectByVehicleDateCalendar = createPromiseThunk(SELECT_VEHICLE_DATE_CALENDAR, CalendarApi.selectByVehicleDateCalendar);
export const selectByVehicleNonReservation = createPromiseThunk(SELECT_VEHILCE_NON_RESERVATION, CalendarApi.selectByVehicleNonReservation);
export const findAllByVehicle = createPromiseThunk(FIND_ALL_VEHICLE, CalendarApi.findAllByVehicle);
export const findAllByRoom = createPromiseThunk(FIND_ALL_ROOM, CalendarApi.findAllByRoom);
export const makeRoomReservation = createPromiseThunk(MAKE_ROOM_RESERVATION, CalendarApi.makeRoomReservationAPI);
export const makeVehicleReservation = createPromiseThunk(MAKE_VEHICLE_RESERVATION, CalendarApi.makeVehicleReservationAPI);
export const modifyRoomReservation = createPromiseThunk(MODIFY_ROOM_RESERVATION, CalendarApi.modifyRoomReservationAPI);
export const modifyVehicleReservation = createPromiseThunk(MODIFY_VEHICLE_RESERVATION, CalendarApi.modifyVehicleReservationAPI);
