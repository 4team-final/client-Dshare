import { urlRefresh, reqAccess, sendToken } from './ApiParts';

export const request = (req) => {
    if (!req.url.startsWith('/login') || !req.url.startsWith(`/${urlRefresh}`)) {
        req.headers[reqAccess] = sendToken('access');
    }

    return req;
};
