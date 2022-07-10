//BoardList.js

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findAllByRoom, findAllByVehicle } from 'store/actions/CalendarAction';
import Button from '@mui/material/Button';
import { Card, Typography } from 'antd';
import Icon from '@mdi/react';
import BoardCard from './BoardCard';
import Grid from '@mui/material/Grid';
import './BoardList.css';
import Loading from 'components/Loading';
import 'components/Loading.css';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { AiFillCar } from 'react-icons/ai';

function BoardList() {
    const vehicleStore = useSelector((state) => state.calendarReducer.allVehicle);
    const roomStore = useSelector((state) => state.calendarReducer.allRoom);
    const dispatch = useDispatch();
    //날짜순
    const [rboards, setrBoards] = useState([]);
    const [vboards, setvBoards] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [selected, setSelected] = useState(1);

    const btn1 = useRef();
    const btn2 = useRef();

    // 시작
    useEffect(() => {
        setLoading(true);
        async function fetchBoardList() {
            dispatch(findAllByRoom());
            dispatch(findAllByVehicle());
            setLoading(false);
        }
        fetchBoardList();
    }, []);

    // 첫렌더링
    useEffect(() => {
        if (vehicleStore?.data?.data?.value) {
            setvBoards(vehicleStore?.data?.data?.value);
        }
    }, [vehicleStore?.data?.data?.value]);

    useEffect(() => {
        if (roomStore?.data?.data?.value) {
            setrBoards(roomStore?.data?.data?.value);
        }
    }, [roomStore?.data?.data?.value]);

    return (
        <>
            {selected === 1 ? (
                <>
                    {loading ? (
                        <div>
                            <Loading text={'조회중...'} center={true} />
                        </div>
                    ) : (
                        <>
                            <div className="">
                                {/* count */}
                                <div className="row row-title">
                                    {/* <div className="count_d">총 "{boardCount ? boardCount : ''}" 개의 레시피가 여러분을 기다립니다.</div> */}

                                    {/* Button */}
                                    <div className="button_d" style={{ diplay: 'flex', justifyContent: 'center', alignItem: 'center' }}>
                                        {/* disabled={true} */}
                                        <Grid container direction="rows" justifyContent="center" alignItems="center">
                                            <Button
                                                onClick={() => {
                                                    setSelected(1);
                                                }}
                                                variant="outlined"
                                                ref={btn1}
                                                style={{ width: '50%', border: 'none', backgroundColor: '#ffffff' }}
                                            >
                                                <StorefrontTwoToneIcon style={{ fontSize: '3em' }}></StorefrontTwoToneIcon>
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setSelected(2);
                                                }}
                                                variant="outlined"
                                                ref={btn2}
                                                style={{ width: '50%', border: 'none', backgroundColor: '#ffffff' }}
                                            >
                                                <AiFillCar style={{ fontSize: '3em' }}></AiFillCar>
                                            </Button>
                                        </Grid>
                                    </div>
                                </div>
                                {/* <BoardCard /> */}
                                <Grid container direction="rows" justifyContent="center" alignItems="center">
                                    {rboards?.map((item, index) => {
                                        return <BoardCard item={item} key={index} />;
                                    })}
                                </Grid>
                            </div>
                            {loading2 ? (
                                <>
                                    <Loading center={true} />
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
            {selected === 2 ? (
                <>
                    {loading ? (
                        <div>
                            <Loading text={'조회중...'} center={true} />
                        </div>
                    ) : (
                        <>
                            <div className="">
                                {/* count */}
                                <div className="row row-title">
                                    {/* <div className="count_d">총 "{boardCount ? boardCount : ''}" 개의 레시피가 여러분을 기다립니다.</div> */}

                                    {/* Button */}
                                    <div className="button_d" style={{ diplay: 'flex', justifyContent: 'center', alignItem: 'center' }}>
                                        {/* disabled={true} */}
                                        <Grid container direction="rows" justifyContent="center" alignItems="center">
                                            <Button
                                                onClick={() => {
                                                    setSelected(1);
                                                }}
                                                variant="outlined"
                                                ref={btn1}
                                                style={{ width: '50%', border: 'none', backgroundColor: '#ffffff' }}
                                            >
                                                <StorefrontTwoToneIcon style={{ fontSize: '3em' }}></StorefrontTwoToneIcon>
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setSelected(2);
                                                }}
                                                variant="outlined"
                                                ref={btn2}
                                                style={{ width: '50%', border: 'none', backgroundColor: '#ffffff' }}
                                            >
                                                <AiFillCar style={{ fontSize: '3em' }}></AiFillCar>
                                            </Button>
                                        </Grid>
                                    </div>
                                </div>
                                {/* <BoardCard /> */}

                                <Grid container direction="rows" justifyContent="center" alignItems="center">
                                    {vboards?.map((item, index) => {
                                        return <BoardCard item={item} key={index} />;
                                    })}
                                </Grid>
                            </div>
                            {loading2 ? (
                                <>
                                    <Loading center={true} />
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default BoardList;
