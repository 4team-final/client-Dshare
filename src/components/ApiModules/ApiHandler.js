import axios from "axios";
import { baseUrl } from "./ApiParts";
import { request } from "./ReqInterceptor";
import { resError, resSuccess } from "./ResInterceptor";

export const dshareAPI = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true,
  headers: { RefreshToken: "" },
});

dshareAPI.interceptors.request.use(request);
dshareAPI.interceptors.response.use(resSuccess, resError);
