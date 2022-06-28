import { sendAccessToken, urlRefresh, reqAccess } from "./ApiModules";

export const request = (config) => {
  console.log("requestInterceptor");
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  if (
    !config.url.startsWith("/login") ||
    !config.url.startsWith(`/${urlRefresh}`)
  )
    config.headers[reqAccess] = sendAccessToken();

  return config;
};
