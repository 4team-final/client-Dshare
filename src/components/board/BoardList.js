//BoardList.js

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findAllByRoom, findAllByVehicle } from 'store/actions/CalendarAction';
import Button from '@mui/material/Button';
import { Card } from 'antd';
import Icon from '@mdi/react';
import BoardCard from './BoardCard';
import Grid from '@mui/material/Grid';
import './BoardList.css';
import Loading from 'components/Loading';
import 'components/Loading.css';

function BoardList() {
    const vehicleStore = useSelector((state) => state.calendarReducer.allVehicle);
    const roomStore = useSelector((state) => state.calendarReducer.allRoom);
    const dispatch = useDispatch();
    //날짜순
    const [rboards, setrBoards] = useState([]);
    const [vboards, setvBoards] = useState([]);

    // const [boardId, setBoardId] = useState(0);
    // const [boardpage, setboardPage] = useState({
    //     id: 0,
    //     createAt: ''
    // });

    // const [viewpage, setviewPage] = useState({
    //     id: 0,
    //     viewCount: 0
    // });

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [selected, setSelected] = useState(1);
    // const [boardCount, setBoardCount] = useState(0);

    const btn1 = useRef();
    const btn2 = useRef();

    // 시작
    useEffect(() => {
        async function fetchBoardList() {
            setLoading(true);
            await dispatch(findAllByRoom());
            await dispatch(findAllByVehicle());
            setLoading(false);
            // btn1.current.disabled = true;
        }
        fetchBoardList();
    }, []);

    // console.log(vehicleStore);
    // console.log(roomStore);
    console.log(vboards);
    console.log(rboards);

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

    // useEffect(() => {
    //     if (boards[boards.length - 1]) {
    //         setBoardCount(boards[0].boardCount);
    //         setboardPage({
    //             id: boards[boards.length - 1].id,
    //             createAt: boards[boards.length - 1].createAt
    //         });
    //     }
    // }, [boards]);

    // useEffect(() => {
    //     if (viewBoards[viewBoards.length - 1]) {
    //         setviewPage({
    //             id: viewBoards[viewBoards.length - 1].id,
    //             viewCount: viewBoards[viewBoards.length - 1].viewCount
    //         });
    //     }
    // }, [viewBoards]);

    // const pick = useMemo(() => {
    //     return selected;
    // }, [selected]);

    // useEffect(() => {
    //     if (boardStore?.boardListAfter?.data?.data?.result) {
    //         setBoards([...boards, ...boardStore.boardListAfter.data.data.result]);
    //     }
    // }, [boardStore?.boardListAfter?.data]);

    // //뷰 볼드
    // useEffect(() => {
    //     if (boardStore?.boardListAfterView?.data?.data?.result) {
    //         setViewBoards([...viewBoards, ...boardStore.boardListAfterView.data.data.result]);
    //     }
    // }, [boardStore?.boardListAfterView?.data]);

    // useEffect(() => {}, [selected]);

    // const handleScroll = useCallback(async () => {
    //     const { innerHeight } = window;
    //     // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)

    //     const { scrollHeight } = document.body;
    //     // 브라우저 총 내용의 크기 (스크롤을 포함한다)

    //     const { scrollTop } = document.documentElement;
    //     // 현재 스크롤바의 위치

    //     if (Math.round(scrollTop + innerHeight) > scrollHeight) {
    //         // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.
    //         setLoading2(true);
    //         if (pick === 1 && boardpage.createAt) {
    //             await dispatch(boardListAfter(boardpage));
    //         } else if (pick === 2 && viewpage.viewCount) {
    //             await dispatch(boardListAfterView(viewpage));
    //         }
    //         setLoading2(false);
    //     }
    // }, [boards, boardpage, viewBoards, viewpage, selected]);

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, true);
    //     // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll, true);
    //         // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
    //     };
    // }, [handleScroll]);

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
                                        <Button
                                            onClick={() => {
                                                setSelected(1);
                                            }}
                                            variant="outlined"
                                            ref={btn1}
                                        >
                                            회의실
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setSelected(2);
                                            }}
                                            variant="outlined"
                                            ref={btn2}
                                        >
                                            차량
                                        </Button>
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
                                        <Button
                                            onClick={() => {
                                                setSelected(1);
                                            }}
                                            variant="outlined"
                                            ref={btn1}
                                        >
                                            회의실
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setSelected(2);
                                            }}
                                            variant="outlined"
                                            ref={btn2}
                                        >
                                            차량
                                        </Button>
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
