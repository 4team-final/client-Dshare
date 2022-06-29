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
  myReservationRoomList,
  myReservationVehicleList,
} from "../../store/actions/ReservationAction";
import { ItemChangeSave } from "../../store/actions/ChangeAction";
import "./MyReservationList.scss";
import MyReservationCard from "./MyReservationCard";

function MyReservationList() {
  const reservationStore = useSelector((state) => state.reservationReducer);
  const changeStoreSelect = useSelector(
    (state) => state.changeReducer.selected
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
    if (changeStoreSelect) {
      isSelect(changeStoreSelect);
    }
  }, [changeStoreSelect]);

  useEffect(() => {
    if (reqRoom && select === 0) {
      console.log(changeStoreSelect);
      dispatch(myReservationRoomList(reqRoom));
      // dispatch(myReservationVehicleList(reqVehicle));
    }
  }, [reqRoom, select]);

  useEffect(() => {
    if (reqVehicle && select === 1) {
      // dispatch(myReservationRoomList(reqRoom));
      dispatch(myReservationVehicleList(reqVehicle));
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

  useEffect(() => {
    if (reservationStore?.myReservationVehicleList?.data?.value) {
      console.log(reservationStore);
      setResVehicleList(
        ...resVehicleList,
        reservationStore?.myReservationVehicleList?.data?.value
      );
    }
  }, [reservationStore?.myReservationVehicleList?.data?.value]);

  useEffect(() => {
    if (resRoomList.length > 0 && select === 0) {
      setTotal(resRoomList[0].total);
    } else if (resVehicleList.length > 0 && select === 1) {
      setTotal(resVehicleList[0].total);
    } else {
      setTotal(0);
    }
  }, [resRoomList, resVehicleList]);

  // useEffect(() => {
  //   if (reservationStore) {
  //     console.log(reservationStore);
  //   }
  // }, [reservationStore]);

  const handleDetail = (item) => {
    alert(123);
    alert(item);
    dispatch(ItemChangeSave(item));
  };

  return (
    <div className="MyReservatationList">
      <div className="title">내 예약 현황 목록 / Total - {total}</div>
      {select === 0 ? (
        <>
          {resRoomList.length > 0 ? (
            <>
              {resRoomList.map((item, i) => {
                return (
                  <div
                    onClick={() => {
                      handleDetail(item);
                    }}
                  >
                    <MyReservationCard key={i} data={item} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      {select === 1 ? (
        <>
          {resVehicleList.length > 0 ? (
            <>
              {resVehicleList.map((item, i) => {
                return (
                  <div
                    onClick={() => {
                      handleDetail();
                    }}
                  >
                    <MyReservationCard key={i} data={item} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
export default MyReservationList;
