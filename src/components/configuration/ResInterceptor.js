import {
  saveAccessToken,
  getRefresh,
  removeCookie,
  sendAccessToken,
  urlRefresh,
  reqAccess,
  resAccess,
  baseUrl,
} from "./ApiModules";
import { dshareAPI } from "./ApiHandler";

export const resSuccess = (res) => {
  debugger;
  if (res.headers.authorization) {
    saveAccessToken(res.headers.authorization);
  }
  debugger;
  if (
    res.data.message.startsWith("expired_token") ||
    res.data.status === "FORBIDDEN"
  ) {
    const originalRequest = res.config.baseURL + res.config.url.substring(1);
    const RefreshToken = getRefresh();

    debugger;
    if (RefreshToken) {
      console.log("hihi 리프레쉬토큰");
      removeCookie(1);
      try {
        const res = dshareAPI.post(urlRefresh, {
          headers: {
            RefreshToken: RefreshToken,
          },
        });
        debugger;
        saveAccessToken(res.headers[resAccess]);
        originalRequest.headers[reqAccess] = sendAccessToken();
        debugger;
        return dshareAPI(originalRequest);
      } catch {
        dshareAPI.get(`${baseUrl}logout`);
        removeCookie(2);
        alert("로그인 시간이 만료되었습니다. 다시 로그인 해주세요.");
        window.location.href = "/login";
        return false;
      }
    } else {
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      window.location.href = "/login";
      return false;
    }
  }
  return res;
};
export const resError = (err) => {
  console.log(err);
  return err;
};
