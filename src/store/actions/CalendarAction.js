import { createPromiseThunk } from '../../api/AsyncUtil';
import * as CalendarApi from '../../api/CalendarApi';

export const SELECT_ROOM_DATE_CALENDAR = 'SELECT_DATE_CALENDAR';
export const SELECT_ROOM_DATE_CALENDAR_SUCCESS = 'SELECT_DATE_CALENDAR_SUCCESS';
export const SELECT_ROOM_DATE_CALENDAR_ERROR = 'SELECT_DATE_CALENDAR_ERROR';

export const SELECT_VEHICLE_DATE_CALENDAR = 'SELECT_DATE_CALENDAR';
export const SELECT_VEHICLE_DATE_CALENDAR_SUCCESS = 'SELECT_DATE_CALENDAR_SUCCESS';
export const SELECT_VEHICLE_DATE_CALENDAR_ERROR = 'SELECT_DATE_CALENDAR_ERROR';

export const selectRoomDateCalendar = createPromiseThunk(SELECT_ROOM_DATE_CALENDAR, CalendarApi.selectRoomDateCalendar);
export const selectVehicleDateCalendar = createPromiseThunk(SELECT_VEHICLE_DATE_CALENDAR, CalendarApi.selectVehicleDateCalendar);
