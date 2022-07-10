import { resAccess, resRefresh, saveToken, getToken, removeToken, urlRefresh } from './ApiParts';
import { dshareAPI, ExpiredLogoutHandler } from './ApiHandler';

export const resSuccess = async (res) => {
    if (res.headers[resAccess]) {
        saveToken('access', res.headers[resAccess]);
    }
    if (res.headers[resRefresh]) {
        saveToken('refresh', res.headers[resRefresh]);
    }

    if (res.data.message.startsWith('refresh_expired') || res.data.status === 'CONFILCT') {
        ExpiredLogoutHandler();
        return;
    }
    if (res.data.message.startsWith('expired_token') || res.data.status === 'FORBIDDEN') {
        const dataMethod = res.config.method;
        const originalRequest = res.config.url;
        const RefreshToken = getToken('refresh');
        if (RefreshToken && RefreshToken !== undefined && RefreshToken !== null) {
            removeToken('access');
            const result = await dshareAPI(urlRefresh, {
                headers: {
                    RefreshToken: RefreshToken
                }
            });
            if (result.headers[resAccess]) {
                saveToken('access', result.headers[resAccess]);
            }
            switch (dataMethod) {
                case 'post':
                    return await dshareAPI.post(originalRequest, res.config.data ? res.config.data : null, {
                        params: res.config.params ? res.config.params : null
                    });
                case 'put':
                    return await dshareAPI.put(originalRequest, res.config.data ? res.config.data : null, {
                        params: res.config.params ? res.config.params : null
                    });
                case 'patch':
                    return await dshareAPI.patch(originalRequest, res.config.data ? res.config.data : null, {
                        params: res.config.params ? res.config.params : null
                    });
                case 'delete':
                    return await dshareAPI.delete(originalRequest, {
                        params: res.config.params ? res.config.params : null
                    });
                case 'get':
                default:
                    return await dshareAPI(originalRequest, {
                        params: res.config.params ? res.config.params : null
                    });
            }
        } else {
            ExpiredLogoutHandler();
        }
    }
    return res;
};
export const resError = (err) => {
    if (err.status === 'ERR_BAD_REQUEST' && err.response?.data) {
        console.log(err.response.data.message);
    } else if (err.message === 'timeout of 5000ms exceeded') {
        console.log('Timeout : API 통신 5초 이상');
    } else {
        console.log('예외 : ', err);
    }
    return err;
};
