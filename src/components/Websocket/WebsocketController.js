// Install
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// User
import { SocketConnection } from './WebsocketService';
import ReservationModal from 'components/SelectTableProduct/Modal';
import { validIsSeat, socketMsgByReservation, selectByEmpNo, initSocketData } from 'store/actions/WebsocketAction';
import { makeRoomReservation, makeVehicleReservation } from 'store/actions/CalendarAction';
import { useNavigate } from 'react-router-dom';
import { CustomButton, CardFrame, HalfWidthFrame } from './WebSocketStyle';
import AlertModule from 'components/Alerts';
import { nextStepOneToTwo, nextStepThreeToFour, nextStepTwoToThree } from 'store/actions/NextAction';

export const WebsocketController = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [empNo, setEmpNo] = useState();
    const [alertMsg, setAlertMsg] = useState('');
    const [alertFlag, setAlertFlag] = useState(false);
    const [type, setType] = useState(2);
    const [uid, setUid] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [readyStepOne, setReadyStepOne] = useState(false);
    const [vid, setVid] = useState(0);
    const [rid, setRid] = useState(0);
    const [readyStepTwo, setReadyStepTwo] = useState(false);
    const [time, setTime] = useState([]);
    const [readyStepThree, setReadyStepThree] = useState(false);
    const [transTime, setTransTime] = useState();
    const [reserved, setReserved] = useState(false);
    const empnoStore = useSelector((state) => state.websocketReducer.empno);
    const typeStore = useSelector((state) => state.websocketReducer.product);
    const uIdStore = useSelector((state) => state.websocketReducer.uid);
    const titleStore = useSelector((state) => state.websocketReducer.title);
    const contentStore = useSelector((state) => state.websocketReducer.content);
    const vIdStore = useSelector((state) => state.websocketReducer.vid);
    const rIdStore = useSelector((state) => state.websocketReducer.rid);
    const timeStore = useSelector((state) => state.websocketReducer.converttotime);
    const transTimeStore = useSelector((state) => state.websocketReducer.arraytotime);
    const StepOneHandler = () => {
        if (type === 2) {
            setAlertMsg('예약할 공용 물품의 종류를 선택해주세요.');
            return;
        }
        if (uid === 0) {
            setAlertMsg('예약할 날짜를 선택해주세요.');
            return;
        }
        if (title === '' || title === undefined || title === null || title === ' ') {
            setAlertMsg('예약 신청서의 제목을 입력해주세요.');
            return;
        }
        if (content === '' || content === undefined || content === null || content === ' ') {
            setAlertMsg('예약 신청서의 사유를 입력해주세요.');
            return;
        }
        setStepOne(false);
        setStepTwo(true);
        dispatch(nextStepOneToTwo(true));
    };
    const StepTwoHandler = () => {
        if (type === 1 && vid === 0) {
            setAlertMsg('차량 모델을 선택해주세요.');
            return;
        }
        if (type === 0 && rid === 0) {
            setAlertMsg('회의실 종류를 선택해주세요.');
            return;
        }
        setStepTwo(false);
        setStepThree(true);
        dispatch(nextStepTwoToThree(true));
        SendEnter();
    };
    const initStepTwo = () => {
        setVid(0);
        setRid(0);
        setReadyStepOne(false);
        setReadyStepTwo(false);
        setStepTwo(false);
        setStepOne(true);
        dispatch(nextStepOneToTwo(false));
    };
    const StepThreeHandler = () => {
        if (time.length < 1) {
            setAlertMsg('시간이 선택되지 않았습니다.');
            return;
        }
        if (transTime === null) {
            setAlertMsg('예약 중 오류가 발생하였습니다. 다시 시도해주세요.');
            return;
        }
        setStepThree(false);
        dispatch(nextStepOneToTwo(false));
        dispatch(nextStepTwoToThree(false));
        SendTalk();
        ConvertTimeAndReserve();
    };
    const initStepThree = () => {
        SendQuit();
        setTime([]);
        setReadyStepOne(false);
        setReadyStepTwo(false);
        setReadyStepThree(false);
        setStepThree(false);
        setStepTwo(false);
        setStepOne(true);
        dispatch(nextStepOneToTwo(false));
        dispatch(nextStepTwoToThree(false));
    };
    const SendEnter = () => {
        dispatch(validIsSeat());
        dispatch(
            type === 0
                ? socketMsgByReservation('R_ENTER', { rid: rid, uid: uid, empno: empNo })
                : socketMsgByReservation('ENTER', { vid: vid, uid: uid, empno: empNo })
        );
    };
    const SendTalk = () => {
        dispatch(
            type === 0
                ? socketMsgByReservation('R_TALK', { rid: rid, uid: uid, empno: empNo, time: time })
                : socketMsgByReservation('TALK', { vid: vid, uid: uid, empno: empNo, time: time })
        );
    };
    const SendQuit = () => {
        dispatch(
            type === 0
                ? socketMsgByReservation('R_QUIT', { rid: rid, uid: uid, empno: empNo })
                : socketMsgByReservation('QUIT', { vid: vid, uid: uid, empno: empNo })
        );
    };
    const DisconnectAndToBack = () => {
        SendQuit();
        dispatch(initSocketData());
        initStepTwo();
        initStepThree();
        navigate('/main/dashboard/default', { replace: true });
    };
    const ConvertTimeAndReserve = () => {
        // console.log(rid, content, title, transTime);
        dispatch(
            type === 0
                ? makeRoomReservation({
                      rid: rid,
                      reason: content,
                      title: title,
                      startedAt: transTime.start,
                      endedAt: transTime.end
                  })
                : makeVehicleReservation({
                      vid: vid,
                      reason: content,
                      title: title,
                      startedAt: transTime.start.replace('T', ' '),
                      endedAt: transTime.end.replace('T', ' ')
                  })
        );
        setReserved(true);
        dispatch(initSocketData());
    };
    useEffect(() => {
        dispatch(selectByEmpNo());
        dispatch(initSocketData());
        dispatch(nextStepOneToTwo(false));
        dispatch(nextStepTwoToThree(false));
        dispatch(nextStepThreeToFour(false));
        setAlertMsg('');
        initStepTwo();
        initStepThree();
        setStepOne(true);
        setStepTwo(false);
        setStepThree(false);
        setReadyStepOne(false);
        setReadyStepTwo(false);
        setReadyStepThree(false);
        setUid(moment().format('yyyyMMdd'));
    }, []);
    useEffect(() => {
        if (empnoStore && empnoStore.data != null) {
            setEmpNo(empnoStore.data);
        }
    }, [empnoStore]);
    useEffect(() => {
        if (alertMsg !== '') {
            setAlertFlag(true);
        }
        setTimeout(() => {
            setAlertFlag(false);
            setAlertMsg('');
        }, 3500);
    }, [alertMsg]);
    useEffect(() => {
        if (typeStore && typeStore.data != null) {
            setType(typeStore.data);
        }
    }, [typeStore]);
    useEffect(() => {
        if (uIdStore && uIdStore.data != null) {
            setUid(uIdStore.data);
        }
    }, [uIdStore]);
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
        if (
            type !== 2 &&
            uid !== 0 &&
            title !== '' &&
            title !== undefined &&
            title !== null &&
            title !== ' ' &&
            content !== '' &&
            content !== undefined &&
            content !== null &&
            content !== ' '
        ) {
            setReadyStepOne(true);
        }
    }, [type, uid, title, content]);
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
        if (rid !== 0 || vid !== 0) {
            setReadyStepTwo(true);
        }
    }, [rid, vid]);
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
        if (time.length > 0 && transTime) {
            setReadyStepThree(true);
        }
    }, [time]);

    return (
        <>
            <AlertModule status={alertFlag} notice={'error'} font={'22'} contents={alertMsg} />
            <HalfWidthFrame>
                <CardFrame>
                    <CustomButton hello={stepOne} disabled={!readyStepOne} onClick={StepOneHandler}>
                        다 음
                    </CustomButton>
                    <CustomButton hello={stepTwo} onClick={initStepTwo}>
                        이 전
                    </CustomButton>
                    <CustomButton hello={stepTwo} disabled={!readyStepTwo} onClick={StepTwoHandler}>
                        다 음
                    </CustomButton>
                    <CustomButton hello={stepThree} onClick={initStepThree}>
                        이 전
                    </CustomButton>
                    <CustomButton hello={stepThree} onClick={DisconnectAndToBack}>
                        예약취소
                    </CustomButton>
                    <CustomButton hello={stepThree} disabled={!readyStepThree} onClick={StepThreeHandler}>
                        예약하기
                    </CustomButton>
                </CardFrame>
                <ReservationModal type={type} open={reserved} />
                <SocketConnection props={type === 0 ? { type: 0, rid: rid, uid: uid } : { type: 1, vid: vid, uid: uid }} />
            </HalfWidthFrame>
        </>
    );
};
