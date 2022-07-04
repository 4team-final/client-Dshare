import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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

const status = [
    {
        value: '1',
        label: 'Today'
    },
    {
        value: '3',
        label: '3Days'
    },
    {
        value: '7',
        label: '7Days'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const [value, setValue] = useState('1');
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const { navType } = customization;
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;
    // const [chartData2, setChartData2] = useState({});
    const [tmpRoomCnt, setTmpRoomCnt] = useState({
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
        thirteen: 0,
        fourteen: 0,
        fifteen: 0
    });
    const tmpCharData = {
        ...chartData,
        series: [
            {
                name: '회의실',
                data: [
                    tmpRoomCnt.one,
                    tmpRoomCnt.two,
                    tmpRoomCnt.three,
                    tmpRoomCnt.four,
                    tmpRoomCnt.five,
                    tmpRoomCnt.six,
                    tmpRoomCnt.seven,
                    tmpRoomCnt.eight,
                    tmpRoomCnt.nine,
                    tmpRoomCnt.ten,
                    tmpRoomCnt.eleven,
                    tmpRoomCnt.twelve,
                    tmpRoomCnt.thirteen,
                    tmpRoomCnt.fourteen,
                    tmpRoomCnt.fifteen
                ]
            },
            {
                name: '차량',
                data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
            },
            {
                name: '물품',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Total',
                data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
            }
        ]
    };

    // useEffect(() => {
    //     async function InputData() {
    //         let data = await getRoomChart(value);
    //         console.log(value);
    //         console.log(data);

    //         data.map((data) =>
    //             data.roomNo == '101'
    //                 ? setTmpRoomCnt((tmpRoomCnt.one = data.count))
    //                 : data.roomNo == '102'
    //                 ? (tmpRoomCnt.two = data.count)
    //                 : data.roomNo == '103'
    //                 ? (tmpRoomCnt.three = data.count)
    //                 : data.roomNo == '104'
    //                 ? (tmpRoomCnt.four = data.count)
    //                 : data.roomNo == '105'
    //                 ? (tmpRoomCnt.five = data.count)
    //                 : data.roomNo == '106'
    //                 ? (tmpRoomCnt.six = data.count)
    //                 : data.roomNo == '107'
    //                 ? (tmpRoomCnt.seven = data.count)
    //                 : data.roomNo == '108'
    //                 ? (tmpRoomCnt.eight = data.count)
    //                 : data.roomNo == '109'
    //                 ? (tmpRoomCnt.nine = data.count)
    //                 : data.roomNo == '110'
    //                 ? (tmpRoomCnt.ten = data.count)
    //                 : data.roomNo == '111'
    //                 ? (tmpRoomCnt.eleven = data.count)
    //                 : data.roomNo == '112'
    //                 ? (tmpRoomCnt.twelve = data.count)
    //                 : data.roomNo == '113'
    //                 ? (tmpRoomCnt.thirteen = data.count)
    //                 : data.roomNo == '114'
    //                 ? (tmpRoomCnt.fourteen = data.count)
    //                 : data.roomNo == '115'
    //                 ? (tmpRoomCnt.fifteen = data.count)
    //                 : ''
    //         );
    //         console.log(tmpRoomCnt);
    //     }

    //     setTmpRoomCnt(tmpRoomCnt);
    //     setTmpChartData(tmpChardata);
    //     InputData();
    // }, [value]);

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
    }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

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
                                            <Typography variant="subtitle2">Total Growth</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3">$2,324.00</Typography>
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
                            {/* <Chart {...chartData} /> */}
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
