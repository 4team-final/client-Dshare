import axios from "axios";
import { baseUrl } from "./BaseUrl";

//reservation API - 나의 다가오는 회의실 시간 및 남은 회의 시간 조회
//- /emp/room/reservation/soon/my/time
export const findSoonIngTimeRoom = () => {
  const result = axios
    .get(baseUrl + "emp/room/reservation/soon/my/time")
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 다음 예약 시작 시간 조회 (차량)
//- /emp/vehicle/own/reservation/ongoing
export const findSoonTimeVehcle = () => {
  const result = axios
    .get(baseUrl + "emp/vehicle/own/reservation/next")
    .catch((err) => {
      console.log(err);
    });
  return result;
};
//reservation API - 내가 현재 진행중인 예약 종료 시간 조회 (차량)
//- /emp/vehicle/own/reservation/next
export const findIngTimeVehcle = () => {
  const result = axios
    .get(baseUrl + "emp/vehicle/own/reservation/ongoing")
    .catch((err) => {
      console.log(err);
    });
  return result;
};
