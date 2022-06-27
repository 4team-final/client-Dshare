import {
  EMPLOYEE_VALIDATE,
  EMPLOYEE_VALIDATE_SUCCESS,
  EMPLOYEE_VALIDATE_FAIL,
} from "../actions/EmployeeAction";
import { reducerUtils, handleAsyncActions } from "../../api/AsyncUtil";
import { saveAccessToken } from "../../components/LoginForm/manageLogin";

const initialState = {
  employee: reducerUtils.initial(),
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_VALIDATE:
    case EMPLOYEE_VALIDATE_SUCCESS:
    case EMPLOYEE_VALIDATE_FAIL:
      if (state.data !== null) {
        saveAccessToken(state?.data?.headers?.get("authorization"));
        console.log(state?.data?.headers);
      }
      return handleAsyncActions(EMPLOYEE_VALIDATE, "employee")(state, action);
    default:
      return state;
  }
}
