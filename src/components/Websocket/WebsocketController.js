// Install
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// User
import { SocketConnection } from './WebsocketService';
import ReservationModal from 'components/SelectTableProduct/Modal';
import { validIsSeat, socketMsgByReservation, selectByEmpNo, initSocketData } from 'store/actions/WebsocketAction';
import { makeRoomReservation, makeVehicleReservation } from 'store/actions/CalendarAction';
import { useNavigate } from 'react-router';
import { CustomButton, CardFrame, HalfWidthFrame } from './WebSocketStyle';
import AlertModule from 'components/Alerts';
import { replace } from 'formik';

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
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [reserved, setReserved] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertFlag, setAlertFlag] = useState(false);
    const [socketMsg, setSocketMsg] = useState('');
    const [socketFlag, setSocketFlag] = useState(false);
    const [socketBtn, setSocketBtn] = useState(true);
    const typeStore = useSelector((state) => state.websocketReducer.product);
    const vIdStore = useSelector((state) => state.websocketReducer.vid);
    const rIdStore = useSelector((state) => state.websocketReducer.rid);
    const uIdStore = useSelector((state) => state.websocketReducer.uid);
    const timeStore = useSelector((state) => state.websocketReducer.converttotime);
    const empnoStore = useSelector((state) => state.websocketReducer.empno);
    const transTimeStore = useSelector((state) => state.websocketReducer.arraytotime);
    const titleStore = useSelector((state) => state.websocketReducer.title);
    const contentStore = useSelector((state) => state.websocketReducer.content);
    const socketMsgStore = useSelector((state) => state.websocketReducer.socketmessage);
    const isSeatStore = useSelector((state) => state.websocketReducer.validisseat);
    const [reservedBtn, setReservedBtn] = useState(true);
    const ConnectHandler = () => {
        dispatch(validIsSeat());
        dispatch(
            type === 0
                ? socketMsgByReservation('R_ENTER', { rid: rid, uid: uid, empno: empNo })
                : socketMsgByReservation('ENTER', { vid: vid, uid: uid, empno: empNo })
        );
    };
    const QuitSocket = () => {
        dispatch(
            type === 0
                ? socketMsgByReservation('R_QUIT', { rid: rid, uid: uid, empno: empNo })
                : socketMsgByReservation('QUIT', { vid: vid, uid: uid, empno: empNo })
        );
    };
    const DisconnectHandler = () => {
        QuitSocket();
        dispatch(initSocketData());
        navigate('/main/dashboard/default', { replace: true });
    };
    const UnselectHandler = () => {
        QuitSocket();
        setSocketBtn(true);
        dispatch(initSocketData());
    };
    const SetTimeHandler = () => {
        if (type === 0 && rid === 0) {
            setAlertMsg('대여할 회의실을 선택해주세요.');
            return;
        }
        if (type === 1 && vid === 0) {
            setAlertMsg('대여할 차량을 선택해주세요.');
            return;
        }
        if (time.length < 1) {
            setAlertMsg('자원을 대여할 시간을 선택해주세요.');
            return;
        }
        if (uid === 0) {
            setAlertMsg('자원을 대여할 날짜를 선택해주세요.');
            return;
        }
        if (title === '' || title === null || title === undefined) {
            setAlertMsg('예약에 대한 제목을 입력해주세요.');
            return;
        }
        if (content === '' || content === null || content === undefined) {
            setAlertMsg('예약에 관한 사유를 입력해주세요.');
            return;
        }
        dispatch(
            type === 0
                ? socketMsgByReservation('R_TALK', { rid: rid, uid: uid, empno: empNo, time: time })
                : socketMsgByReservation('TALK', { vid: vid, uid: uid, empno: empNo, time: time })
        );
        QuitSocket();

        let start = transTime.start.replace('T', ' ');
        let end = transTime.end.replace('T', ' ');
        dispatch(
            type === 0
                ? makeRoomReservation({
                      rid: rid,
                      reason: content,
                      title: title,
                      startedAt: transTime.start,
                      endedAt: transTime.end
                  })
                : makeVehicleReservation({ vid: vid, reason: content, title: title, startedAt: start, endedAt: end })
        );
        setReserved(true);
        dispatch(initSocketData());
    };
    useEffect(() => {
        dispatch(selectByEmpNo());
        setSocketBtn(true);
        setReservedBtn(true);
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

    useEffect(() => {
        if (titleStore && titleStore.data != null) {
            setTitle(titleStore.data);
        }
    }, [titleStore]);
    useEffect(() => {
        if (contentStore && contentStore.data != null) {
            setContent(contentStore.data);
        }
    }, [contentStore]);
    useEffect(() => {
        if (alertMsg !== '') {
            setAlertFlag(true);
        }
        setTimeout(() => {
            setAlertFlag(false);
            setAlertMsg('');
        }, 2500);
    }, [alertMsg]);
    useEffect(() => {
        if (socketMsgStore && socketMsgStore.data != null) {
            if (socketMsgStore.data.includes('null')) {
                QuitSocket();
                setSocketMsg('');
            } else {
                setSocketMsg(socketMsgStore.data);
            }
        }
    }, [socketMsgStore]);
    useEffect(() => {
        if (socketMsg !== '' && socketMsg !== undefined && socketMsg !== null) {
            setSocketFlag(true);
        }
        setTimeout(() => {
            setSocketFlag(false);
            setSocketMsg('');
        }, 2500);
    }, [socketMsg]);
    useEffect(() => {
        if (type !== 2 && uid !== 0 && (rid !== 0 || vid !== 0)) {
            setSocketBtn(false);
        }
    }, [rid, vid, type, uid]);
    useEffect(() => {
        if (!socketBtn && time.length > 0) {
            setReservedBtn(false);
        }
    }, [socketBtn, time]);
    return (
        <HalfWidthFrame>
            <AlertModule status={socketFlag} notice={'info'} font={'14'} contents={socketMsg} />
            <AlertModule status={alertFlag} notice={'error'} font={'22'} contents={alertMsg} />
            <CardFrame>
                <CustomButton onClick={UnselectHandler}>선택 취소</CustomButton>
                <CustomButton disabled={socketBtn || (isSeatStore && isSeatStore.ready)} onClick={ConnectHandler}>
                    선택 완료
                </CustomButton>
                <CustomButton disabled={reservedBtn} onClick={DisconnectHandler}>
                    예약 취소
                </CustomButton>
                <CustomButton disabled={reservedBtn} onClick={SetTimeHandler}>
                    예약하기
                </CustomButton>
            </CardFrame>
            <ReservationModal type={type} open={reserved} />
            <SocketConnection props={type === 0 ? { type: 0, rid: rid, uid: uid } : { type: 1, vid: vid, uid: uid }} />
        </HalfWidthFrame>
    );
};
