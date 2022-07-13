// Install
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// User
import { selectByUId } from 'store/actions/WebsocketAction';
import SelectProductFrame from 'components/SelectTableProduct/Product';
import { HalfWidthFrame, ComponentFrame, CalendarFrame, TitleTextFrame, ContentFrame, AllContentFrame } from './DateTableStyle';

const DateTableCalendar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(new Date());
    const [dateTime, setDateTime] = useState();
    useEffect(() => {
        setDateTime(moment(value).format('YYYYMMDD'));
    }, [value]);
    useEffect(() => {
        dispatch(selectByUId(dateTime));
    }, [dateTime]);
    return (
        <CalendarFrame>
            <ContentFrame>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="day"
                        value={value}
                        minDate={new Date()}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                </LocalizationProvider>
            </ContentFrame>
        </CalendarFrame>
    );
};

const DateTable = () => {
    return (
        <AllContentFrame>
            <SelectProductFrame />
            <DateTableCalendar />
        </AllContentFrame>
    );
};

const DateTableService = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    return <>{loading ? <></> : <DateTable />}</>;
};

export const DateTableFrame = () => {
    return (
        <HalfWidthFrame height={530}>
            <TitleTextFrame>날짜 선택</TitleTextFrame>
            <ComponentFrame height={460}>
                <DateTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
