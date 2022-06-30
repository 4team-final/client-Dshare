import axios from 'axios';
import { baseUrl, removeToken } from './ApiParts';
import { request } from './ReqInterceptor';
import { resError, resSuccess } from './ResInterceptor';

export const dshareAPI = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

dshareAPI.interceptors.request.use(request);
dshareAPI.interceptors.response.use(resSuccess, resError);

export const requestByEmployeeLogin = async (dataSet) => {
    return await dshareAPI
        .post('login', {
            empNo: dataSet.id,
            password: dataSet.pw
        })
        .then((res) => (res.data.status === 'OK' ? 0 : 1));
};

export const requestByEmployeeLogout = async () => {
    const response = await dshareAPI('logout').then((res) => (res.data.status === 'OK' ? 0 : 1));
    if (response === 0) {
        removeToken('two');
        alert('정상적으로 로그아웃되었습니다.');
        window.location.href = '/login';
        return;
    } else {
        alert('비정상적으로 로그아웃 처리되었습니다.');
        window.location.href = '/';
        return;
    }
};

export const requestByTokenExpired = async () => {
    return await dshareAPI('emp/vehicle/list/reservation')
        .then((res) => res.data)
        .catch((e) => console.log(e));
};
