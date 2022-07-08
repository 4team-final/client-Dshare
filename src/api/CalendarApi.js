import dshareAPI from '../components/ApiModules/index';

export const selectByRoomDateCalendar = async () => {
    return await dshareAPI('emp/room/reservation/all');
};
export const selectByVehicleDateCalendar = async () => {
    return await dshareAPI('emp/vehicle/list/reservation');
};
export const selectByVehicleNonReservation = async () => {
    return await dshareAPI('emp/vehicle/list/stock');
};
export const findAllByVehicle = async () => {
    return await dshareAPI('emp/vehicle/list/vehicle/all');
};
export const findAllByRoom = async () => {
    return await dshareAPI('emp/room/list/meeting/room/all');
};
export const selectByEmpNoAPI = async () => {
    return await dshareAPI('emp/ws/validation');
};

//dashboard API - 특정 일시 회의실 예약 현황 조회
//- /emp/room/reservation/time/{startTime}/{endTime}
//localhost:8082/emp/room/reservation/time2
export const findReservationRoomTime = async (data) => {
    const result = dshareAPI
        .get(`emp/room/reservation/time2/${data.startTime}/${data.endTime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};
//dashboard API - 특정 일시 차량 예약 현황 조회
//- /emp/vehicle/list/time/{start}/{end}
export const findReservationVehicleTime = async (data) => {
    const result = dshareAPI
        .get(`emp/vehicle/list/time2/${data.startTime}/${data.endTime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};
