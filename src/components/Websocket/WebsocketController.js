import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SocketConnection } from './WebsocketService';
import { validIsSeat, socketMsgByReservation, selectByEmpNo } from 'store/actions/WebsocketAction';
import { makeRoomReservation, makeVehicleReservation } from 'store/actions/CalendarAction';

export const WebsocketController = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [vid, setVid] = useState(0);
    const [rid, setRid] = useState(0);
    const [uid, setUid] = useState(0);
    const [type, setType] = useState(2);
    const [time, setTime] = useState([]);
    const [empNo, setEmpNo] = useState();
    const [transTime, setTransTime] = useState();
    const typeStore = useSelector((state) => state.websocketReducer.product);
    const vIdStore = useSelector((state) => state.websocketReducer.vid);
    const rIdStore = useSelector((state) => state.websocketReducer.rid);
    const uIdStore = useSelector((state) => state.websocketReducer.uid);
    const timeStore = useSelector((state) => state.websocketReducer.converttotime);
    const empnoStore = useSelector((state) => state.websocketReducer.empno);
    const transTimeStore = useSelector((state) => state.websocketReducer.arraytotime);

    const ConnectHandler = () => {
        dispatch(validIsSeat());
        dispatch(
            type === 0
                ? socketMsgByReservation('R_ENTER', { rid: rid, uid: uid, empno: empNo })
                : socketMsgByReservation('ENTER', { vid: vid, uid: uid, empno: empNo })
        );
    };
    const DisconnectHandler = () => {
        dispatch(
            type === 0
                ? socketMsgByReservation('R_QUIT', { rid: rid, uid: uid, empno: empNo })
                : socketMsgByReservation('QUIT', { vid: vid, uid: uid, empno: empNo })
        );
    };
    const SetTimeHandler = () => {
        dispatch(
            type === 0
                ? socketMsgByReservation('R_TALK', { rid: rid, uid: uid, empno: empNo, time: time })
                : socketMsgByReservation('TALK', { vid: vid, uid: uid, empno: empNo, time: time })
        );
        DisconnectHandler();

        let start = transTime.start.replace('T', ' ');
        let end = transTime.end.replace('T', ' ');

        dispatch(
            type === 0
                ? makeRoomReservation({
                      rid: rid,
                      empId: empid,
                      reason: reason,
                      title: title,
                      startedAt: transTime.start,
                      endedAt: transTime.end
                  })
                : makeVehicleReservation({ vid: vid, reason: reason, title: title, startedAt: start, endedAt: end })
        );
    };
    useEffect(() => {
        dispatch(selectByEmpNo());
    }, []);
    useEffect(() => {
        if (typeStore && typeStore.data != null) {
            setType(typeStore.data);
        }
    }, [typeStore]);
    useEffect(() => {
        if (vIdStore && vIdStore.data != null) {
            setVid(vIdStore.data);
        }
    }, [vIdStore]);
    useEffect(() => {
        if (rIdStore && rIdStore.data != null) {
            setRid(rIdStore.data);
        }
    }, [rIdStore]);
    useEffect(() => {
        if (uIdStore && uIdStore.data != null) {
            setUid(uIdStore.data);
        }
    }, [uIdStore]);
    useEffect(() => {
        if (empnoStore && empnoStore.data != null) {
            setEmpNo(empnoStore.data);
        }
    }, [empnoStore]);
    useEffect(() => {
        if (timeStore && timeStore.data != null) {
            setTime(timeStore.data);
        }
    }, [timeStore]);
    useEffect(() => {
        if (transTimeStore && transTimeStore.data != null) {
            setTransTime(transTimeStore.data);
        }
    }, [transTimeStore]);

    return (
        <div>
            <div>
                <span>사번 : {empNo ? empNo : '-'}</span>
                <br />
                <span>날짜 : {uid ? uid : '-'}</span>
                <br />
                <>{type === 0 ? <span>회의실 : {rid ? rid : '-'}</span> : <span>차량 : {vid ? vid : '-'}</span>}</>
                <br />
                <>데이터 : {time ? time.length : '-'}</>
            </div>
            <button onClick={ConnectHandler}>적용</button>
            <button onClick={DisconnectHandler}>선택 초기화</button>
            <button onClick={SetTimeHandler}>예약하기</button>
            <SocketConnection props={type === 0 ? { type: 0, rid: rid, uid: uid } : { type: 1, vid: vid, uid: uid }} />
        </div>
    );
};
