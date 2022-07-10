import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { RoomBookmarkTop, VehicleBookmarkTop, recentRoomRervation, recentVehicleRervation } from 'store/actions/DashboardActions';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { BsFillSkipEndFill } from 'react-icons/bs';
import { BsAlignEnd } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading, text }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const bookmarkRoomTopStore = useSelector((state) => state.dashboardReducer.bookmarkRoomTop);
    const bookmarkVehicleTopStore = useSelector((state) => state.dashboardReducer.bookmarkVehicleTop);

    const [message, setMessage] = useState(text);
    const [timeValue, setTimeValue] = useState(false);

    const [roomBookmarkData, setRoomBookmarkData] = useState([]);
    const [vehicleBookmarkData, setVehicleBookmarkData] = useState([]);

    const [selectData, setselectData] = useState({});
    const [rank, setRank] = useState(1);

    // const [roomBookmarkimgs, setroomBookmarkImgs] = useState([]);
    // const [vehicleBookmarkimgs, setvehicleBookmarkImgs] = useState([]);
    const [selectImg, setSelectImg] = useState('');

    useEffect(() => {
        dispatch(RoomBookmarkTop(3));
        dispatch(VehicleBookmarkTop());
    }, []);

    useEffect(() => {
        if (bookmarkRoomTopStore?.data?.value) {
            setRoomBookmarkData(bookmarkRoomTopStore?.data?.value);
        }
    }, [bookmarkRoomTopStore]);
    useEffect(() => {
        if (bookmarkVehicleTopStore?.data?.value) {
            setVehicleBookmarkData(bookmarkVehicleTopStore?.data?.value);
        }
    }, [bookmarkVehicleTopStore]);

    console.log(roomBookmarkData);
    console.log(vehicleBookmarkData);
    useEffect(() => {
        if (vehicleBookmarkData?.length > 0) {
            setRank(1);
            setselectData(vehicleBookmarkData[0]);
            setSelectImg(vehicleBookmarkData[0]?.imgList[0]);
        }
    }, [vehicleBookmarkData]);

    const handleChangeTime = (event, newValue) => {
        setTimeValue(newValue);
    };
    useEffect(() => {
        if (timeValue) {
            setselectData(roomBookmarkData[rank - 1]);
            setSelectImg(roomBookmarkData[rank - 1]?.roomImgResDTOList[0]?.imgPath);
        } else {
            setselectData(vehicleBookmarkData[rank - 1]);
            setSelectImg(vehicleBookmarkData[rank - 1]?.imgList[0]);
        }
    }, [timeValue]);

    const handleClick = (item, i) => {
        if (timeValue) {
            setRank(i + 1);
            setselectData(item);
            setSelectImg(item?.roomImgResDTOList[0]?.imgPath);
        } else {
            setRank(i + 1);
            setselectData(item);
            setSelectImg(item?.imgList[0]);
        }
    };
    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <>
                    {selectImg != '' && (
                        <CardWrapper
                            border={false}
                            content={false}
                            sx={{
                                height: '250px',
                                backgroundImage: `url(${selectImg})`,
                                backgroundSize: '100%',
                                opacity: '1'
                            }}
                        >
                            <Box sx={{ p: 2.25 }}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container justifyContent="space-between">
                                            {/* <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...theme.typography.commonAvatar,
                                                        ...theme.typography.largeAvatar,
                                                        backgroundColor: theme.palette.primary[800],
                                                        color: '#fff',
                                                        mt: 1
                                                    }}
                                                >
                                                    {!timeValue ? (
                                                        <DirectionsCarFilledOutlinedIcon fontSize="inherit" />
                                                    ) : (
                                                        <StorefrontTwoToneIcon fontSize="inherit" />
                                                    )}
                                                </Avatar>
                                            </Grid> */}
                                            <Grid item>
                                                <Button
                                                    disableElevation
                                                    variant={timeValue ? 'contained' : 'text'}
                                                    size="small"
                                                    sx={{ color: 'inherit', border: '1px solid #d3d3d3' }}
                                                    onClick={(e) => handleChangeTime(e, true)}
                                                >
                                                    회의실
                                                </Button>
                                                <Button
                                                    disableElevation
                                                    variant={!timeValue ? 'contained' : 'text'}
                                                    size="small"
                                                    sx={{ color: 'inherit', border: '1px solid #d3d3d3' }}
                                                    onClick={(e) => handleChangeTime(e, false)}
                                                >
                                                    차량
                                                </Button>
                                            </Grid>

                                            <>
                                                {timeValue ? (
                                                    <Grid item>
                                                        <Stack direction="row" spacing={1}>
                                                            {roomBookmarkData?.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <Chip
                                                                            key={roomBookmarkData.roomId}
                                                                            label={i + 1 + '위'}
                                                                            variant="outlined"
                                                                            sx={{
                                                                                color: '#ffffff',
                                                                                textShadow: '2px 2px 2px gray'
                                                                            }}
                                                                            onClick={() => handleClick(item, i)}
                                                                        />
                                                                    </>
                                                                );
                                                            })}
                                                        </Stack>
                                                    </Grid>
                                                ) : (
                                                    <Grid item>
                                                        <Stack direction="row" spacing={1}>
                                                            {vehicleBookmarkData?.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <Chip
                                                                            key={vehicleBookmarkData.id}
                                                                            label={i + 1 + '위'}
                                                                            variant="outlined"
                                                                            sx={{ color: '#ffffff', textShadow: '2px 2px 2px gray' }}
                                                                            onClick={() => handleClick(item, i)}
                                                                        />
                                                                    </>
                                                                );
                                                            })}
                                                        </Stack>
                                                    </Grid>
                                                )}
                                            </>
                                        </Grid>
                                    </Grid>
                                    <Grid item sx={{ mb: 0.75 }}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        {timeValue ? (
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '2rem',
                                                                    fontWeight: 500,
                                                                    mr: 1,
                                                                    mt: 1.75,
                                                                    mb: 0.75,
                                                                    textShadow: '2px 2px 2px gray'
                                                                }}
                                                            >
                                                                {rank}위: {selectData?.categoryName}
                                                            </Typography>
                                                        ) : (
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '2rem',
                                                                    fontWeight: 500,
                                                                    mr: 1,
                                                                    mt: 1.75,
                                                                    mb: 0.75,
                                                                    textShadow: '2px 2px 2px gray'
                                                                }}
                                                            >
                                                                {rank}위: {selectData?.name}
                                                            </Typography>
                                                        )}
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        {timeValue ? (
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '0.8rem',
                                                                    fontWeight: 200,
                                                                    mr: 1,
                                                                    mt: 1.75,
                                                                    mb: 0.75,
                                                                    textShadow: '2px 2px 2px gray'
                                                                }}
                                                            >
                                                                <br />
                                                                <BsFillHouseDoorFill size={'2em'} />
                                                                {selectData?.roomNo}호 <IoIosPeople size={'2em'} />
                                                                {selectData?.capacity}인실
                                                            </Typography>
                                                        ) : (
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '0.8rem',
                                                                    fontWeight: 200,
                                                                    mr: 1,
                                                                    mt: 1.75,
                                                                    mb: 0.75,
                                                                    textShadow: '2px 2px 2px gray'
                                                                }}
                                                            >
                                                                차량번호 : {selectData?.number}
                                                                <br />
                                                                <AiFillCar size={'2em'} />
                                                                모델{selectData?.model} {' / '}
                                                                <IoIosPeople size={'2em'} />
                                                                {selectData?.capacity}인승
                                                            </Typography>
                                                        )}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: '2rem',
                                                                fontWeight: 500,
                                                                color: theme.palette.primary[200],
                                                                textShadow: '2px 2px 2px gray'
                                                            }}
                                                        >
                                                            {message}
                                                            {timeValue ? <>회의실</> : <>차량</>}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardWrapper>
                    )}
                </>
            )}
        </>
    );
};

TotalOrderLineChartCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
