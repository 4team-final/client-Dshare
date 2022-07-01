import { combineReducers } from "redux";
import reservationReducer from "./ReservationReducer";
import changeReducer from "./ChangeReducer";

const rootReducer = combineReducers({
  reservationReducer,
  changeReducer,
});

export default rootReducer;
