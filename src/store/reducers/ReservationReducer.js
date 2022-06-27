import {
  SOON_ING_TIME_ROOM_GET,
  SOON_ING_TIME_ROOM_GET_SUCCESS,
  SOON_ING_TIME_ROOM_GET_ERROR,
  SOON_TIME_VEHICLE_GET,
  SOON_TIME_VEHICLE_GET_SUCCESS,
  SOON_TIME_VEHICLE_GET_ERROR,
  ING_TIME_VEHICLE_GET,
  ING_TIME_VEHICLE_GET_SUCCESS,
  ING_TIME_VEHICLE_GET_ERROR,
} from "../actions/ReservationAction";
import { reducerUtils, handleAsyncActions } from "../../api/AsyncUtil";
const initialState = {
  soonIngTimeRoom: reducerUtils.initial(),
  soonTimeVehicle: reducerUtils.initial(),
  ingTimeVehicle: reducerUtils.initial(),
};

export default function ReservationReducer(state = initialState, action) {
  switch (action.type) {
    case SOON_ING_TIME_ROOM_GET:
    case SOON_ING_TIME_ROOM_GET_SUCCESS:
    case SOON_ING_TIME_ROOM_GET_ERROR:
      return handleAsyncActions(SOON_ING_TIME_ROOM_GET, "soonIngTimeRoom")(
        state,
        action
      );
    case SOON_TIME_VEHICLE_GET:
    case SOON_TIME_VEHICLE_GET_SUCCESS:
    case SOON_TIME_VEHICLE_GET_ERROR:
      return handleAsyncActions(SOON_TIME_VEHICLE_GET, "soonTimeVehicle")(
        state,
        action
      );
    case ING_TIME_VEHICLE_GET:
    case ING_TIME_VEHICLE_GET_SUCCESS:
    case ING_TIME_VEHICLE_GET_ERROR:
      return handleAsyncActions(ING_TIME_VEHICLE_GET, "ingTimeVehicle")(
        state,
        action
      );

    default:
      return state;
  }
}
