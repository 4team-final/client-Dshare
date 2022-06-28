import {
  saveAccessToken,
  getRefresh,
  removeCookie,
  sendAccessToken,
  reqAccess,
  resAccess,
  urlRefresh,
} from "./ApiParts";
import { dshareAPI, requestByEmployeeLogout } from "./ApiHandler";

export const resSuccess = (res) => {
  if (res.headers.authorization) {
    saveAccessToken(res.headers.authorization);
  }
  if (
    res.data.message.startsWith("expired_token") ||
    res.data.status === "FORBIDDEN"
  ) {
    const originalRequest = res.config.baseURL + res.config.url.substring(1);
    const RefreshToken = getRefresh();
    if (RefreshToken) {
      removeCookie(1);
      const res = dshareAPI(`/${urlRefresh}`, {
        headers: {
          RefreshToken: RefreshToken,
        },
      });
      saveAccessToken(res.headers[resAccess]);
      originalRequest.headers[reqAccess] = sendAccessToken();
      return dshareAPI(originalRequest);
    } else {
      requestByEmployeeLogout();
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      return false;
    }
  }
  return res;
};
export const resError = (err) => {
  console.log(err);
  return err;
};
