import { combineReducers } from "redux";
import boardReducer from "./BoardReducer";
import userReducer from "./UserReducer";
import tokenReducer from "./TokenReducer";
import employeeReducer from "./EmployeeReducer";

const rootReducer = combineReducers({
  employeeReducer,
  tokenReducer,
  boardReducer,
  userReducer,
});

export default rootReducer;
