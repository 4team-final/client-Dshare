import dshareAPI from "../components/configuration/index";

export const requestByEmployeeLogin = async (dataSet) => {
  const response = await dshareAPI.post("/login", {
    empNo: dataSet.id,
    password: dataSet.pw,
  });
  return response;
};

export const testByReIssuanceToken = async () => {
  const response = await dshareAPI.get("/emp/vehicle/list/reservation");
  return response;
};
