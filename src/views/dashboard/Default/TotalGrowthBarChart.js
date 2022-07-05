import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/actions/DashboardConstant';

// chart data
import { roomCnt, chartData } from './chart-data/total-growth-bar-chart';
import { getRoomChart } from 'components/ApiModules/ApiHandler';

import ReservationChoice from 'components/reservation/ReservationChoice';

import {
    OnedayfindRoomReservationCount,
    ThreedayfindRoomReservationCount,
    SevendayfindRoomReservationCount,
    OnedayfindRoomReservationTime,
    ThreedayfindRoomReservationTime,
    SevendayfindRoomReservationTime,
    OnedayfindRoomMeetTime,
    ThreedayfindRoomMeetTime,
    SevendayfindRoomMeetTime,
    OnedayfindVehicleReservationCount,
    ThreedayfindVehicleReservationCount,
    SevendayfindVehicleReservationCount,
    OnedayfindVehicleReservationTime,
    ThreedayfindVehicleReservationTime,
    SevendayfindVehicleReservationTime,
    OnedayfindVehicleStartTime,
    ThreedayfindVehicleStartTime,
    SevendayfindVehicleStartTime
} from 'store/actions/DashboardActions';

const status = [
    {
        value: '1',
        label: '많이 예약하는 자원의 개수'
    },
    {
        value: '2',
        label: '사람들이 자원을 예약하는 시간대'
    },
    {
        value: '3',
        label: '사람들이 자원을 이용하는 시간대'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const [value, setValue] = useState('1');
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const changeStoreSelect = useSelector((state) => state.changeReducer.selected);
    const changeStoreSelect2 = useSelector((state) => state.changeReducer.selected2);

    const oneDayRoomReservaionCount = useSelector((state) => state.dashboardReducer?.oneDayRoomReservationCount);
    const threeDayRoomReservationCount = useSelector((state) => state.dashboardReducer?.threeDayRoomReservationCount);
    const sevenDayRoomReservationCount = useSelector((state) => state.dashboardReducer?.sevenDayRoomReservationCount);

    // const oneDayRoomReservaionTime = useSelector((state) => state.dashboardReducer.oneDayRoomReservationTime);
    // const threeDayRoomReservationTime = useSelector((state) => state.dashboardReducer.threeDayRoomReservationTime);
    // const sevenDayRoomReservationTime = useSelector((state) => state.dashboardReducer.sevenDayRoomReservationTime);

    // const oneDayRoomMeetTime = useSelector((state) => state.dashboardReducer.oneDayRoomMeetTime);
    // const threeDayRoomMeetTime = useSelector((state) => state.dashboardReducer.threeDayRoomMeetTime);
    // const sevenDayRoomMeetTime = useSelector((state) => state.dashboardReducer.sevenDayRoomMeetTime);

    // const oneDayVehicleReservaionCount = useSelector((state) => state.dashboardReducer.oneDayVehicleReservationCount);
    // const threeDayVehicleReservationCount = useSelector((state) => state.dashboardReducer.threeDayVehicleReservationCount);
    // const sevenDayVehicleReservationCount = useSelector((state) => state.dashboardReducer.sevenDayVehicleReservationCount);

    // const oneDayVehicleReservaionTime = useSelector((state) => state.dashboardReducer.oneDayVehicleReservationTime);
    // const threeDayVehicleReservationTime = useSelector((state) => state.dashboardReducer.threeDayVehicleReservationTime);
    // const sevenDayVehicleReservationTime = useSelector((state) => state.dashboardReducer.sevenDayVehicleReservationTime);

    // const oneDayVehicleStartTime = useSelector((state) => state.dashboardReducer.oneDayVehicleMeetTime);
    // const threeDayVehicleStartTime = useSelector((state) => state.dashboardReducer.threeDayVehicleMeetTime);
    // const sevenDayVehicleStartTime = useSelector((state) => state.dashboardReducer.sevenDayVehicleMeetTime);

    const { navType } = customization;
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;
    const [thisChartData, setThisChartData] = useState();

    const dispatch = useDispatch();

    const [onedayList1, setOneDayList1] = useState([]);
    const [threedayList1, setThreeDayList1] = useState([]);
    const [sevendayList1, setSevenDayList1] = useState([]);

    const [onedayList2, setOneDayList2] = useState([]);
    const [threedayList2, setThreeDayList2] = useState([]);
    const [sevendayList2, setSevenDayList2] = useState([]);

    const [onedayList3, setOneDayList3] = useState([]);
    const [threedayList3, setThreeDayList3] = useState([]);
    const [sevendayList3, setSevenDayList3] = useState([]);

    const [onedayList4, setOneDayList4] = useState([]);
    const [threedayList4, setThreeDayList4] = useState([]);
    const [sevendayList4, setSevenDayList4] = useState([]);

    const [onedayList5, setOneDayList5] = useState([]);
    const [threedayList5, setThreeDayList5] = useState([]);
    const [sevendayList5, setSevenDayList5] = useState([]);

    const [onedayList6, setOneDayList6] = useState([]);
    const [threedayList6, setThreeDayList6] = useState([]);
    const [sevendayList6, setSevenDayList6] = useState([]);

    const [oneData, setoneData] = useState([]);
    const [threeData, setThreeData] = useState([]);
    const [sevenData, setSevenData] = useState([]);
    const [select, isSelect] = useState(0);
    const [select2, isSelect2] = useState(0);

    useEffect(() => {
        dispatch(OnedayfindRoomReservationCount(1));
        dispatch(ThreedayfindRoomReservationCount(3));
        dispatch(SevendayfindRoomReservationCount(7));

        dispatch(OnedayfindRoomReservationTime(1));
        dispatch(ThreedayfindRoomReservationTime(3));
        dispatch(SevendayfindRoomReservationTime(7));

        dispatch(OnedayfindRoomMeetTime(1));
        dispatch(ThreedayfindRoomMeetTime(3));
        dispatch(SevendayfindRoomMeetTime(7));

        dispatch(OnedayfindVehicleReservationCount(1));
        dispatch(ThreedayfindVehicleReservationCount(3));
        dispatch(SevendayfindVehicleReservationCount(7));

        dispatch(OnedayfindVehicleReservationTime(1));
        dispatch(ThreedayfindVehicleReservationTime(3));
        dispatch(SevendayfindVehicleReservationTime(7));

        dispatch(OnedayfindVehicleStartTime(1));
        dispatch(ThreedayfindVehicleStartTime(3));
        dispatch(SevendayfindVehicleStartTime(7));
    }, []);

    useEffect(() => {
        if (changeStoreSelect === 0 || changeStoreSelect === 1) {
            isSelect(changeStoreSelect);
        }
    }, [changeStoreSelect]);
    useEffect(() => {
        if (changeStoreSelect2 >= 1 && changeStoreSelect2 <= 3) {
            isSelect2(changeStoreSelect2);
        }
    }, [changeStoreSelect2]);

    useEffect(() => {
        if (oneDayRoomReservaionCount?.data?.value) {
            setOneDayList1(oneDayRoomReservaionCount.data.value);
        }
        if (threeDayRoomReservationCount?.data?.value) {
            setThreeDayList1(threeDayRoomReservationCount.data.value);
        }
        if (sevenDayRoomReservationCount?.data?.value) {
            setSevenDayList1(sevenDayRoomReservationCount.data.value);
        }
    }, [oneDayRoomReservaionCount, threeDayRoomReservationCount, sevenDayRoomReservationCount]);

    // const [roomArr, setroomArr] = useState([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 113, 113, 114, 115]);

    // const [vehicleArr, setvehicleArr] = useState([
    //     '벤츠 e-class',
    //     '벤츠 c-class',
    //     '벤츠 s-class',
    //     '벤츠 a-class',
    //     '벤츠 b-class',
    //     'BMW 3시리즈',
    //     'BMW 5시리즈',
    //     'BMW 7시리즈',
    //     '쌍용 토레스',
    //     '현대 아반떼 cn7'
    // ]);
    const [roomArr, setroomArr] = useState([]);
    // const [threeroomArr, setthreeroomArr] = useState([]);
    // const [sevenroomArr, setsevenroomArr] = useState([]);
    // const [onevehicleArr, setonevehicleArr] = useState([]);
    // const [threevehicleArr, setthreevehicleArr] = useState([]);
    // const [sevenvehicleArr, setsevenvehicleArr] = useState([]);

    useEffect(() => {
        let chartDataRoomCount = {
            height: chartData.height,
            type: chartData.type,
            options: chartData.options,
            series: chartData.series
        };

        // if (onedayList1.length > 0 && threedayList1.length > 0 && sevendayList1.length > 0) {
        //     setOneDayList1(
        //         onedayList1?.sort(function (a, b) {
        //             if (a.roomId > b.roomId) {
        //                 return 1;
        //             }
        //             if (a.roomId === b.roomId) {
        //                 return 0;
        //             }
        //             if (a.roomId < b.roomId) {
        //                 return -1;
        //             }
        //         })
        //     );
        //     setThreeDayList1(
        //         threedayList1?.sort(function (a, b) {
        //             if (a.roomId > b.roomId) {
        //                 return 1;
        //             }
        //             if (a.roomId === b.roomId) {
        //                 return 0;
        //             }
        //             if (a.roomId < b.roomId) {
        //                 return -1;
        //             }
        //         })
        //     );
        //     setSevenDayList1(
        //         sevendayList1?.sort(function (a, b) {
        //             if (a.roomId > b.roomId) {
        //                 return 1;
        //             }
        //             if (a.roomId === b.roomId) {
        //                 return 0;
        //             }
        //             if (a.roomId < b.roomId) {
        //                 return -1;
        //             }
        //         })
        //     );
        // }
        if (select === 0 && onedayList1 && threedayList1 && sevendayList1) {
            console.log(onedayList1);
            console.log(threedayList1);
            console.log(sevendayList1);

            // roomArr.map((item, index) => {
            //     setroomArr([...roomArr, item.roomNo]);
            // });

            yes(onedayList1, threedayList1, sevendayList1);

            if (roomArr.length > 0) {
                chartDataRoomCount.options.xaxis = { type: 'category', categories: roomArr };
            }
            chartDataRoomCount.series = [
                {
                    name: '1일',
                    data: onedayList1
                },
                {
                    name: '3일',
                    data: threedayList1
                },
                {
                    name: '7일',
                    data: sevendayList1
                }
            ];
        } else if (select === 1) {
            chartDataRoomCount.options.xaxis = { type: 'category', categories: vehicleArr };
            chartDataRoomCount.series = [
                {
                    name: '1일',
                    data: onedayList4
                },
                {
                    name: '3일',
                    data: threedayList4
                },
                {
                    name: '7일',
                    data: sevendayList4
                }
            ];
        }
        // console.log(chartData);
        setThisChartData(chartDataRoomCount);
    }, [
        onedayList1,
        threedayList1,
        sevendayList1,
        onedayList2,
        threedayList2,
        sevendayList2,
        onedayList3,
        threedayList3,
        sevendayList3,
        onedayList4,
        threedayList4,
        sevendayList4,
        onedayList5,
        threedayList5,
        sevendayList5,
        onedayList6,
        threedayList6,
        sevendayList6
    ]);

    function yes(onedayList1, threedayList1, sevendayList1) {
        let copyList = [];

        onedayList1.map((item) => {
            copyList.push(item.roomNo);
        });
        threedayList1.map((item) => {
            copyList.push(item.roomNo);
        });
        sevendayList1.map((item) => {
            copyList.push(item.roomNo);
        });

        copyList = copyList.filter((item, i) => copyList.indexOf(item) === i);

        copyList.sort(function (a, b) {
            if (a > b) {
                return 1;
            }
            if (a === b) {
                return 0;
            }
            if (a < b) {
                return -1;
            }
        });

        setroomArr(copyList);
    }
    useEffect(() => {}, [roomArr]);

    // const changeChart = (e) => {
    //     let days = e.target.value;
    //     setValue(days);
    // };

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };
        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500, value]);

    const handleSelected2 = (option) => {
        console.log(option);
        dispatch(Selected2ChangeSave(option));
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle2">예약현황 조회</Typography>
                                        </Grid>
                                        {/* <Grid item>
                                            <Typography variant="h3">
                                                {value}일간 많이 예약 확정된 {select ? <>회의실 개수</> : <>차량 개수</>} 조회
                                            </Typography>
                                            <Typography variant="h3">
                                                {value}일간 많이 예약 확정된 {select ? <>회의실 시간대</> : <>차량 시간대</>} 조회
                                            </Typography>
                                            <Typography variant="h3">
                                                {value}일간 많이 예약이 시작된 {select ? <>회의실 시간대</> : <>차량 시간대</>} 조회
                                            </Typography>
                                        </Grid> */}
                                        <Grid item>
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                            >
                                                {status.map((option) => (
                                                    <MenuItem
                                                        onClick={() => {
                                                            handleSelected2(option);
                                                        }}
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <ReservationChoice />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Chart {...thisChartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
