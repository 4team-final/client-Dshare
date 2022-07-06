import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from 'moment';
import {
    HalfWidthFrame,
    ComponentFrame,
    CalendarFrame,
    CardFrame,
    ItemFrame,
    ListFrame,
    ContentFrame,
    CustomButton
} from './DateTableStyle';
import { useDispatch } from 'react-redux';
import { selectByUId } from 'store/actions/WebsocketAction';
import { SubContentFrame } from 'components/SelectTableProduct/Table/SelectTableStyle';
import SelectProductFrame from 'components/SelectTableProduct/Product';

const DateTableCalendar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(new Date());
    const [dateTime, setDateTime] = useState();
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setDisable(false);
    }, []);
    useEffect(() => {
        setDateTime(moment(value).format('YYYYMMDD'));
    }, [value]);
    return (
        <CalendarFrame>
            <ContentFrame>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="day"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <SubContentFrame>
                    <CustomButton
                        onClick={() => {
                            setDisable(true);
                            dispatch(selectByUId(dateTime));
                        }}
                        disabled={disable}
                    >
                        확인
                    </CustomButton>
                    <CustomButton
                        onClick={() => {
                            setDisable(false);
                        }}
                    >
                        재입력
                    </CustomButton>
                </SubContentFrame>
            </ContentFrame>
        </CalendarFrame>
    );
};

const DateTable = () => {
    return (
        <ContentFrame>
            <SelectProductFrame />
            <DateTableCalendar />
        </ContentFrame>
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
        <HalfWidthFrame height={400}>
            <ComponentFrame height={400}>
                <DateTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
