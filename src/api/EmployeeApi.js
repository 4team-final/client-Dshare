import dshareAPI from "../components/configuration/index";

export const requestByEmployeeLogin = async (dataSet) => {
  console.log("requestAPI");
  const response = await dshareAPI.post("/login", {
    empNo: dataSet.id,
    password: dataSet.pw,
  });
  return response;
};

export const testByReIssuanceToken = async () => {
  const response = await dshareAPI.get("/emp/vehicle/list/reservation");
  console.log(response);
  return response;
};
