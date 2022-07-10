import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

// import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { myReservationDeleteRoom, myReservationDeleteVehicle } from 'store/actions/ReservationAction';
import { RoomItemDelete, VehicleItemDelete } from 'store/actions/ChangeAction';
import './MyReservationDetail.scss';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { BsFillSkipEndFill } from 'react-icons/bs';
import { BsAlignEnd } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';

import ImageRight from 'assets/image/right.JPG';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from './SimpleSlider';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

function MyReservationDetail() {
    const [toggle, isToggle] = useState(false);

    const changeStoreRoomItem = useSelector((state) => state.changeReducer.roomItem);
    const changeStoreVehicleItem = useSelector((state) => state.changeReducer.vehicleItem);
    const changeStoreSelect = useSelector((state) => state.changeReducer.selected);
    const ground = useRef();

    const dispatch = useDispatch();

    const [roomItem, setRoomItem] = useState({});
    const [vehicleItem, setVehicleItem] = useState({});
    const [select, isSelect] = useState(0);

    useEffect(() => {
        if (changeStoreSelect === 0 || changeStoreSelect === 1) {
            isSelect(changeStoreSelect);
        }
    }, [changeStoreSelect]);
    useEffect(() => {
        if (changeStoreRoomItem) {
            setRoomItem(changeStoreRoomItem.reservationResDTO);
        }
    }, [changeStoreRoomItem]);
    useEffect(() => {
        if (changeStoreVehicleItem) {
            setVehicleItem(changeStoreVehicleItem);
        }
    }, [changeStoreVehicleItem]);

    function convertTime(time) {
        if (!time) {
            return;
        }
        let timeArr = time.split('T');
        return timeArr[0] + ' ' + timeArr[1];
    }
    const convertDate = (time) => {
        if (!time && time == null) {
            return;
        }

        let a = time?.split('T')[0]?.split('-');
        let b = time?.split('T')[1]?.split(':');

        return a[0] + '년 ' + a[1] + '월 ' + +a[2] + '일 ' + b[0] + '시 ' + b[1] + '분 ';
    };

    const diffDate = (rperiod) => {
        if (!rperiod) {
            return;
        }
        let a = rperiod?.split('T')[1];
        let b = a.split(':');
        return b[0] + '시간 ' + b[1] + '분';
    };

    const handleDrop = () => {
        isToggle(!toggle);
    };
    const handleDrop2 = () => {
        if (toggle) {
            isToggle(false);
        }
    };

    // const handleUpdate = () => {
    //     //
    //     window.confirm('수정 날짜방으로 이동하시겠습니까?');
    // };
    const handleDelete = (id) => {
        let isSure = window.confirm('정말 해당 예약을 삭제하시겠습니까?');
        if (isSure && select === 0) {
            dispatch(myReservationDeleteRoom(id));
            dispatch(RoomItemDelete(id));
            setRoomItem(null);
        }
        if (isSure && select === 1) {
            dispatch(myReservationDeleteVehicle(id));
            dispatch(VehicleItemDelete(id));
            setVehicleItem(null);
        }
    };
    return (
        <>
            {((!roomItem?.id && select === 0) || (!vehicleItem?.reservationId && select === 1)) && (
                <Card sx={{ width: '100%', height: '100%', borderRadius: '20px' }}>
                    <img style={{ width: '100%', height: '100%' }} src={ImageRight} alt="img"></img>
                </Card>
            )}
            {roomItem?.id && select === 0 && (
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onClick={() => {
                        handleDrop2();
                    }}
                >
                    <CardHeader
                        avatar={<Avatar sx={{}} aria-label="recipe" src={roomItem?.emp?.profileImg}></Avatar>}
                        action={
                            <IconButton onClick={handleDrop} aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={'예약자 : ' + roomItem?.emp?.empNo + ' ' + roomItem?.emp?.name}
                        subheader={'예약 확정 시간 : ' + convertTime(roomItem?.modifiedAt)}
                        sx={{ borderBottom: '1px solid #d3d3d3' }}
                    />
                    {toggle && (
                        <div className="which">
                            {/* <MenuItem
                                onClick={() => {
                                    handleUpdate();
                                }}
                            >
                                수정
                            </MenuItem> */}
                            <MenuItem
                                onClick={() => {
                                    handleDelete(roomItem.id);
                                }}
                            >
                                삭제
                            </MenuItem>
                        </div>
                    )}

                    <SimpleSlider data={roomItem?.room?.roomImgResDTOList} style={{ width: '95%', height: '70em' }} />

                    <CardContent>
                        <div className="content_layout">
                            <div className="half line">
                                <Typography sx={{ fontSize: '3em' }} color="text.secondary" gutterBottom>
                                    자원 정보
                                </Typography>
                                <Typography sx={{ fontSize: '5em' }} variant="h6" component="div">
                                    {roomItem?.room.categoryName}
                                </Typography>
                                <Typography sx={{ mb: 1.5, fontSize: '3em' }} color="text.secondary">
                                    {roomItem?.room.content}
                                </Typography>
                                <Typography sx={{ mb: 1.5, float: 'right', fontSize: '3em' }} color="text.secondary">
                                    비치 물품 :
                                    {roomItem?.room?.roomObjectResDTOList.map((item, i) => {
                                        return item.name !== ' ' && <>{item?.name} </>;
                                    })}
                                </Typography>
                                <Typography variant="body2" sx={{ float: 'right', fontSize: '3em' }}>
                                    <BsFillHouseDoorFill size={'2em'} />
                                    {roomItem?.room.roomNo}호 {'  '}
                                    <IoIosPeople size={'2em'} />
                                    {roomItem?.room.capacity}인실
                                </Typography>
                            </div>
                            <div className="half">
                                <Typography sx={{ fontSize: '3em' }} color="text.secondary" gutterBottom>
                                    예약 정보
                                </Typography>
                                <Typography sx={{ fontSize: '5em' }} variant="h6" component="div">
                                    {roomItem?.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5, fontSize: '3em' }} color="text.secondary">
                                    {roomItem?.reason}
                                </Typography>
                                <Typography sx={{ mb: 1.5, float: 'right' }} color="text.secondary"></Typography>
                                <Typography variant="body2" sx={{ float: 'right', fontSize: '3em' }}>
                                    <BsFillSkipEndFill size={'1em'} />
                                    시작 {convertDate(roomItem?.startedAt)} {'  '}
                                    <br />
                                    <BsAlignEnd size={'1em'} />
                                    종료 {convertDate(roomItem?.endedAt)}
                                    <br />총{diffDate(roomItem?.rperiod)}
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {vehicleItem?.reservationId && select === 1 && (
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <CardHeader
                        avatar={<Avatar sx={{}} aria-label="recipe" src={''}></Avatar>}
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon onClick={handleDrop} />
                            </IconButton>
                        }
                        title={'예약자 : ' + vehicleItem?.empNo + ' ' + vehicleItem?.ename}
                        subheader={'예약 확정 시간 : ' + convertTime(vehicleItem?.reservationModifiedAt)}
                        sx={{ borderBottom: '1px solid #d3d3d3' }}
                    />
                    {toggle && (
                        <div className="which">
                            {/* <MenuItem
                                onClick={() => {
                                    handleUpdate();
                                }}
                            >
                                수정
                            </MenuItem> */}
                            <MenuItem
                                onClick={() => {
                                    handleDelete(vehicleItem?.reservationId);
                                }}
                            >
                                삭제
                            </MenuItem>
                        </div>
                    )}
                    <SimpleSlider data={vehicleItem?.imgList} style={{ width: '95%', height: '70em' }} />

                    <CardContent>
                        <div className="content_layout">
                            <div className="half line">
                                <Typography sx={{ fontSize: '3em' }} color="text.secondary" gutterBottom>
                                    자원 정보
                                </Typography>
                                <Typography sx={{ fontSize: '5em' }} variant="h6" component="div">
                                    {vehicleItem?.vname}
                                </Typography>
                                <Typography sx={{ mb: 1.5, fontSize: '3em' }} color="text.secondary">
                                    {vehicleItem?.vnumber}
                                </Typography>

                                <Typography variant="body2" sx={{ float: 'right', fontSize: '3em' }}>
                                    <AiFillCar size={'2em'} />
                                    {vehicleItem?.model} 모델 {'  '}
                                    <IoIosPeople size={'2em'} />
                                    {vehicleItem?.capacity}인승
                                </Typography>
                            </div>
                            <div className="half">
                                <Typography sx={{ fontSize: '3em' }} color="text.secondary" gutterBottom>
                                    예약 정보
                                </Typography>
                                <Typography sx={{ fontSize: '5em' }} variant="h6" component="div">
                                    {vehicleItem?.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5, fontSize: '3em' }} color="text.secondary">
                                    {vehicleItem?.reason}
                                </Typography>
                                <Typography sx={{ mb: 1.5, float: 'right' }} color="text.secondary"></Typography>
                                <Typography variant="body2" sx={{ float: 'right', fontSize: '3em' }}>
                                    <BsFillSkipEndFill size={'1em'} />
                                    시작 {convertDate(vehicleItem?.reservationCreatedAt)} {'  '}
                                    <br />
                                    <BsAlignEnd size={'1em'} />
                                    종료 {convertDate(vehicleItem?.reservationModifiedAt)}
                                    <br />
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    );
}
export default MyReservationDetail;
