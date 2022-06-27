import {
  EMPLOYEE_VALIDATE,
  EMPLOYEE_VALIDATE_SUCCESS,
  EMPLOYEE_VALIDATE_ERROR,
  TEST_TOKEN,
  TEST_TOKEN_SUCCESS,
  TEST_TOKEN_ERROR,
} from "../actions/EmployeeAction";
import { reducerUtils, handleAsyncActions } from "../../api/AsyncUtil";

const initialState = {
  employee: reducerUtils.initial(),
  token: reducerUtils.initial(),
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_VALIDATE:
    case EMPLOYEE_VALIDATE_SUCCESS:
    case EMPLOYEE_VALIDATE_ERROR:
      return handleAsyncActions(EMPLOYEE_VALIDATE, "employee")(state, action);
    case TEST_TOKEN:
    case TEST_TOKEN_SUCCESS:
    case TEST_TOKEN_ERROR:
      return handleAsyncActions(EMPLOYEE_VALIDATE, "token")(state, action);
    default:
      return state;
  }
}
