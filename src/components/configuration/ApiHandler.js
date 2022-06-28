import axios from "axios";
import { baseUrl } from "./ApiModules";
import { request } from "./ReqInterceptor";
import { resError, resSuccess } from "./ResInterceptor";

export const dshareAPI = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true,
});

dshareAPI.interceptors.request.use(request);
dshareAPI.interceptors.response.use(resSuccess, resError);
