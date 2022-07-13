import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useCallback, useState, useRef } from 'react';
import { getAllVehicleResPage, getAllRoomResPage, delRoomRes, delVehicleRes } from 'components/ApiModules/ApiHandler';
import LinearProgress from '@mui/material/LinearProgress';
import { Avatar, Button } from 'antd';
import VehicleFilter from './VehicleFilter';
import Pagination from './Pagination';
import EmpCustomization from 'layout/Customization/EmpCustomization';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicExampleDataGrid() {
    const [vehicleResData, setVehicleResData] = useState([]);
    const [totalPage, setTotalPage] = useState('');

    const dataColumns = [
        { field: 'vname', headerName: '차량 이름', width: 170, hide: false, sortable: true },
        { field: 'title', headerName: '예약 제목', width: 250, hide: false, sortable: true },
        { field: 'vnumber', headerName: '차량 번호', width: 130, hide: false, sortable: true },
        { field: 'color', headerName: '차량 색', hide: false, sortable: true },
        { field: 'capacity', headerName: '정원', hide: false, sortable: true },
        { field: 'model', headerName: '차량 종류', width: 150, hide: false, sortable: true },
        { field: 'reservationModifiedAt', headerName: '최종수정일', width: 200, hide: false, sortable: true },
        { field: 'reservationCreatedAt', headerName: '예약일', width: 200, hide: false, sortable: true },
        { field: 'startedAt', headerName: '시작시간', width: 200, hide: false, sortable: true },
        { field: 'endedAt', headerName: '종료시간', width: 200, hide: false, sortable: true },
        { field: 'ename', headerName: '예약자', width: 130, hide: false, sortable: true },
        {
            field: 'id',
            headerName: '예약 번호',
            renderCell: (params) => <DeleteIcon onClick={() => del(`${params.value}`)} />,
            hide: false,
            sortable: false
        }
    ];

    const del = async (resId) => {
        console.log(resId);
        let result = confirm('삭제하시겠습니까?');
        if (result) {
            let del = await delVehicleRes(resId);
            res(1, null, null, null, null, null, null, null);
            console.log(del);
            return alert('예약삭제에 성공했습니다');
        }
        //delete 함수
    };

    const res = useCallback(async (id, vehicle, capacity, position, teamId, empNo, startedAt, endedAt) => {
        setVehicleResData([]);
        let vehicleRes = await getAllVehicleResPage(id, vehicle, capacity, position, teamId, empNo, startedAt, endedAt); //nowPage
        if (vehicleRes) {
            if (vehicleRes.length != 0) {
                // console.log('총갯수 확인 : ', vehicleRes[0]);
                // console.log('총 갯수 : ', Math.floor(vehicleRes[0].total / 10 + 1));
                setTotalPage(Math.floor(vehicleRes[0].total / 10 + 1));
                let test = vehicleRes.map((data) => {
                    return {
                        vname: data.vname,
                        vnumber: data.vnumber,
                        title: data.title,
                        color: data.color,
                        model: data.model,
                        capacity: data.capacity,
                        reservationModifiedAt: data.modifiedAt.split('T')[0] + ' ' + data.modifiedAt.split('T')[1],
                        reservationCreatedAt: data.createdAt.split('T')[0] + ' ' + data.modifiedAt.split('T')[1],
                        startedAt: data.startedAt.split('T')[0] + ' ' + data.modifiedAt.split('T')[1],
                        endedAt: data.endedAt.split('T')[0] + ' ' + data.modifiedAt.split('T')[1],
                        ename: data.ename,
                        id: data.id
                    };
                });
                setVehicleResData([...test]);
                console.log(test);
            }
        } else {
            setTotalPage(0);
        }
    });

    useEffect(() => {
        res(1, null, null, null, null, null, null, null);
    }, []);
    //10개씩 보여줄 심산

    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <VehicleFilter totalPage={totalPage} res={res} del={del} />
            <DataGrid columns={dataColumns} rows={vehicleResData} components={{ Toolbar: GridToolbar }} />
        </div>
    );
}
