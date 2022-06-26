//BoardAction.js
import * as ReserveApi from "../../api/ReserveApi";
import { createPromiseThunk } from "../../api/AsyncUtil";

//액션 타입
export const SOON_ING_TIME_ROOM_GET = "SOON_ING_TIME_ROOM_GET";
export const SOON_ING_TIME_ROOM_GET_SUCCESS = "SOON_ING_TIME_ROOM_GET_SUCCESS";
export const SOON_ING_TIME_ROOM_GET_ERROR = "SOON_ING_TIME_ROOM_GET_ERROR";

export const SOON_TIME_VEHICLE_GET = "SOON_TIME_VEHICLE_GET";
export const SOON_TIME_VEHICLE_GET_SUCCESS = "SOON_TIME_VEHICLE_GET_SUCCESS";
export const SOON_TIME_VEHICLE_GET_ERROR = "SOON_TIME_VEHICLE_GET_ERROR";

export const ING_TIME_VEHICLE_GET = "ING_TIME_VEHICLE_GET";
export const ING_TIME_VEHICLE_GET_SUCCESS = "ING_TIME_VEHICLE_GET_SUCCESS";
export const ING_TIME_VEHICLE_GET_ERROR = "ING_TIME_VEHICLE_GET_ERROR";

export const soonIngTimeRoom = createPromiseThunk(
  SOON_ING_TIME_ROOM_GET,
  ReserveApi.findSoonIngTimeRoom
);

export const soonTimeVehicle = createPromiseThunk(
  SOON_TIME_VEHICLE_GET,
  ReserveApi.findSoonTimeVehcle
);
export const IngTimeVehicle = createPromiseThunk(
  ING_TIME_VEHICLE_GET,
  ReserveApi.findIngTimeVehcle
);
