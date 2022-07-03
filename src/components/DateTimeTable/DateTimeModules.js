import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment';
import { CalendarFrame, CardFrame, ItemFrame, ListFrame } from './DateTimeTableStyle';
import { useDispatch } from 'react-redux';

export const TimeTableCard = (v) => {
    const [lock, setLock] = useState(false);
    const [used, setUsed] = useState('fff');
    useEffect(() => {
        setLock(v === 1 ? true : false);
    }, []);
    useEffect(() => {
        setUsed(lock ? '1296ec' : 'fff');
    }, [lock]);
    return <CardFrame props={used} />;
};

export const DateTableCalendar = (v) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(new Date());
    const [dateTime, setDateTime] = useState();
    const [type, setType] = useState(0);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setDisable(false);
    }, []);
    useEffect(() => {
        setType(v.props.props.props);
    }, [v]);
    useEffect(() => {
        setDateTime(moment(value).format('YYYYMMDD'));
    }, [value]);
    return (
        <CalendarFrame>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="대여일 선택"
                    value={value}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <button
                onClick={() => {
                    setDisable(true);
                    DateSet(type, dateTime);
                }}
                disabled={disable}
            >
                확인
            </button>
            <button
                onClick={() => {
                    setDisable(false);
                }}
            >
                재입력
            </button>
        </CalendarFrame>
    );
};

const DateSet = (type, dateTime) => {
    const data = { type: type, date: dateTime };
    return <>{console.log(data)}</>;
};
