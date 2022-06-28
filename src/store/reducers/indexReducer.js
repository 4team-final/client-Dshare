import { combineReducers } from "redux";
import boardReducer from "./BoardReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  boardReducer,
  userReducer,
});

export default rootReducer;
