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
  ingTimeVehicle,
} from "../../store/actions/ReservationAction";
import "./Timer.scss";
import { FcAlarmClock } from "react-icons/fc";

function Timer() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTYzMTgzOTksImV4cCI6MTY1NjMyMDE5OX0.VUFw7Mu6cRNBMwoeArDMOXmrHBQ76WfKq4xevn0d5PcfJsMTiH0-N6as9bwzJLnZQl3F2Y1D3iFrPlBw9D5X5Q"
  );

  const [_soonTimeRoom, setSoonTimeRoom] = useState(0);
  const [_ingTimeRoom, setIngTimeRoom] = useState(0);
  const [_soonTimeVehicle, setSoonTimeVehicle] = useState(0);
  const [_ingTimeVehicle, setIngTimeVehicle] = useState(0);

  useEffect(() => {
    dispatch(soonIngTimeRoom(token));
    dispatch(soonTimeVehicle(token));
    dispatch(ingTimeVehicle(token));
  }, []);

  useEffect(() => {
    if (reservationStore?.soonIngTimeRoom?.data?.value) {
      setSoonTimeRoom(
        reservationStore?.soonIngTimeRoom?.data?.value?.soonRemainTime
      );
      setIngTimeRoom(
        reservationStore?.soonIngTimeRoom?.data?.value?.ingRemainTime
      );
    }
  }, [reservationStore?.soonIngTimeRoom.data?.value]);

  useEffect(() => {
    if (reservationStore?.soonTimeVehicle?.data?.value) {
      setSoonTimeVehicle(reservationStore?.soonTimeVehicle?.data?.value);
    }
  }, [reservationStore?.soonTimeVehicle?.data]);

  useEffect(() => {
    if (reservationStore?.ingTimeVehicle?.data?.value) {
      setIngTimeVehicle(reservationStore?.ingTimeVehicle?.data?.value);
    }
  }, [reservationStore?.ingTimeVehicle?.data]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_soonTimeRoom) > 0) {
        setSoonTimeRoom(parseInt(_soonTimeRoom) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_soonTimeRoom]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_ingTimeRoom) > 0) {
        setIngTimeRoom(parseInt(_ingTimeRoom) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_ingTimeRoom]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_soonTimeVehicle) > 0) {
        setSoonTimeVehicle(parseInt(_soonTimeVehicle) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_soonTimeVehicle]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_ingTimeVehicle) > 0) {
        setIngTimeVehicle(parseInt(_ingTimeVehicle) - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_ingTimeVehicle]);

  const handleUpdateTimer = (time) => {
    const days = parseInt(time / 86400);
    time = time % 86400;
    const hours = parseInt(time / 3600);
    time = time % 3600;
    const minutes = parseInt(time / 60);
    time = time % 60;
    const second = time;

    if (!minutes) {
      return second + "초 ";
    }
    if (!hours) {
      return minutes + "분 " + second + "초 ";
    }
    if (!days) {
      return hours + "시간 " + minutes + "분 " + second + "초 ";
    }

    return days + "일 " + hours + "시간 " + minutes + "분 " + second + "초 ";
  };

  return (
    <>
      <div className="box">
        <FcAlarmClock className="alarmClock" />
        <div className="block">
          {_soonTimeRoom > 0 ? (
            <div className="line">
              다음 회의실 예약 :
              <span className="bold">{handleUpdateTimer(_soonTimeRoom)}</span>
              남았습니다.
            </div>
          ) : (
            <></>
          )}
          {_ingTimeRoom > 0 ? (
            <div className="line">
              현재 회의실 반납 :
              <span className="bold">{handleUpdateTimer(_ingTimeRoom)} </span>
              남았습니다.
            </div>
          ) : (
            <></>
          )}
          {_soonTimeVehicle > 0 ? (
            <div className="line">
              다음 차량 예약 :
              <span className="bold">
                {" "}
                {handleUpdateTimer(_soonTimeVehicle)}
              </span>{" "}
              남았습니다.
            </div>
          ) : (
            <></>
          )}
          {_ingTimeVehicle > 0 ? (
            <div className="line">
              현재 차량 반납 :{" "}
              <span className="bold">{handleUpdateTimer(_ingTimeVehicle)}</span>{" "}
              남았습니다.
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
export default Timer;
