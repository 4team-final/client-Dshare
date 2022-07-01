import dshareAPI from "../components/ApiModules/index";

//reservation API - 나의 다가오는 회의실 시간 및 남은 회의 시간 조회
//- /emp/room/reservation/soon/my/time
export const findSoonIngTimeRoom = async (token) => {
  const result = dshareAPI
    .get("emp/room/reservation/soon/my/time")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 다음 예약 시작 시간 조회 (차량)
//- /emp/vehicle/own/reservation/ongoing
export const findSoonTimeVehcle = async (token) => {
  const result = dshareAPI
    .get("emp/vehicle/own/reservation/next")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};
//reservation API - 내가 현재 진행중인 예약 종료 시간 조회 (차량)
//- /emp/vehicle/own/reservation/next
export const findIngTimeVehcle = async (token) => {
  const result = dshareAPI
    .get("emp/vehicle/own/reservation/ongoing")
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
  const result = dshareAPI
    .get(`emp/room/reservation/my/${data.lastId}/${data.limit}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 예약 현황 조회 페이지네이션 (차량)
//- /emp/vehicle/list/own/paging
export const findMyReservationVehiclePage = async (data) => {
  const result = dshareAPI
    .get("emp/vehicle/list/own/paging", {
      params: { id: data.lastId },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//reservation API - 나의 예약 현황 삭제 (회의실)
//- /emp/room/reservation/delete/{id}
export const deleteMyReservationRoom = async (id) => {
  const result = dshareAPI
    .delete(`/emp/room/reservation/delete/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

//reservation API - 나의 예약 현황 삭제 (차량)
//- /emp/vehicle/elimination
export const deleteMyReservationVehicle = async (id) => {
  const result = dshareAPI
    .delete("emp/vehicle/list/own/paging", {
      params: { id: id },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
