import * as EmployeeApi from "../../api/EmployeeApi";
import { createPromiseThunk } from "../../api/AsyncUtil";

export const EMPLOYEE_VALIDATE = "EMPLOYEE_VALIDATE";
export const EMPLOYEE_VALIDATE_SUCCESS = "EMPLOYEE_VALIDATE_SUCCESS";
export const EMPLOYEE_VALIDATE_ERROR = "EMPLOYEE_VALIDATE_ERROR";
export const employeeValidate = createPromiseThunk(
  EMPLOYEE_VALIDATE,
  EmployeeApi.requestByEmployeeLogin
);

export const TEST_TOKEN = "TEST_TOKEN";
export const TEST_TOKEN_SUCCESS = "TEST_TOKEN_SUCCESS";
export const TEST_TOKEN_ERROR = "TEST_TOKEN_ERROR";
export const testToken = createPromiseThunk(
  TEST_TOKEN,
  EmployeeApi.testByReIssuanceToken
);
