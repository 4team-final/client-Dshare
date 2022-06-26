import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  soonIngTimeRoom,
  soonTimeVehicle,
  IngTimeVehicle,
} from "../../store/actions/ReservationAction";
import "./Timer.scss";

function Timer() {
  const ReservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();
  const [soonTimeRoom, setSoonTimeRoom] = useState(0);
  const [ingTimeRoom, setIngTimeRoom] = useState(0);
  const [soonTimeVehicle, setSoonTimeVehicle] = useState(0);
  const [ingTimeVehicle, setIngTimeVehicle] = useState(0);
  useEffect(() => {}, []);

  const handleTimer = useCallback(async () => {}, []);
  return (
    <>
      <div>123</div>
    </>
  );
}
export default Timer;
