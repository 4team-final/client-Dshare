import { Badge, Calendar } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { ContentNote, ContentNoteSection, ContentFrame, ContentBadge } from './CalendarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoomDateCalendar, selectVehicleDateCalendar } from 'store/actions/CalendarAction';
import { reservationRoomTime, reservationVehicleTime } from 'store/actions/CalendarAction';
import moment from 'moment';

import './CalendarService.css';

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export const CalendarService = () => {
    const timeRoomStore = useSelector((state) => state.calendarReducer.timeRoomReservation);
    const timeVehicleStore = useSelector((state) => state.calendarReducer.timeVehicleReservation);
    const changeStoreSelect = useSelector((state) => state.changeReducer.selected);
    const dispatch = useDispatch();

    const [data, setData] = useState({});
    const [roomData, setroomData] = useState(null);
    const [vehicleData, setvehicleData] = useState(null);
    const [select, isSelect] = useState(0);

    const [sampleDataList, setsampleDataList] = useState([]);

    useEffect(() => {
        if (changeStoreSelect === 0 || changeStoreSelect === 1) {
            isSelect(changeStoreSelect);
        }
    }, [changeStoreSelect]);

    //sort
    function sort1(a, b) {
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
    }

    useEffect(() => {
        setData({
            startTime: '2022-07-01T00:00:00',
            endTime: '2022-07-31T23:59:00'
        });
    }, []);

    useEffect(() => {
        if (data != null && data.startTime != null && data.endTime != null) {
            dispatch(reservationRoomTime(data));
            dispatch(reservationVehicleTime(data));
        }
    }, [data]);

    useEffect(() => {
        if (timeRoomStore?.data?.value) {
            setroomData(timeRoomStore?.data?.value);
        }
    }, [timeRoomStore]);
    useEffect(() => {
        if (timeVehicleStore?.data?.value) {
            setvehicleData(timeVehicleStore?.data?.value);
        }
    }, [timeVehicleStore]);

    useEffect(() => {
        if (roomData?.length > 0 && select == 0) {
            Roomfetch();
        }
    }, [roomData, select]);
    useEffect(() => {
        if (vehicleData?.length > 0 && select == 1) {
            Vehiclefetch();
        }
    }, [vehicleData, select]);

    const Roomfetch = () => {
        let result = [];
        for (let i = 1; i <= 31; i++) {
            let obj = {};
            let arr = [];

            for (let j = 0; j < roomData.length; j++) {
                let item = roomData[j];
                if (i == item?.day) {
                    obj = { type: handleCheck(item?.count), content: item?.roomNo + '호' };
                    arr.push(obj);
                }
            }
            arr.sort((a, b) => sort1(a.content, b.content));
            result.push(arr);
        }
        setsampleDataList(result);
    };
    const Vehiclefetch = () => {
        let result = [];
        for (let i = 1; i <= 31; i++) {
            let obj = {};
            let arr = [];

            for (let j = 0; j < vehicleData.length; j++) {
                let item = vehicleData[j];
                if (i == item?.day) {
                    obj = { type: handleCheck(item?.count), content: item?.name };
                    arr.push(obj);
                }
            }
            arr.sort((a, b) => sort1(a.content, b.content));
            result.push(arr);
        }
        setsampleDataList(result);
    };
    const handleCheck = (data) => {
        if (data >= 0 && data <= 3) {
            return 'success';
        } else if (data >= 4 && data <= 7) {
            return 'warning';
        } else {
            return 'error';
        }
    };

    const getListData = useCallback(
        (value) => {
            let listData;

            if (sampleDataList?.length > 0 && value.month() == 6) {
                switch (value.date()) {
                    case 1:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 2:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 3:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 4:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 5:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 6:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 7:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 8:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 9:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 10:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 11:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 12:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 13:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 14:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 15:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 16:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 17:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 18:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 19:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 20:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 21:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 22:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 23:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 24:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 25:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 26:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 27:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 28:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 29:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 30:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;
                    case 31:
                        listData = sampleDataList[value.date() - 1]?.length > 0 ? sampleDataList[value.date() - 1] : [];
                        break;

                    default:
                }
            }

            return listData || [];
        },
        [sampleDataList]
    );

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    let dateCellRender;
    if (sampleDataList?.length > 0) {
        dateCellRender = (value) => {
            const listData = getListData(value);
            return (
                <ul className="events" style={{ overflow: 'hidden' }}>
                    {listData?.map((item) => (
                        <li className="eventsItem" key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))}
                </ul>
            );
        };
    }

    return (
        <Calendar
            style={{ overflow: 'hidden' }}
            validRange={[new moment('2022-07-01 00:00:00'), new moment('2022-07-31 23:59:00')]}
            mode={'month'}
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
        />
    );
};

const GetListData = (value) => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        setListData([{ type: 'warning', message: 'hihi' }]);
    }, [value]);

    return listData;
};
