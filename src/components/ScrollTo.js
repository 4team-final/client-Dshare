import React, { useRef, useState, useEffect, useCallback } from "react";
import Icon from "@mdi/react";
import "./scroll_to.css";
import { mdiArrowUpDropCircle } from "@mdi/js";
import { mdiArrowDownDropCircle } from "@mdi/js";
import $ from "jquery";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

$(window).scroll(function () {
  $("#to-top").hide();
  $("#to-bottom").hide();

  clearTimeout($.data(this, "scrollTimer"));
  $.data(
    this,
    "scrollTimer",
    setTimeout(function () {
      if ($(this).scrollTop()) {
        $("#to-top").show();
        // $("#to-bottom").show();
      } else {
        // $("#to-bottom").show();
      }
    }, 250)
  );
});
// 윈도우 높이 구하기
// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

function ScrollTo() {
  // 스크롤을 하면서 실행할 내용을 이곳에 추가합니다.
  let { innerHeight } = window;
  // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)
  let { scrollHeight } = document.body;
  // 브라우저 총 내용의 크기 (스크롤을 포함한다)
  let { scrollTop } = document.documentElement;
  const [height_, setHeight_] = useState();
  useEffect(() => {
    setHeight_($(document).height() - $(window).height() + 1);
  }, []);

  const toTop = useRef();
  const toBottom = useRef();

  const onTop = () => {
    // 	// 페이지 위치를 최상단으로 부드럽게(1초 동안) 이동.
    gsap.to(window, { duration: 1, scrollTo: 0 });
  };
  const onBottom = () => {
    // 	// 페이지 위치를 최하단으로 부드럽게(1초 동안) 이동.
    gsap.to(window, {
      duration: 1,
      scrollTo: height_,
    });
    setHeight_(height_ + $(document).height() - $(window).height() + 1);
  };

  return (
    <>
      {/* <!--TO BOTTOM BUTTON--> */}
      {/* <div onClick={onBottom} ref={toTop} id="to-bottom">
        <Icon path={mdiArrowDownDropCircle} title="search" size={2} />
      </div> */}
      {/* <!--TO TOP BUTTON--> */}
      <div onClick={onTop} ref={toBottom} id="to-top">
        <Icon path={mdiArrowUpDropCircle} title="search" size={2} />
      </div>
    </>
  );
}

export default ScrollTo;
