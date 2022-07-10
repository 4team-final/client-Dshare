import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { soonIngTimeRoom, soonTimeVehicle, ingTimeVehicle } from 'store/actions/ReservationAction';
import { AllTimerMessage } from 'store/actions/ChangeAction';
import './Timer.scss';
import { FcAlarmClock } from 'react-icons/fc';
import Alert from '@mui/material/Alert';
import Loading from 'components/Loading';

function Timer() {
    const reservationStore = useSelector((state) => state.reservationReducer);
    const dispatch = useDispatch();

    const [_soonTimeRoom, setSoonTimeRoom] = useState(-1);
    const [_ingTimeRoom, setIngTimeRoom] = useState(-1);
    const [_soonTimeVehicle, setSoonTimeVehicle] = useState(-1);
    const [_ingTimeVehicle, setIngTimeVehicle] = useState(-1);
    const [alertBool, setAlertBool] = useState(false);
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');
    const [message4, setMessage4] = useState('');
    const [oneStartTime, setOneStartTime] = useState(0);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        function fetch() {
            dispatch(soonIngTimeRoom(token));
            dispatch(soonTimeVehicle(token));
            dispatch(ingTimeVehicle(token));
            setLoading(false);
        }
        fetch();
    }, []);

    useEffect(() => {
        if (message != '' || message2 != '' || message3 != '' || message4 != '') {
            dispatch(
                AllTimerMessage({
                    message: message,
                    message2: message2,
                    message3: message3,
                    message4: message4
                })
            );
        }
    }, [message, message2, message3, message4]);
    useEffect(() => {
        if (_soonTimeRoom === 0) {
            dispatch(soonIngTimeRoom(token));
        }
        if (_soonTimeVehicle === 0) {
            dispatch(ingTimeVehicle(token));
        }
    }, [alertBool]);

    useEffect(() => {
        if (reservationStore?.soonIngTimeRoom?.data?.value) {
            setSoonTimeRoom(reservationStore?.soonIngTimeRoom?.data?.value?.soonRemainTime * 1000);
            setIngTimeRoom(reservationStore?.soonIngTimeRoom?.data?.value?.ingRemainTime * 1000);
        }
    }, [reservationStore?.soonIngTimeRoom?.data?.value]);

    useEffect(() => {
        if (reservationStore?.soonTimeVehicle?.data?.value) {
            setSoonTimeVehicle(reservationStore?.soonTimeVehicle?.data?.value * 1000);
        }
    }, [reservationStore?.soonTimeVehicle?.data]);

    useEffect(() => {
        if (reservationStore?.ingTimeVehicle?.data?.value) {
            setIngTimeVehicle(reservationStore?.ingTimeVehicle?.data?.value * 1000);
        }
    }, [reservationStore?.ingTimeVehicle?.data]);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(_soonTimeRoom) > 0) {
                setSoonTimeRoom(parseInt(_soonTimeRoom) - 1000);
            }
            if (parseInt(_soonTimeRoom) === 60000) {
                setMessage('회의시작 1분전! 서두르세요!!');
            } else if (parseInt(_soonTimeRoom) === 0) {
                setMessage('');
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [_soonTimeRoom]);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(_ingTimeRoom) > 0) {
                setIngTimeRoom(parseInt(_ingTimeRoom) - 10);
            }
            if (parseInt(_ingTimeRoom) === 60000) {
                setMessage2('회의종료 1분전! 수고하셨습니다!!');
            } else if (parseInt(_ingTimeRoom) === 0) {
                setMessage2('');
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [_ingTimeRoom]);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(_soonTimeVehicle) > 0) {
                setSoonTimeVehicle(parseInt(_soonTimeVehicle) - 1000);
            }
            if (parseInt(_soonTimeVehicle) === 60000) {
                setMessage3('차량시작 1분전! 안전운전!!');
            } else if (parseInt(_ingTimeVehicle) === 0) {
                setMessage3('');
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [_soonTimeVehicle]);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(_ingTimeVehicle) > 0) {
                setIngTimeVehicle(parseInt(_ingTimeVehicle) - 1000);
            }
            if (parseInt(_ingTimeVehicle) === 60000) {
                setMessage4('차량반납 1분전! 수고하셨습니다!!');
            } else if (parseInt(_ingTimeVehicle) === 0) {
                setMessage4('');
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [_ingTimeVehicle]);

    const timeDecrement = () => {
        const timePassed = Date.now() - oneStartTime;
    };

    useEffect(() => {
        if (message === '' && message2 === '' && message3 === '' && message4 === '') {
        } else {
            setAlertBool(true);
            setTimeout(() => {
                setAlertBool(false);
            }, 50000);
        }
    }, [message, message2, message3, message4]);

    // const TimeOutAlert = () => {};

    const handleUpdateTimer = (time) => {
        const days = parseInt(time / 86400000);
        time = time % 86400000;
        const hours = parseInt(time / 3600000);
        time = time % 3600000;
        const minutes = parseInt(time / 60000);
        time = time % 60000;
        const second = parseInt(time / 1000);
        time = time % 1000;
        const mssecond = time;

        if (!minutes) {
            return second + '초 ';
        }
        if (!hours) {
            return minutes + '분 ' + second + '초 ';
        }
        if (!days) {
            return hours + '시간 ' + minutes + '분 ' + second + '초 ';
        }

        return days + '일 ' + hours + '시간 ' + minutes + '분 ' + second + '초 ';
    };

    return (
        <>
            {isLoading ? (
                <div className="box">
                    <Loading text={'조회중...'} center={true} />
                </div>
            ) : (
                <>
                    <div className="box">
                        <FcAlarmClock className="alarmClock" />
                        <div className="block">
                            {_soonTimeRoom > 0 ? (
                                <div className="line">
                                    다음 회의실 예약 :<span className="bold">{handleUpdateTimer(_soonTimeRoom)}</span>
                                    남았습니다.
                                </div>
                            ) : (
                                <div className="line">다음 회의실 예약이 없습니다.</div>
                            )}
                            {_ingTimeRoom > 0 ? (
                                <div className="line">
                                    현재 회의실 반납 :<span className="bold">{handleUpdateTimer(_ingTimeRoom)} </span>
                                    남았습니다.
                                </div>
                            ) : (
                                <div className="line">현재 반납할 회의실이 없습니다.</div>
                            )}
                            {_soonTimeVehicle > 0 ? (
                                <div className="line">
                                    다음 차량 예약 :<span className="bold">{handleUpdateTimer(_soonTimeVehicle)}</span>
                                    남았습니다.
                                </div>
                            ) : (
                                <div className="line">다음 차량 예약이 없습니다.</div>
                            )}
                            {_ingTimeVehicle > 0 ? (
                                <div className="line">
                                    현재 차량 반납 :<span className="bold">{handleUpdateTimer(_ingTimeVehicle)}</span>
                                    남았습니다.
                                </div>
                            ) : (
                                <div className="line">현재 반납할 차량이 없습니다.</div>
                            )}
                        </div>
                        <div>
                            {alertBool ? (
                                <Alert sx={{ bgcolor: '#5073b4' }} variant="filled" severity="success">
                                    <div className="memo">
                                        {message || message2 || message3 || message4 ? (
                                            <>
                                                <div>{message}</div>
                                                <div>{message2}</div>
                                                <div>{message3}</div>
                                                <div>{message4}</div>
                                            </>
                                        ) : (
                                            <div className="memo">{message}</div>
                                        )}
                                    </div>
                                </Alert>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
export default Timer;
