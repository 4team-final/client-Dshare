import dshareAPI from '../components/ApiModules/index';

//dashboard API - ?일간 많이 예약된 회의실 개수 조회
//- /emp/room/reservation/count/{datetime}
export const findRoomReservationCount = async (datetime) => {
    const result = dshareAPI
        .get(`emp/room/reservation/count/${datetime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};
//dashboard API - ?일간 많이 예약하는 시간대 회의실 조회
//- /emp/room/reservation/count/{datetime}
export const findRoomReservationTime = async (datetime) => {
    const result = dshareAPI
        .get(`emp/room/reservation/count/hour/${datetime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};
//dashboard API - ?일간 많이 회의가 시작되는 시간대 회의실 조회
//- /emp/room/reservation/count/{datetime}
export const findRoomMeetTime = async (datetime) => {
    const result = dshareAPI
        .get(`emp/room/meeting/count/hour/${datetime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};
//dashboard API - ?일 동안 가장 많이 예약된 차량
//- /emp/vehicle/best/vehicle/{datetime}
export const findVehicleReservationCount = async (datetime) => {
    const result = dshareAPI
        .get(`emp/vehicle/best/vehicle/${datetime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};
//dashboard API - ?일 동안 가장 많이 예약한 시간대 차량
//- /emp/vehicle/best/time/{datetime}
export const findVehicleReservationTime = async (datetime) => {
    const result = dshareAPI
        .get(`emp/vehicle/best/time/${datetime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};

//dashboard API - ?일 동안 가장 많이 시작되는 시간대
//- /emp/vehicle/start/best/time/{datetime}
export const findVehicleStartTime = async (datetime) => {
    const result = dshareAPI
        .get(`emp/vehicle/start/best/time/${datetime}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
        });
    return result;
};