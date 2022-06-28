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
import "./MyReservationCard.scss";
import Card from "@mui/material/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";

function MyReservationCard(props) {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMjAxMDAyMzIiLCJpYXQiOjE2NTYzMTgzOTksImV4cCI6MTY1NjMyMDE5OX0.VUFw7Mu6cRNBMwoeArDMOXmrHBQ76WfKq4xevn0d5PcfJsMTiH0-N6as9bwzJLnZQl3F2Y1D3iFrPlBw9D5X5Q"
  );
  const [data, setData] = useState(props?.data?.reservationResDTO);
  const [total, setTotal] = useState(props?.data?.total);
  const [roomImgs, setRoomImgs] = useState(
    props?.data?.reservationResDTO?.room?.roomImgResDTOList
  );
  console.log(props);

  const convertDate = (time) => {
    let a = time.split("T")[0].split("-");
    let b = time.split("T")[1].split(":");

    return (
      a[0] + "년 " + a[1] + "월 " + +a[2] + "일 " + b[0] + "시 " + b[1] + "분 "
    );
  };

  return (
    <>
      <div className="card">
        <Card
          sx={{
            maxWidth: "100%",
            width: "100%",
            maxHeight: "100%",
            height: "100%",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="slider_nameLayout">
            {data ? (
              <>
                <div className="sliderLayout">
                  <SimpleSlider data={roomImgs} />
                </div>
              </>
            ) : (
              <div className="sliderLayout"></div>
            )}
            <div className="nameLayout">예약자 - {data.emp.name}</div>
          </div>
          <div className="room_reserveLayout">
            <div className="roomLayout">
              <div className="half">
                <span className="fontB">{data.room.content}</span>
              </div>
              <div className="half">
                <span>
                  <span className="float">
                    {data.room.roomNo}호 - {data.room.capacity}인실
                  </span>
                </span>
              </div>
            </div>
            <div className="reserveLayout">
              <div className="half">
                <span>
                  <span className="float">
                    <div>시작 {convertDate(data.startedAt)}</div>
                    <div>종료 {convertDate(data.endedAt)}</div>
                  </span>
                </span>
              </div>
              <div className="half">
                <span>
                  <span className="reserveTitle">{data.title}</span>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
export default MyReservationCard;
