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
  soonIngTimeRoom,
  soonTimeVehicle,
  ingTimeVehicle,
} from "../../store/actions/ReservationAction";
import "./MyReservationList.scss";
import MyReservationCard from "./MyReservationCard";

function MyReservationList() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTYzMTgzOTksImV4cCI6MTY1NjMyMDE5OX0.VUFw7Mu6cRNBMwoeArDMOXmrHBQ76WfKq4xevn0d5PcfJsMTiH0-N6as9bwzJLnZQl3F2Y1D3iFrPlBw9D5X5Q"
  );

  return (
    <>
      <div className="MyReservatationList">
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
        <MyReservationCard />
      </div>
    </>
  );
}
export default MyReservationList;
