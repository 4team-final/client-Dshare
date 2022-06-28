import { Cookies } from "react-cookie";

const cookie = new Cookies();
export const baseUrl = process.env.REACT_APP_BASE_URL;
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
export const saveAccessToken = (value) => {
  console.log(reqAccess);
  console.log(value);

  debugger;

  cookie.set(reqAccess, value.substring(7));
};
export const sendAccessToken = () => {
  return `Bearer ${cookie.get(reqAccess)}`;
};
export const removeCookie = (value) => {
  switch (value) {
    case 1:
      cookie.remove(reqAccess);
      return;
    case 2:
      cookie.remove(reqAccess);
      cookie.remove(reqRefresh);
      return;
    default:
      return;
  }
};
