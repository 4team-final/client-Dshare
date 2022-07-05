import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment';
import { HalfWidthFrame, ComponentFrame, CalendarFrame, CardFrame, ItemFrame, ListFrame } from './DateTableStyle';
import { useDispatch } from 'react-redux';
import { selectByUId } from 'store/actions/WebsocketAction';

const DateTableCalendar = (v) => {
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
                    dispatch(selectByUId(dateTime));
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

const DateTable = (v) => {
    return (
        <div>
            <DateTableCalendar props={v} />
        </div>
    );
};

const DateTableService = (v) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    return <>{loading ? <></> : <DateTable props={v} />}</>;
};

export const DateTableFrame = (v) => {
    return (
        <HalfWidthFrame height={100}>
            <ComponentFrame height={80}>
                <DateTableService props={0} />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
