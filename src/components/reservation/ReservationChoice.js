import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  myReservationRoomList,
  myReservationVehicleList,
} from "../../store/actions/ReservationAction";
import "./ReservationChoice.scss";
import { AiFillCar } from "react-icons/ai";
import { MdMeetingRoom } from "react-icons/md";
function ReservationChoice() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTYzODQzNTAsImV4cCI6MTY1NjM4NjE1MH0.94pnc8q1log3eV7xKbIlxVTBOkOy7GLJChFYJcO2-6VKzzOulPoH8N9SGDjYaTRyNlZTCm757uJUV98ZLeC65w"
  );

  return (
    <div className="choice">
      <div className="good">
        <MdMeetingRoom className="car" />
        회의실
      </div>
      <div className="good">
        <AiFillCar className="room" />
        차량
      </div>
    </div>
  );
}
export default ReservationChoice;
