import { combineReducers } from "redux";
import boardReducer from "./BoardReducer";
import userReducer from "./UserReducer";
import tokenReducer from "./TokenReducer";

const rootReducer = combineReducers({
  tokenReducer,
  boardReducer,
  userReducer,
});

export default rootReducer;
