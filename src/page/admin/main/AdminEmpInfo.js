import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getUser } from 'components/ApiModules/ApiHandler';
import LinearProgress from '@mui/material/LinearProgress';
import { Avatar, Button } from 'antd';
import EmpFilter from './RoomFilter';

import EmpCustomization from 'layout/Customization/EmpCustomization';

export default function BasicExampleDataGrid() {
    const [empData, setEmpData] = useState([]);
    const dataColumns = [
        { field: 'empNo', headerName: '사원번호', width: 130, hide: false, sortable: true },
        {
            field: 'profileImg',
            headerName: '사진',
            renderCell: (params) => <Avatar alt="" src={`${params.value}`} />,
            hide: false,
            sortable: false
        },
        { field: 'name', headerName: '이름', hide: false, sortable: true },
        { field: 'position', headerName: '직급', hide: false, sortable: true },
        { field: 'dept', headerName: '부서', width: 150, hide: false, sortable: true },
        { field: 'team', headerName: '팀', hide: false, sortable: true },
        { field: 'email', headerName: '이메일', width: 200, hide: false, sortable: true },
        { field: 'tel', headerName: '전화번호', width: 200, hide: false, sortable: true },
        { field: 'birthday', headerName: '생일', width: 200, hide: false, sortable: true },
        {
            field: 'id',
            headerName: '조회 및 수정',
            renderCell: (params) => <EmpCustomization tmp={tmp} empId={`${params.value}`} />,
            hide: false,
            sortable: false
        }
    ];

    const tmp = useCallback(async () => {
        let tmpEmp = await getUser();
        console.log(tmpEmp);
        setEmpData(tmpEmp);
    });

    useEffect(() => {
        tmp();
        console.log(empData);
    }, []);

    console.log(empData);
    return (
        <>
            <div style={{ height: '80vh', width: '100%' }}>
                <DataGrid columns={dataColumns} rows={empData} components={{ Toolbar: GridToolbar }} />
            </div>
        </>
    );
}
