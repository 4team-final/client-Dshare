import axios from "axios";
import { Cookies } from "react-cookie";

const accessName = "authorization";
const refreshName = "refreshtoken";
const cookie = new Cookies();

export const saveAccessToken = (value) => {
  cookie.set(accessName, value);
};
export const getCookie = (tokenName) => {
  return cookie.get(tokenName);
};
export const sendTokenInCookie = (tokenName) => {
  return tokenName.startsWith("refresh")
    ? getCookie(refreshName)
    : `Bearer ${getCookie(accessName)}`;
};
export const removeCookie = (tokenName) => {
  cookie.remove(tokenName);
};

export const sendTokenAutoConvert = () => {
  let result = axios
    .get("http://15.164.185.111/emp/vehicle/list/reservation", {
      header: { accessName: sendTokenInCookie(accessName) },
    })
    .then((res) => res.data);

  if (result.data.status == 400) {
    let res = axios
      .get("http://15.164.185.111/emp/vehicle/list/reservation", {
        header: { refreshName: sendTokenInCookie(refreshName) },
      })
      .then((res) => res.data);
    saveAccessToken(res.header.get(accessName));
    sendTokenAutoConvert();
  }

  return result;
};
