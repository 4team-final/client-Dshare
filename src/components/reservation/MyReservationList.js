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
    lastId: 0,
    limit: 5,
  });
  const [reqVehicle, setReqVehicle] = useState({
    lastId: reqVehicleLastId,
    limit: 5,
  });

  const [resRoomList, setResRoomList] = useState([]);
  const [resVehicleList, setResVehicleList] = useState([]);

  const [select, isSelect] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    if (changeStoreSelect === 0 || changeStoreSelect === 1) {
      isSelect(changeStoreSelect);
    }
  }, [changeStoreSelect]);

  useEffect(() => {
    if (reqRoom.lastId >= 0 && select === 0) {
      if (resRoomList.length === 0) {
        function fetchList() {
          setLoading(true);
          dispatch(myReservationRoomList(reqRoom));
        }
        fetchList();
        setLoading(false);
      }
    }
  }, [reqRoom, select]);

  useEffect(() => {
    if (reqVehicle.lastId >= 0 && select === 1) {
      if (resVehicleList.length === 0) {
        function fetchList() {
          setLoading(true);
          dispatch(myReservationVehicleList(reqVehicle));
        }
        fetchList();
        setLoading(false);
      }
    }
  }, [reqVehicle, select]);

  useEffect(() => {
    if (flag) {
      document.getElementById("MyReservatationList").style.overflowY = "hidden";
    } else if (!flag) {
      document.getElementById("MyReservatationList").style.overflowY = "scroll";
    }
  }, [flag]);

  useEffect(() => {
    if (
      reservationStore?.myReservationRoomList?.data?.value &&
      reservationStore?.myReservationRoomList?.data?.value[
        reservationStore?.myReservationRoomList?.data?.value?.length - 1
      ]?.reservationResDTO?.id !==
        resRoomList[resRoomList?.length - 1]?.reservationResDTO?.id
    ) {
      setResRoomList([
        ...resRoomList,
        ...reservationStore?.myReservationRoomList?.data?.value,
      ]);
      setLoading2(false);
      setFlag(false);
    }
  }, [reservationStore?.myReservationRoomList?.data?.value]);

  useEffect(() => {
    if (
      reservationStore?.myReservationVehicleList?.data?.value &&
      reservationStore?.myReservationVehicleList?.data?.value[
        reservationStore?.myReservationVehicleList?.data?.value?.length - 1
      ]?.reservationId !==
        resVehicleList[resVehicleList?.length - 1]?.reservationId
    ) {
      setResVehicleList([
        ...resVehicleList,
        ...reservationStore?.myReservationVehicleList?.data?.value,
      ]);
      setLoading2(false);
      setFlag(false);
    }
  }, [reservationStore?.myReservationVehicleList?.data?.value]);

  useEffect(() => {
    if (resRoomList[resRoomList.length - 1] && resRoomList.length > 0) {
      setReqRoomLastId(
        resRoomList[resRoomList.length - 1].reservationResDTO.id
      );
    }
  }, [resRoomList]);
  useEffect(() => {
    if (
      resVehicleList[resVehicleList.length - 1] &&
      resVehicleList.length > 0
    ) {
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

  const container = useRef(null);

  const handleScroll = useCallback(async () => {
    // const { innerHeight } = window ;
    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)
    const innerHeight = document
      .getElementById("MyReservatationList")
      .getBoundingClientRect().width;

    // 브라우저 총 내용의 크기 (스크롤을 포함한다)
    const scrollHeight = container.current.scrollHeight;

    // 현재 스크롤바의 위치
    const scrollTop = container.current.scrollTop;

    if (!flag) {
      document.getElementById("MyReservatationList").style.overflowY = "scroll";
    }
    // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.
    if (
      Math.round(scrollTop + innerHeight) >= Math.round(scrollHeight * 0.75)
    ) {
      if (select === 0 && reqRoomLastId) {
        setReqRoom({
          lastId: reqRoomLastId,
          limit: 5,
        });
        setLoading2(true);
        setFlag(true);
        function fetch() {
          dispatch(myReservationRoomList(reqRoom));
        }
        fetch();
      } else if (select === 1 && reqVehicleLastId) {
        setReqVehicle({
          lastId: reqVehicleLastId,
          limit: 5,
        });
        setLoading2(true);
        setFlag(true);
        function fetch() {
          dispatch(myReservationVehicleList(reqVehicle));
        }
        fetch();
      }
    }
  }, [
    resRoomList,
    reqRoomLastId,
    reqRoom,
    resVehicleList,
    reqVehicleLastId,
    reqVehicle,
    select,
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
                  {loading2 ? (
                    <>
                      <div className="absoluteLoading">
                        <Loading text={"불러오는중 ..."} />
                      </div>
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
