import { sendAccessToken, urlRefresh, reqAccess } from "./ApiModules";

export const request = (req) => {
  req.headers["Content-Type"] = "application/json; charset=utf-8";
  if (!req.url.startsWith("/login") || !req.url.startsWith(`/${urlRefresh}`))
    req.headers[reqAccess] = sendAccessToken();

  return req;
};
