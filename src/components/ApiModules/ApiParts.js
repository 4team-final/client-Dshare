import { Cookies } from "react-cookie";

const cookie = new Cookies();
export const baseUrl = process.env.REACT_APP_BASE_URL;
// export const baseUrl = "http://52.79.75.97:8082/";
// export const baseUrl = "http://localhost:8082/";
export const reqAccess = process.env.REACT_APP_ACCESS_REQ;
export const resAccess = process.env.REACT_APP_ACCESS_RES;
export const reqRefresh = process.env.REACT_APP_REFRESH_REQ;
export const resRefresh = process.env.REACT_APP_REFRESH_RES;
export const urlRefresh = process.env.REACT_APP_REFRESH_URL;
export const getAccess = () => {
  return cookie.get(reqAccess);
};
export const getRefresh = () => {
  return cookie.get(reqRefresh);
};
export const getToken = (key) => {
  switch (key) {
    case "access":
      return cookie.get(reqAccess);
    case "refresh":
      return cookie.get(reqRefresh);
    default:
      return;
  }
};
export const saveToken = (key, value) => {
  let tokenKey = "",
    tokenValue = "";
  switch (key) {
    case "access":
      tokenKey = reqAccess;
      tokenValue = value.substring(7);
      break;
    case "refresh":
      tokenKey = reqRefresh;
      tokenValue = value;
      break;
    default:
      break;
  }
  cookie.set(tokenKey, tokenValue, {
    secure: true,
    path: "/",
  });
  return;
};
export const removeToken = (key) => {
  switch (key) {
    case "access":
      cookie.remove(reqAccess);
      return;
    case "refresh":
      cookie.remove(reqRefresh);
      return;
    case "two":
      cookie.remove(reqAccess);
      cookie.remove(reqRefresh);
      return;
    default:
      return;
  }
};
export const sendToken = (key) => {
  switch (key) {
    case "access":
      return `Bearer ${cookie.get(reqAccess)}`;
    case "refresh":
      return cookie.get(reqRefresh);
    default:
      return;
  }
};
