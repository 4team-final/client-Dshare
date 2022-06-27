import * as EmployeeApi from "../../api/EmployeeApi";
import { createPromiseThunk } from "../../api/AsyncUtil";

export const EMPLOYEE_VALIDATE = "EMPLOYEE_VALIDATE";
export const EMPLOYEE_VALIDATE_SUCCESS = "EMPLOYEE_VALIDATE_SUCCESS";
export const EMPLOYEE_VALIDATE_FAIL = "EMPLOYEE_VALIDATE_FAIL";
export const employeeValidate = createPromiseThunk(
  EMPLOYEE_VALIDATE,
  EmployeeApi.requestByEmployeeLogin
);
