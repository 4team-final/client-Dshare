import React, { useEffect, useRef, useState } from "react";
import "./ReservationStatusPage.scss";
import Timer from "../../../../components/timer/Timer.js";
import MyReservationList from "../../../../components/reservation/MyReservationList.js";

function ReservationStatusPage() {
  return (
    <>
      <Timer />
      <MyReservationList />
    </>
  );
}
export default ReservationStatusPage;
