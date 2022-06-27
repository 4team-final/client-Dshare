import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const requestByEmployeeLogin = async (dataSet) => {
  const response = await axios
    .post(`${baseUrl}login`, {
      empNo: dataSet.id,
      password: dataSet.pw,
    })
    .catch((e) => console.error(e));
  return response;
};
