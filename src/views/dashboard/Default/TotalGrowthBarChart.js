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

import {
    OnedayfindRoomReservationCount,
    ThreedayfindRoomReservationCount,
    SevendayfindRoomReservationCount
} from 'store/actions/DashboardActions';

const status = [
    {
        value: '1',
        label: '회의실'
    },
    {
        value: '2',
        label: '차량'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const [value, setValue] = useState('1');
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const changeStoreSelect = useSelector((state) => state.changeReducer.selected);

    const oneDayRoomReservaionCount = useSelector((state) => state.dashboardReducer.oneDayRoomReservationCount);
    const threeDayRoomReservationCount = useSelector((state) => state.dashboardReducer.threeDayRoomReservationCount);
    const sevenDayRoomReservationCount = useSelector((state) => state.dashboardReducer.sevenDayRoomReservationCount);

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

    const [onedayList, setOneDayList] = useState([]);
    const [threedayList, setThreeDayList] = useState([]);
    const [sevendayList, setSevenDayList] = useState([]);
    const [oneData, setoneData] = useState([]);
    const [threeData, setThreeData] = useState([]);
    const [sevenData, setSevenData] = useState([]);
    const [select, isSelect] = useState(0);

    useEffect(() => {
        if (changeStoreSelect) {
            isSelect(changeStoreSelect);
        }
    }, [changeStoreSelect]);

    useEffect(() => {
        dispatch(OnedayfindRoomReservationCount(1));
        dispatch(ThreedayfindRoomReservationCount(3));
        dispatch(SevendayfindRoomReservationCount(7));
    }, []);

    useEffect(() => {
        if (oneDayRoomReservaionCount.data) {
            setOneDayList(oneDayRoomReservaionCount.data);
        }
        if (threeDayRoomReservationCount.data) {
            setThreeDayList(threeDayRoomReservationCount.data.value);
        }
        if (sevenDayRoomReservationCount.data) {
            setSevenDayList(sevenDayRoomReservationCount.data.value);
        }
    }, [oneDayRoomReservaionCount, threeDayRoomReservationCount, sevenDayRoomReservationCount]);

    const [roomArr, setroomArr] = useState([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 113, 113, 114, 115]);

    const [vehicleArr, setvehicleArr] = useState([
        '벤츠 e-class',
        '벤츠 c-class',
        '벤츠 s-class',
        '벤츠 a-class',
        '벤츠 b-class',
        'BMW 3시리즈',
        'BMW 5시리즈',
        'BMW 7시리즈',
        '쌍용 토레스',
        '현대 아반떼 cn7'
    ]);

    const [roomdataArr, setroomdataArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [vehicledataArr, setvehicledataArr] = useState(['', '', '', '', '', '', '', '', '', '']);

    useEffect(() => {
        async function getRoom() {
            // let data = await getRoomChart(value);
        }
        getRoom();
        let chartDataRoomCount = {
            height: chartData.height,
            type: chartData.type,
            options: chartData.options,
            series: chartData.series
        };

        setOneDayList(
            onedayList.sort(function (a, b) {
                if (a.roomId > b.roomId) {
                    return 1;
                }
                if (a.roomId === b.roomId) {
                    return 0;
                }
                if (a.roomId < b.roomId) {
                    return -1;
                }
            })
        );

        loop: for (let i = 0; i < roomdataArr.length; i++) {
            for (let j = 0; j < onedayList.length; j++) {
                if (i + 1 === onedayList[j].roomId) {
                    setoneData([...oneData, onedayList[j].count]);
                    continue loop;
                }
            }
            setoneData(oneData.concat(1));
        }

        setThreeDayList(
            threedayList.sort(function (a, b) {
                if (a.roomId > b.roomId) {
                    return 1;
                }
                if (a.roomId === b.roomId) {
                    return 0;
                }
                if (a.roomId < b.roomId) {
                    return -1;
                }
            })
        );
        loop: for (let i = 0; i < roomdataArr.length; i++) {
            for (let j = 0; j < threedayList.length; j++) {
                if (i + 1 === threedayList[j].roomId) {
                    setThreeData([...threeData, threedayList[j].count]);
                    continue loop;
                }
            }
            setThreeData(threeData.concat(1));
        }
        setSevenDayList(
            sevendayList.sort(function (a, b) {
                if (a.roomId > b.roomId) {
                    return 1;
                }
                if (a.roomId === b.roomId) {
                    return 0;
                }
                if (a.roomId < b.roomId) {
                    return -1;
                }
            })
        );
        loop: for (let i = 0; i < roomdataArr.length; i++) {
            for (let j = 0; j < sevendayList.length; j++) {
                if (i + 1 === sevendayList[j].roomId) {
                    setSevenData([...sevenData, sevendayList[j].count]);
                    continue loop;
                }
            }
            setSevenData(sevenData.concat(1));
        }

        if (select === 0) {
            console.log(oneData);
            console.log(threeData);
            console.log(sevenData);

            chartDataRoomCount.options.xaxis = { type: 'category', categories: roomArr };
            chartDataRoomCount.series = [
                {
                    name: '1일',
                    data: oneData
                },
                {
                    name: '3일',
                    data: threeData
                },
                {
                    name: '7일',
                    data: sevenData
                }
            ];
        } else if (select === 1) {
            chartDataRoomCount.options.xaxis = { type: 'category', categories: vehicleArr };
        }
        // console.log(chartData);
        setThisChartData(chartDataRoomCount);
    }, [onedayList, threedayList, sevendayList]);

    const changeChart = (e) => {
        let days = e.target.value;
        setValue(days);
    };

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

    const [message, setMessage] = useState('');

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
                                        <Grid item>
                                            <Typography variant="h3">
                                                {value}일간 많이 예약 확정된 {select ? <>회의실 개수</> : <>차량 개수</>} 조회
                                            </Typography>
                                            <Typography variant="h3">
                                                {value}일간 많이 예약 확정된 {select ? <>회의실 시간대</> : <>차량 시간대</>} 조회
                                            </Typography>
                                            <Typography variant="h3">
                                                {value}일간 많이 예약이 시작된 {select ? <>회의실 시간대</> : <>차량 시간대</>} 조회
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
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
