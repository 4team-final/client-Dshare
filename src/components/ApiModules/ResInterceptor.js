import { resAccess, resRefresh, urlRefresh, saveToken, getToken, removeToken } from './ApiParts';
import { dshareAPI, requestByEmployeeLogout } from './ApiHandler';

export const resSuccess = async (res) => {
    if (res.headers[resAccess]) {
        saveToken('access', res.headers[resAccess]);
    }
    if (res.headers[resRefresh]) {
        saveToken('refresh', res.headers[resRefresh]);
    }
    if (res.data.message.startsWith('refresh_expired') || res.data.status === 'CONFILCT') {
        requestByEmployeeLogout();
        alert('로그인 시간이 만료되었습니다. 다시 로그인 해주세요.');
        return false;
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
            requestByEmployeeLogout();
            alert('토큰이 존재하지 않습니다. 다시 로그인 해주세요.');
            return false;
        }
    }
    return res;
};
export const resError = (err) => {
    console.log(err);
    return err;
};
