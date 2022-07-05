import axios from 'axios';
import { baseUrl, removeToken } from './ApiParts';
import { request } from './ReqInterceptor';
import { resError, resSuccess } from './ResInterceptor';

export const dshareAPI = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        RefreshToken: ''
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
        alert('정상적으로 로그아웃되었습니다.');
        window.location.href = '/';
        removeToken('two');
        return;
    } else {
        alert('비정상적으로 로그아웃 처리되었습니다.');
        window.location.href = '/';
        removeToken('two');
        return;
    }
};
export const requestByTokenExpiredGET = async () => {
    return await dshareAPI('emp/vehicle/list/reservation')
        .then((res) => res.data)
        .catch((e) => console.log(e));
};
export const requestByTokenExpiredGETAndParam = async () => {
    return await dshareAPI('emp/vehicle/list/own/paging', {
        params: {
            id: 0
        }
    })
        .then((res) => res.data)
        .catch((e) => console.log(e));
};

export const requestByTokenExpiredPOSTAndBody = async () => {
    return await dshareAPI
        .post('emp/vehicle/list/reservation/various', {
            vehicleId: 1,
            capacity: null,
            positionId: null,
            teamId: null,
            empNo: null,
            startedAt: null,
            endedAt: null
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
};

export const getUserProfile = async () => {
    return await dshareAPI('emp/profile/read').then((res) => res.data.value);
};

export const getRoomChart = async (days) => {
    return await dshareAPI(`emp/room/reservation/count/${days}`).then((res) => res.data.value);
};

export const updateEmpInfo = async (id, teamId, positionId, name, email, tel, birthday) => {
    return await dshareAPI
        .post(`admin/update/${id}`, {
            teamId: teamId,
            positionId: positionId,
            name: name,
            email: email,
            tel: tel,
            birthday: birthday
        })
        .then((res) => res.data)
        .catch((e) => console.log(e));
};

export const getVBookmark = async () => {
    return await dshareAPI(`emp/vehicle/list/own/mark`).then((res) => res.data.value);
};
export const getRBookmark = async () => {
    return await dshareAPI(`emp/my/bookmark`).then((res) => res.data.value);
};
export const delRBookmark = async (id) => {
    await dshareAPI.post(`emp/room/bookmark/${id}`).then((res) => res.data);
    return getRBookmark();
};
export const delVBookmark = async (id) => {
    await dshareAPI.delete(`emp/vehicle/elimination/mark?id=${id}`).then((res) => res.data);
    return getVBookmark();
};
