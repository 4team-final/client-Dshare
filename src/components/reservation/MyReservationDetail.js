import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { Link } from "react-router-dom";

// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  soonIngTimeRoom,
  soonTimeVehicle,
  ingTimeVehicle,
} from "../../store/actions/ReservationAction";
import "./MyReservationDetail.scss";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsAlignEnd } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function MyReservationDetail() {
  const changeStoreRoomItem = useSelector(
    (state) => state.changeReducer.roomItem
  );
  const changeStoreVehicleItem = useSelector(
    (state) => state.changeReducer.vehicleItem
  );
  const changeStoreSelect = useSelector(
    (state) => state.changeReducer.selected
  );
  const dispatch = useDispatch();

  const [resRoomList, setResRoomList] = useState([]);
  const [empName, setEmpName] = useState("");
  const [reservedAt, setReservedAt] = useState("");
  const [roomItem, setRoomItem] = useState({});
  const [vehicleItem, setVehicleItem] = useState({});
  const [select, isSelect] = useState(0);

  useEffect(() => {
    if (changeStoreSelect === 0 || changeStoreSelect === 1) {
      isSelect(changeStoreSelect);
    }
  }, [changeStoreSelect]);
  useEffect(() => {
    if (changeStoreRoomItem) {
      setRoomItem(changeStoreRoomItem.reservationResDTO);
    }
  }, [changeStoreRoomItem]);
  useEffect(() => {
    if (changeStoreVehicleItem) {
      console.log(222);
      console.log(changeStoreVehicleItem);
      setVehicleItem(changeStoreVehicleItem);
    }
  }, [changeStoreVehicleItem]);

  function convertTime(time) {
    let timeArr = time.split("T");
    return timeArr[0] + " " + timeArr[1];
  }
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

  const diffDate = (rperiod) => {
    let a = rperiod?.split("T")[1];
    let b = a.split(":");
    return b[0] + "시간 " + b[1] + "분";
  };

  return (
    <>
      {!roomItem?.id && select === 0 && (
        <Card sx={{ width: "100%", height: "100%", borderRadius: "20px" }}>
          <h1 className="center" style={{ textAlign: "center" }}>
            오른쪽 목록에서 선택해주세요.
          </h1>
        </Card>
      )}
      {roomItem?.id && select === 0 && (
        <Card
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{}}
                aria-label="recipe"
                src={roomItem?.emp?.profileImg}
              ></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              "예약자 : " + roomItem?.emp?.empNo + " " + roomItem?.emp?.name
            }
            subheader={"예약 확정 시간 : " + convertTime(roomItem?.modifiedAt)}
            sx={{ borderBottom: "1px solid #d3d3d3" }}
          />

          <SimpleSlider
            data={roomItem?.room?.roomImgResDTOList}
            style={{ width: "95%", height: "200px" }}
          />

          <CardContent>
            <div className="content_layout">
              <div className="half line">
                <Typography
                  sx={{ fontSize: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  자원 정보
                </Typography>
                <Typography variant="h6" component="div">
                  {roomItem?.room.categoryName}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: "12px" }}
                  color="text.secondary"
                >
                  {roomItem?.room.content}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, float: "right" }}
                  color="text.secondary"
                >
                  비치 물품 :
                  {roomItem?.room?.roomObjectResDTOList.map((item, i) => {
                    return item.name !== " " && <>{item?.name} </>;
                  })}
                </Typography>
                <Typography variant="body2" sx={{ float: "right" }}>
                  <BsFillHouseDoorFill size={"2em"} />
                  {roomItem?.room.roomNo}호 {"  "}
                  <IoIosPeople size={"2em"} />
                  {roomItem?.room.capacity}인실
                </Typography>
              </div>
              <div className="half">
                <Typography
                  sx={{ fontSize: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  예약 정보
                </Typography>
                <Typography variant="h6" component="div">
                  {roomItem?.title}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: "12px" }}
                  color="text.secondary"
                >
                  {roomItem?.reason}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, float: "right" }}
                  color="text.secondary"
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ float: "right", fontSize: "12px" }}
                >
                  <BsFillSkipEndFill size={"1em"} />
                  시작 {convertDate(roomItem?.startedAt)} {"  "}
                  <br />
                  <BsAlignEnd size={"1em"} />
                  종료 {convertDate(roomItem?.endedAt)}
                  <br />총{diffDate(roomItem?.rperiod)}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {vehicleItem.reservationId && select === 1 && (
        <Card
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{}}
                aria-label="recipe"
                src={roomItem?.emp?.profileImg}
              ></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              "예약자 : " + roomItem?.emp?.empNo + " " + roomItem?.emp?.name
            }
            subheader={"예약 확정 시간 : " + convertTime(roomItem?.modifiedAt)}
            sx={{ borderBottom: "1px solid #d3d3d3" }}
          />

          <SimpleSlider
            data={roomItem?.room?.roomImgResDTOList}
            style={{ width: "95%", height: "200px" }}
          />

          <CardContent>
            <div className="content_layout">
              <div className="half line">
                <Typography
                  sx={{ fontSize: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  자원 정보
                </Typography>
                <Typography variant="h6" component="div">
                  {roomItem?.room.categoryName}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: "12px" }}
                  color="text.secondary"
                >
                  {roomItem?.room.content}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, float: "right" }}
                  color="text.secondary"
                >
                  비치 물품 :
                  {roomItem?.room?.roomObjectResDTOList.map((item, i) => {
                    return item.name !== " " && <>{item?.name} </>;
                  })}
                </Typography>
                <Typography variant="body2" sx={{ float: "right" }}>
                  <BsFillHouseDoorFill size={"2em"} />
                  {roomItem?.room.roomNo}호 {"  "}
                  <IoIosPeople size={"2em"} />
                  {roomItem?.room.capacity}인실
                </Typography>
              </div>
              <div className="half">
                <Typography
                  sx={{ fontSize: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  예약 정보
                </Typography>
                <Typography variant="h6" component="div">
                  {roomItem?.title}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: "12px" }}
                  color="text.secondary"
                >
                  {roomItem?.reason}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, float: "right" }}
                  color="text.secondary"
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ float: "right", fontSize: "12px" }}
                >
                  <BsFillSkipEndFill size={"1em"} />
                  시작 {convertDate(roomItem?.startedAt)} {"  "}
                  <br />
                  <BsAlignEnd size={"1em"} />
                  종료 {convertDate(roomItem?.endedAt)}
                  <br />총{diffDate(roomItem?.rperiod)}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
export default MyReservationDetail;
