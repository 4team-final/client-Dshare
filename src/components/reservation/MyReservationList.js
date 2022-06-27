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

function MyReservationList() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTYzNDc4MjcsImV4cCI6MTY1NjM0OTYyN30.13C1WgSiYZ_aYT1fs7irYjz-yP1mPi77iykboMTEwjIdKUrzLU902VOVHYAi00nzL5cvCxzAPRTtDfsGDIHVfw"
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
  const [limit, setLimit] = useState(15);

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
      console.log(reservationStore?.myReservationRoomList?.data?.value);
      setResRoomList(
        ...resRoomList,
        reservationStore?.myReservationRoomList?.data?.value
      );
    }
  }, [reservationStore?.myReservationRoomList?.data?.value]);

  useEffect(() => {
    if (reservationStore) {
      console.log(reservationStore);
    }
  }, [reservationStore]);

  return (
    <div className="MyReservatationList">
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
    </div>
  );
}
export default MyReservationList;
