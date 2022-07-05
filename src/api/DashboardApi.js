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
