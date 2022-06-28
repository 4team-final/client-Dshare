import { combineReducers } from "redux";
import boardReducer from "./BoardReducer";
import userReducer from "./UserReducer";
import reservationReducer from "./ReservationReducer";

const rootReducer = combineReducers({
  reservationReducer,
  boardReducer,
  userReducer,
});

export default rootReducer;
