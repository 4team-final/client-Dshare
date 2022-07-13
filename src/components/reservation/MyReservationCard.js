import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { soonIngTimeRoom, soonTimeVehicle, ingTimeVehicle } from 'store/actions/ReservationAction';
import './MyReservationCard.scss';
import Card from '@mui/material/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from './SimpleSlider';

function MyReservationCard(props) {
    const changeStoreSelect = useSelector((state) => state.changeReducer.selected);
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);

    const [roomImgs, setRoomImgs] = useState([]);
    const [vehicleImgs, setVehicleImgs] = useState([]);
    const [select, isSelect] = useState(0);
    const clickref = useRef();

    useEffect(() => {
        if (props?.data?.reservationResDTO) {
            setData(props?.data?.reservationResDTO);
            setRoomImgs(props?.data?.reservationResDTO?.room?.roomImgResDTOList);
        } else {
            setData2(props.data);
            setVehicleImgs(props?.data?.imgList);
        }
    }, [props]);

    useEffect(() => {
        if (changeStoreSelect === 0 || changeStoreSelect === 1) {
            isSelect(changeStoreSelect);
        }
    }, [changeStoreSelect]);

    const convertDate = (time) => {
        if (!time && time == null) {
            return;
        }

        let a = time?.split('T')[0]?.split('-');
        let b = time?.split('T')[1]?.split(':');

        return a[0] + '년 ' + a[1] + '월 ' + +a[2] + '일 ' + b[0] + '시 ' + b[1] + '분 ';
    };

    return (
        <>
            {select === 0 && (
                <div className="card">
                    <Card
                        sx={{
                            maxWidth: '100%',
                            width: '100%',
                            maxHeight: '100%',
                            height: '100%',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                        ref={clickref}
                        onClick={() => {}}
                    >
                        <div className="slider_nameLayout">
                            {data && roomImgs.length ? (
                                <>
                                    <div className="sliderLayout">
                                        <SimpleSlider data={roomImgs} style={{ width: '7em', height: '7em' }} />
                                    </div>
                                </>
                            ) : (
                                <div className="sliderLayout"></div>
                            )}
                            <div className="nameLayout">예약자 - {data?.emp?.name}</div>
                        </div>
                        <div className="room_reserveLayout">
                            <div className="roomLayout">
                                <div className="half">
                                    <span className="fontB">{data?.room?.categoryName}</span>
                                </div>
                                <div className="half">
                                    <span>
                                        <span className="float">
                                            {data?.room?.roomNo}호 - {data?.room?.capacity}인실
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="reserveLayout">
                                <div className="half">
                                    <span>
                                        <span className="float">
                                            <div>
                                                <span
                                                    style={{
                                                        fontSize: '10px',
                                                        margin: '5px',
                                                        borderRadius: '30px',
                                                        padding: '3px',
                                                        background: 'lightyellow',
                                                        boxShadow: '1px 1px 3px 1px #dadce0'
                                                    }}
                                                >
                                                    시작
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '0.8em'
                                                    }}
                                                >
                                                    {convertDate(data?.startedAt)}
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    style={{
                                                        fontSize: '10px',
                                                        margin: '5px',
                                                        borderRadius: '30px',
                                                        padding: '3px',
                                                        background: 'lightyellow',
                                                        boxShadow: '1px 1px 3px 1px #dadce0'
                                                    }}
                                                >
                                                    종료
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '0.8em'
                                                    }}
                                                >
                                                    {convertDate(data?.endedAt)}
                                                </span>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                                <div className="half">
                                    <span>
                                        <div>
                                            <span
                                                style={{
                                                    fontSize: '10px',
                                                    margin: '5px',
                                                    borderRadius: '30px',
                                                    padding: '3px',
                                                    background: '#FFDDDC',
                                                    boxShadow: '1px 1px 3px 1px #dadce0'
                                                }}
                                            >
                                                확정
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: '0.8em'
                                                }}
                                            >
                                                {convertDate(data?.createdAt)}
                                            </span>
                                        </div>
                                        <span className="reserveTitle">
                                            <span
                                                style={{
                                                    fontSize: '10px',
                                                    margin: '5px',
                                                    borderRadius: '30px',
                                                    padding: '3px',
                                                    background: '#DBFFCF',
                                                    boxShadow: '1px 1px 3px 1px #dadce0'
                                                }}
                                            >
                                                예약 이름
                                            </span>
                                            {data?.title}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {select === 1 && (
                <div className="card">
                    <Card
                        sx={{
                            maxWidth: '100%',
                            width: '100%',
                            maxHeight: '100%',
                            height: '100%',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <div className="slider_nameLayout">
                            {data2 && vehicleImgs?.length ? (
                                <>
                                    <div className="sliderLayout">
                                        <SimpleSlider data={vehicleImgs} style={{ width: '7em', height: '7em' }} />
                                    </div>
                                </>
                            ) : (
                                <div className="sliderLayout"></div>
                            )}
                            <div className="nameLayout">예약자 - {data2?.ename}</div>
                        </div>
                        <div className="room_reserveLayout">
                            <div className="roomLayout">
                                <div className="half">
                                    <span className="fontB">{data2?.vname}</span>
                                </div>

                                <div className="half">
                                    <span>
                                        <span className="float">
                                            차번호 : {data2?.vnumber}
                                            <br />
                                            색깔 : {data2?.color} / {data2?.capacity}인승
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="reserveLayout">
                                <div className="half">
                                    <span>
                                        <span className="float">
                                            <div style={{ marginTop: '1%' }}>
                                                <span
                                                    style={{
                                                        fontSize: '10px',
                                                        margin: '5px',
                                                        borderRadius: '30px',
                                                        padding: '3px',
                                                        background: 'lightyellow',
                                                        boxShadow: '1px 1px 3px 1px #dadce0'
                                                    }}
                                                >
                                                    시작
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '0.8em'
                                                    }}
                                                >
                                                    {convertDate(data2?.startedAt)}
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    style={{
                                                        fontSize: '10px',
                                                        margin: '5px',
                                                        borderRadius: '30px',
                                                        padding: '3px',
                                                        background: 'lightyellow',
                                                        boxShadow: '1px 1px 3px 1px #dadce0'
                                                    }}
                                                >
                                                    종료
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '0.8em'
                                                    }}
                                                >
                                                    {convertDate(data2?.endedAt)}
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    style={{
                                                        fontSize: '10px',
                                                        margin: '5px',
                                                        borderRadius: '30px',
                                                        padding: '3px',
                                                        background: '#FFDDDC',
                                                        boxShadow: '1px 1px 3px 1px #dadce0'
                                                    }}
                                                >
                                                    확정
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: '0.8em'
                                                    }}
                                                >
                                                    {convertDate(data2?.reservationModifiedAt)}
                                                </span>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                                <div className="half">
                                    <span>
                                        <span className="reserveTitle">
                                            <span
                                                style={{
                                                    fontSize: '10px',
                                                    margin: '5px',
                                                    borderRadius: '30px',
                                                    padding: '3px',
                                                    background: '#DBFFCF',
                                                    boxShadow: '1px 1px 3px 1px #dadce0'
                                                }}
                                            >
                                                예약 이름
                                            </span>
                                            {data2?.title}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
}
export default MyReservationCard;
