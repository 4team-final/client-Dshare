import { combineReducers } from "redux";
import boardReducer from "./BoardReducer";
import userReducer from "./UserReducer";
import reservationReducer from "./ReservationReducer";
import changeReducer from "./ChangeReducer";

const rootReducer = combineReducers({
  reservationReducer,
  changeReducer,
  boardReducer,
  userReducer,
});

export default rootReducer;
