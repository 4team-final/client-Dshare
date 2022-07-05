import { urlRefresh, reqAccess, sendToken } from './ApiParts';

export const request = (req) => {
    if (req.url.startsWith(urlRefresh) || req.url.startsWith('/login')) {
        return req;
    }
    req.headers[reqAccess] = sendToken('access');
    return req;
};
