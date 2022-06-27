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
import Alert from "@mui/material/Alert";

function Timer() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTYzMjA2NTcsImV4cCI6MTY1NjMyMjQ1N30.HhSJU88CUtAClslBSdVAfhULQ3aFKXgMpzd7a4ZqqjGbVWBxhpH-z7L8zAmJgy89_ySHSfQTe106Wj14rnRk1w"
  );

  const [_soonTimeRoom, setSoonTimeRoom] = useState(-1);
  const [_ingTimeRoom, setIngTimeRoom] = useState(-1);
  const [_soonTimeVehicle, setSoonTimeVehicle] = useState(-1);
  const [_ingTimeVehicle, setIngTimeVehicle] = useState(-1);
  const [alertBool, setAlertBool] = useState(false);
  const [message, setMessage] = useState("");

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
      } else if (parseInt(_soonTimeRoom) === 5) {
        setMessage("회의시작! 서두르세요!!");
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_soonTimeRoom]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_ingTimeRoom) > 0) {
        setIngTimeRoom(parseInt(_ingTimeRoom) - 1);
      } else if (parseInt(_ingTimeRoom) === 5) {
        setMessage("회의종료! 수고하셨습니다!!");
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_ingTimeRoom]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_soonTimeVehicle) > 0) {
        setSoonTimeVehicle(parseInt(_soonTimeVehicle) - 1);
      } else if (parseInt(_soonTimeVehicle) === 5) {
        setMessage("차량시작! 안전운전!!");
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_soonTimeVehicle]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(_ingTimeVehicle) > 0) {
        setIngTimeVehicle(parseInt(_ingTimeVehicle) - 1);
      } else if (parseInt(_ingTimeVehicle) === 5) {
        setMessage("차량반납! 수고하셨습니다!!");
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [_ingTimeVehicle]);

  useEffect(() => {
    if (message === "") {
    } else {
      setAlertBool(true);
      setTimeout(() => {
        setAlertBool(false);
        setMessage("");
      }, 4000);
    }
  }, [message]);

  // const TimeOutAlert = () => {};

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
            <div className="line">다음 회의실 예약이 없습니다.</div>
          )}
          {_ingTimeRoom > 0 ? (
            <div className="line">
              현재 회의실 반납 :
              <span className="bold">{handleUpdateTimer(_ingTimeRoom)} </span>
              남았습니다.
            </div>
          ) : (
            <div className="line">현재 반납할 회의실이 없습니다.</div>
          )}
          {_soonTimeVehicle > 0 ? (
            <div className="line">
              다음 차량 예약 :
              <span className="bold">
                {handleUpdateTimer(_soonTimeVehicle)}
              </span>
              남았습니다.
            </div>
          ) : (
            <div className="line">다음 차량 예약이 없습니다.</div>
          )}
          {_ingTimeVehicle > 0 ? (
            <div className="line">
              현재 차량 반납 :
              <span className="bold">{handleUpdateTimer(_ingTimeVehicle)}</span>
              남았습니다.
            </div>
          ) : (
            <div className="line">현재 반납할 차량이 없습니다.</div>
          )}
        </div>
        <div>
          {alertBool ? <Alert severity="success">{message}</Alert> : <></>}
        </div>
      </div>
    </>
  );
}
export default Timer;
