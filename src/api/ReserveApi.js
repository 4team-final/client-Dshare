import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { token2 } from "./BaseUrl";

//reservation API - 나의 다가오는 회의실 시간 및 남은 회의 시간 조회
//- /emp/room/reservation/soon/my/time
export const findSoonIngTimeRoom = async (token) => {
  const result = axios
    .get(baseUrl + "emp/room/reservation/soon/my/time", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 다음 예약 시작 시간 조회 (차량)
//- /emp/vehicle/own/reservation/ongoing
export const findSoonTimeVehcle = async (token) => {
  const result = axios
    .get(baseUrl + "emp/vehicle/own/reservation/next", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};
//reservation API - 내가 현재 진행중인 예약 종료 시간 조회 (차량)
//- /emp/vehicle/own/reservation/next
export const findIngTimeVehcle = async (token) => {
  const result = axios
    .get(baseUrl + "emp/vehicle/own/reservation/ongoing", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 예약 현황 조회 페이지네이션 (회의실)
//- /emp/room/reservation/my/{lastId}/{limit}
export const findMyReservationRoomPage = async (data) => {
  // console.log(data);
  const result = axios
    .get(baseUrl + `emp/room/reservation/all/${data.lastId}/${data.limit}`, {
      headers: {
        Authorization: data.token,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 예약 현황 조회 페이지네이션 (회의실)
//- /emp/vehicle/list/own/paging
export const findMyReservationVehiclePage = async (data) => {
  const result = axios
    .get(baseUrl + "emp/vehicle/list/own/paging", {
      headers: {
        Authorization: data.token,
      },
      body: {
        id: data.lastId,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};
