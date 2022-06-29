import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  soonIngTimeRoom,
  soonTimeVehicle,
  ingTimeVehicle,
} from "../../store/actions/ReservationAction";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardMedia from "@mui/material/CardMedia";
import "./SimpleSlider.scss";

export default function SimpleSlider(props) {
  const [total, setTotal] = useState(0);
  const [imgs, setImgs] = useState(props.data);
  console.log(props);

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slider">
      {imgs.length > 0 &&
        imgs.map((item, i) => {
          return (
            <div className="imgsize">
              <img className="img" src={item?.imgPath} />
            </div>
          );
        })}
    </Slider>
  );
}
