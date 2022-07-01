import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  myReservationRoomList,
  myReservationVehicleList,
} from "../../store/actions/ReservationAction";
import { ItemChangeSave } from "../../store/actions/ChangeAction";
import "./MyReservationList.scss";
import MyReservationCard from "./MyReservationCard";
import Loading from "../Loading";
import "../Loading.css";

function MyReservationList() {
  const reservationStore = useSelector((state) => state.reservationReducer);

  const changeStoreSelect = useSelector(
    (state) => state.changeReducer.selected
  );

  const roomDeleteId = useSelector((state) => state.changeReducer.deleteRoomId);
  const vehicleDeleteId = useSelector(
    (state) => state.changeReducer.deleteVehicleId
  );

  const dispatch = useDispatch();

  const [reqRoomLastId, setReqRoomLastId] = useState(0);
  const [reqVehicleLastId, setReqVehicleLastId] = useState(0);

  const [reqRoom, setReqRoom] = useState({
    lastId: reqRoomLastId,
    limit: 0,
  });
  const [reqVehicle, setReqVehicle] = useState({
    lastId: reqVehicleLastId,
    limit: 0,
  });

  const [resRoomList, setResRoomList] = useState([]);
  const [resVehicleList, setResVehicleList] = useState([]);

  const [limit, setLimit] = useState(5);
  const [select, isSelect] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    if (limit > 0) {
      setReqRoom({
        lastId: 0,
        limit: limit,
      });
      setReqVehicle({
        lastId: 0,
        limit: limit,
      });
    }
  }, [limit]);
  useEffect(() => {
    if (changeStoreSelect === 0 || changeStoreSelect === 1) {
      isSelect(changeStoreSelect);
    }
  }, [changeStoreSelect]);

  useEffect(() => {
    if (reqRoom.lastId > 0 && select === 0) {
      if (resRoomList.length === 0) {
        setLoading(true);
        dispatch(myReservationRoomList(reqRoom));
        setLoading(false);
      } else {
        dispatch(myReservationRoomList(reqRoom));
        setLoading2(false);
        document.getElementById("MyReservatationList").style.overflowY =
          "scroll";
        window.addEventListener("scroll", handleScroll, true);
      }
    }
  }, [reqRoom, select]);

  useEffect(() => {
    if (reqVehicle.lastId > 0 && select === 1) {
      if (resVehicleList.length === 0) {
        setLoading(true);
        dispatch(myReservationVehicleList(reqVehicle));
        setLoading(false);
      } else {
        dispatch(myReservationVehicleList(reqVehicle));
        setLoading2(false);
        document.getElementById("MyReservatationList").style.overflowY =
          "scroll";
        window.addEventListener("scroll", handleScroll, true);
      }
    }
  }, [reqVehicle, select]);

  useEffect(() => {
    if (reservationStore?.myReservationRoomList?.data?.value) {
      setResRoomList(
        ...resRoomList,
        reservationStore?.myReservationRoomList?.data?.value
      );
    }
  }, [reservationStore?.myReservationRoomList?.data?.value]);

  //
  useEffect(() => {
    if (reservationStore?.myReservationVehicleList?.data?.value) {
      setResVehicleList(
        ...resVehicleList,
        reservationStore?.myReservationVehicleList?.data?.value
      );
    }
  }, [reservationStore?.myReservationVehicleList?.data?.value]);

  useEffect(() => {
    if (resRoomList[resRoomList.length - 1]) {
      setReqRoomLastId(
        resRoomList[resRoomList.length - 1].reservationResDTO.id
      );
    }
  }, [resRoomList]);
  useEffect(() => {
    if (resVehicleList[resVehicleList.length - 1]) {
      setReqVehicleLastId(
        resVehicleList[resVehicleList.length - 1].reservationId
      );
    }
  }, [resVehicleList]);

  useEffect(() => {
    if (roomDeleteId >= 0) {
      const index = resRoomList.findIndex(
        (item) => item.reservationResDTO.id === roomDeleteId
      );
      resRoomList.splice(index, 1);
      setResRoomList([...resRoomList]);
    }
  }, [roomDeleteId]);

  useEffect(() => {
    if (vehicleDeleteId >= 0) {
      const index = resVehicleList.findIndex(
        (item) => item.reservationId === vehicleDeleteId
      );
      resVehicleList.splice(index, 1);
      setResVehicleList([...resVehicleList]);
    }
  }, [vehicleDeleteId]);

  useEffect(() => {
    if (resRoomList.length > 0 && select === 0) {
      setTotal(resRoomList[0].total);
    } else if (resVehicleList?.length > 0 && select === 1) {
      setTotal(resVehicleList[0].total);
    } else {
      setTotal(0);
    }
  }, [resRoomList, resVehicleList]);

  async function handleDetail(item) {
    dispatch(ItemChangeSave(item));
  }
  console.log(resVehicleList);

  const container = useRef(null);
  const [height, setHeight] = useState(0);

  const handleScroll = useCallback(async () => {
    // const { innerHeight } = window ;
    const innerHeight = document
      .getElementById("MyReservatationList")
      .getBoundingClientRect().width;
    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)

    const scrollHeight = container.current.scrollHeight;
    // 브라우저 총 내용의 크기 (스크롤을 포함한다)

    const scrollTop = container.current.scrollTop;

    // 현재 스크롤바의 위치

    if (
      Math.round(scrollTop + innerHeight) >= Math.round(scrollHeight * 0.75)
    ) {
      window.removeEventListener("scroll", handleScroll, true);
      // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.
      setLoading2(true);
      document.getElementById("MyReservatationList").style.overflowY = "hidden";
      if (select === 0 && reqRoomLastId) {
        setReqRoom({
          lastId: reqRoomLastId,
          limit: limit,
        });
      } else if (select === 1 && reqVehicleLastId) {
        setReqVehicle({
          lastId: reqVehicleLastId,
          limit: limit,
        });
      }
    }
  }, [
    resRoomList,
    reqRoomLastId,
    reqRoom,
    resVehicleList,
    reqVehicle,
    select,
    limit,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
    };
  }, [handleScroll]);

  return (
    <div
      className="MyReservatationList"
      id="MyReservatationList"
      ref={container}
    >
      <div className="title">내 예약 현황 목록 / Total - {total}</div>

      {!loading ? (
        <>
          {select === 0 && (
            <>
              {resRoomList.length > 0 ? (
                <>
                  {resRoomList.map((item, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          handleDetail(item);
                        }}
                      >
                        <MyReservationCard data={item} />
                      </div>
                    );
                  })}
                  {loading2 ? (
                    <div className="absoluteLoading">
                      <Loading text={"불러오는중 ..."} />
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          )}
          {select === 1 && (
            <>
              {resVehicleList.length > 0 ? (
                <>
                  {resVehicleList.map((item, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          handleDetail(item);
                        }}
                      >
                        <MyReservationCard data={item} />
                      </div>
                    );
                  })}
                  {!loading2 ? (
                    <>
                      <Loading text={"불러오는중 ..."} />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <div className="centerLoading">
            <Loading text={"불러오는중 ..."} />
          </div>
        </>
      )}
    </div>
  );
}
export default MyReservationList;
