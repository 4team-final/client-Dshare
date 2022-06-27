import { combineReducers } from "redux";
import boardReducer from "./BoardReducer";
import userReducer from "./UserReducer";
import tokenReducer from "./TokenReducer";
import reservationReducer from "./ReservationReducer";

const rootReducer = combineReducers({
  reservationReducer,
  tokenReducer,
  boardReducer,
  userReducer,
});

export default rootReducer;
