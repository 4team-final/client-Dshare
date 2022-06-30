import {
  resAccess,
  resRefresh,
  urlRefresh,
  saveToken,
  getToken,
  removeToken,
} from "./ApiParts";
import { dshareAPI, requestByEmployeeLogout } from "./ApiHandler";

export const resSuccess = async (res) => {
  if (res.headers[resAccess]) {
    saveToken("access", res.headers[resAccess]);
  }
  if (res.headers[resRefresh]) {
    saveToken("refresh", res.headers[resRefresh]);
  }
  if (
    res.data.message.startsWith("expired_token") ||
    res.data.status === "FORBIDDEN"
  ) {
    console.log(res.config);
    const originalRequest = res.config.url;
    const RefreshToken = getToken("refresh");
    if (RefreshToken) {
      removeToken("access");
      const result = await dshareAPI(urlRefresh, {
        headers: {
          RefreshToken: RefreshToken,
        },
      });
      saveToken("access", result.headers[resAccess]);
      return await dshareAPI(originalRequest);
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
