import Axios from "axios";
import { Cookies } from "react-cookie";
// import { baseUrl } from "../../api/BaseUrl";
const baseUrl = "http://localhost:8082/";

const cookie = new Cookies();
const reqAccess = "Authorization";
const resAccess = "authorization";
const reqRefresh = "Refreshtoken";
const resRefresh = "refreshtoken";

const getCookie = (tokenName) => {
  return cookie.get(tokenName);
};
const saveAccessToken = (value) => {
  cookie.set(reqAccess, value.substring(7));
};
const sendAccessToken = () => {
  return `Bearer ${getCookie(reqAccess)}`;
};
const removeCookie = (value) => {
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

export const dshareAxios = Axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

dshareAxios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  if (!config.url.startsWith("/login"))
    config.headers[reqAccess] = sendAccessToken();

  return config;
});
dshareAxios.interceptors.response.use(
  (config) => {
    if (config.headers[resAccess]) saveAccessToken(config.headers[resAccess]);
    if (
      config.data.message ===
        "서버 접근에 실패하였습니다.토큰 검증에 실패하였습니다." ||
      config.data.status === "BAD_REQUSET"
    ) {
      const originalRequest =
        config.config.baseURL + config.config.url.substring(1);
      const preRefreshToken = getCookie(resRefresh);
      if (preRefreshToken) {
        removeCookie(1);
        try {
          const res = Axios.post(baseUrl, {
            headers: {
              RefreshToken: preRefreshToken,
            },
          });
          saveAccessToken(res.data.headers.resAccess);
          originalRequest.headers[reqAccess] = sendAccessToken();
          return dshareAxios(originalRequest);
        } catch {
          dshareAxios.get(`${baseUrl}logout`);
          removeCookie(2);
          window.location.href = "/login";
          return false;
        }
      }
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
