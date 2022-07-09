import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getUser } from 'components/ApiModules/ApiHandler';
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
    const [emp, setEmp] = useState([]);
    useEffect(() => {
        const tmp = async () => {
            return await getUser();
        };
        setEmp(tmp());
    }, []);
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100
    });

    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
        </div>
    );
}
