import { dshareAxios } from "../components/LoginForm/manageLogin";

export const requestByEmployeeLogin = async (dataSet) => {
  const response = await dshareAxios.post("/login", {
    empNo: dataSet.id,
    password: dataSet.pw,
  });
  return response;
};

export const testByReIssuanceToken = async () => {
  const response = await dshareAxios.get("/emp/vehicle/list/reservation");
  console.log(response);
  return response;
};
