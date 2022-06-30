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
  const changeStoreSelect = useSelector((state) => state.changeReducer.select);
  const dispatch = useDispatch();

  const [data, setData] = useState(props?.data?.reservationResDTO);
  const [data2, setData2] = useState(props);

  const [total, setTotal] = useState(props?.data?.total);
  const [roomImgs, setRoomImgs] = useState(
    props?.data?.reservationResDTO?.room?.roomImgResDTOList
  );
  const [vehicleImgs, setVehicleImgs] = useState(props?.data?.vehicleImg);
  const [select, isSelect] = useState(0);

  useEffect(() => {
    if (changeStoreSelect) {
      isSelect(changeStoreSelect);
      console.log("select " + select);
    }
  }, [changeStoreSelect]);

  const convertDate = (time) => {
    if (!time && time == null) {
      return;
    }

    let a = time?.split("T")[0]?.split("-");
    let b = time?.split("T")[1]?.split(":");

    return (
      a[0] + "년 " + a[1] + "월 " + +a[2] + "일 " + b[0] + "시 " + b[1] + "분 "
    );
  };

  return (
    <>
      {select === 0 && (
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
              {data && roomImgs ? (
                <>
                  <div className="sliderLayout">
                    <SimpleSlider
                      data={roomImgs}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </>
              ) : (
                <div className="sliderLayout"></div>
              )}
              <div className="nameLayout">예약자 - {data?.emp?.name}</div>
            </div>
            <div className="room_reserveLayout">
              <div className="roomLayout">
                <div className="half">
                  <span className="fontB">{data?.room?.content}</span>
                </div>
                <div className="half">
                  <span>
                    <span className="float">
                      {data?.room?.roomNo}호 - {data?.room?.capacity}인실
                    </span>
                  </span>
                </div>
              </div>
              <div className="reserveLayout">
                <div className="half">
                  <span>
                    <span className="float">
                      <div>시작 {convertDate(data?.startedAt)}</div>
                      <div>종료 {convertDate(data?.endedAt)}</div>
                    </span>
                  </span>
                </div>
                <div className="half">
                  <span>
                    <span className="reserveTitle">{data?.title}</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {select === 1 && (
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
              {data2 && vehicleImgs ? (
                <>
                  <div className="sliderLayout">
                    <SimpleSlider
                      data={vehicleImgs}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </>
              ) : (
                <div className="sliderLayout"></div>
              )}
              <div className="nameLayout">예약자 - {data2.ename}</div>
            </div>
            <div className="room_reserveLayout">
              <div className="roomLayout">
                <div className="half">
                  <span className="fontB">{data2.vname}</span>
                </div>
                <div className="half">
                  <span>
                    <span className="float">
                      {data2.color} 색깔 - {data2.capacity}인승
                    </span>
                  </span>
                </div>
              </div>
              <div className="reserveLayout">
                <div className="half">
                  <span>
                    <span className="float">
                      <div>시작 {convertDate(data2.startedAt)}</div>
                      <div>종료 {convertDate(data2.endedAt)}</div>
                    </span>
                  </span>
                </div>
                <div className="half">
                  <span>
                    <span className="reserveTitle">{data2.title}</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
export default MyReservationCard;
