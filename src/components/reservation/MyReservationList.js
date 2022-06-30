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
import Loading from "../Loading";
import "../Loading.css";

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
  const [loading, setLoading] = useState(false);

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
      console.log(changeStoreSelect);
      isSelect(changeStoreSelect);
    }
  }, [changeStoreSelect]);

  useEffect(() => {
    if (reqRoom && select === 0) {
      setLoading(true);
      dispatch(myReservationRoomList(reqRoom));
      setLoading(false);
    }
  }, [reqRoom, select]);

  useEffect(() => {
    if (reqVehicle && select === 1) {
      setLoading(true);
      dispatch(myReservationVehicleList(reqVehicle));
      setLoading(false);
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

  async function handleDetail(item) {
    dispatch(ItemChangeSave(item));
  }

  return (
    <div className="MyReservatationList">
      <div className="title">내 예약 현황 목록 / Total - {total}</div>

      {!loading && (
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
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
      {loading && <Loading text={"불러오는중 ..."} />}
    </div>
  );
}
export default MyReservationList;
