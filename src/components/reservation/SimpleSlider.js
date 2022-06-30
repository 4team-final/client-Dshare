import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import Slider from "react-slick";
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

import { style } from "./SimpleSliderStyle";

export default function SimpleSlider(props) {
  const [total, setTotal] = useState(0);
  const [imgs, setImgs] = useState(props?.data || props);
  const [width, setWidth] = useState(props?.style.width);
  const [height, setHeight] = useState(props?.style.height);

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper width={width} height={height}>
      <Slider {...settings} className="slider">
        {imgs?.length > 0 &&
          imgs?.map((item, i) => {
            return (
              <WrapperImg key={i} width={width} height={height}>
                <img className="img" src={item?.imgPath} />
              </WrapperImg>
            );
          })}
      </Slider>
    </Wrapper>
  );
}

const { Wrapper, WrapperImg } = style;
