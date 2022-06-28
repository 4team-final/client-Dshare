import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  myReservationRoomList,
  myReservationVehicleList,
} from "../../store/actions/ReservationAction";
import "./MyReservationList.scss";
import MyReservationCard from "./MyReservationCard";
import { set } from "lodash";

function MyReservationList() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTY0MDUzMzUsImV4cCI6MTY1NjQwNzEzNX0.QzqGFjX20uaN_4I-V4hLnbsxphcwl3RVWI3IfEl7LyhLwT08pahunu9XUONlgtpiwHSyc1ihBTPBrr66tMLGsw"
  );
  const [reqRoom, setReqRoom] = useState({
    lastId: 0,
    token: "",
    limit: 0,
  });
  const [reqVehicle, setReqVehicle] = useState({
    lastId: 0,
    token: "",
    limit: 0,
  });

  const [resRoomList, setResRoomList] = useState([]);
  const [resVehicleList, setResVehicleList] = useState([]);

  const [reqRoomLastId, setReqRoomLastId] = useState(0);
  const [reqVehicleLastId, setReqVehicleLastId] = useState(0);
  const [limit, setLimit] = useState(5);
  const [select, isSelect] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setReqRoom({
      lastId: 0,
      token: token,
      limit: limit,
    });
    setReqVehicle({
      lastId: 0,
      token: token,
      limit: limit,
    });
  }, []);

  useEffect(() => {
    if (reqRoom.token) {
      dispatch(myReservationRoomList(reqRoom));
      // dispatch(myReservationVehicleList(reqVehicle));
    }
  }, [reqRoom.token]);

  useEffect(() => {
    if (reqRoom.token) {
      // dispatch(myReservationRoomList(reqRoom));
      dispatch(myReservationVehicleList(reqVehicle));
    }
  }, [reqVehicle.token]);

  useEffect(() => {
    if (reservationStore?.myReservationRoomList?.data?.value) {
      // console.log(reservationStore?.myReservationRoomList?.data?.value);
      setResRoomList(
        ...resRoomList,
        reservationStore?.myReservationRoomList?.data?.value
      );
    }
  }, [reservationStore?.myReservationRoomList?.data?.value]);

  useEffect(() => {
    if (resRoomList.length > 0) {
      setTotal(resRoomList[0].total);
    }
  }, [resRoomList]);

  // useEffect(() => {
  //   if (reservationStore) {
  //     console.log(reservationStore);
  //   }
  // }, [reservationStore]);

  return (
    <div className="MyReservatationList">
      <div className="title">내 예약 현황 목록 / Total - {total}</div>
      {select === 0 ? (
        <>
          {resRoomList.length > 0 ? (
            <>
              {resRoomList.map((item, i) => {
                return (
                  <>
                    <MyReservationCard key={i} data={item} />
                  </>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      {select === 1 ? (
        <>
          {resRoomList.length > 0 ? (
            <>
              {resRoomList.map((item, i) => {
                return (
                  <>
                    <MyReservationCard key={i} data={item} />
                  </>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
export default MyReservationList;
