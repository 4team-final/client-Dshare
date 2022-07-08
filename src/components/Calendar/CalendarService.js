import { Badge, Calendar } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { ContentNote, ContentNoteSection, ContentFrame, ContentBadge } from './CalendarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoomDateCalendar, selectVehicleDateCalendar } from 'store/actions/CalendarAction';
import { reservationRoomTime, reservationVehicleTime } from 'store/actions/CalendarAction';

// import './CalendarService.scss';
import './CalendarService.css';

const getListData = (value) => {
    let listData;

    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event.'
                },
                {
                    type: 'success',
                    content: 'This is usual event.'
                }
            ];
            break;

        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event.'
                },
                {
                    type: 'success',
                    content: 'This is usual event.'
                },
                {
                    type: 'error',
                    content: 'This is error event.'
                }
            ];
            break;

        case 15:
            listData = [
                {
                    type: 'warning',
                    content: 'This is warning event'
                },
                {
                    type: 'success',
                    content: 'This is very long usual event。。....'
                },
                {
                    type: 'error',
                    content: 'This is error event 1.'
                },
                {
                    type: 'error',
                    content: 'This is error event 2.'
                },
                {
                    type: 'error',
                    content: 'This is error event 3.'
                },
                {
                    type: 'error',
                    content: 'This is error event 4.'
                }
            ];
            break;

        default:
    }

    return listData || [];
};

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export const CalendarService = () => {
    const timeRoomStore = useSelector((state) => state.calendarReducer.timeRoomReservation);
    const timeVehicleStore = useSelector((state) => state.calendarReducer.timeVehicleReservation);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        startTime: '2022-07-01T00:00:00',
        endTime: '2022-07-31T23:59:00'
    });
    const [roomData, setroomData] = useState(null);
    const [vehicleData, setvehicleData] = useState(null);

    useEffect(() => {
        if (data) {
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

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li className="eventsItem" key={item.content}>
                        <Badge style={{ overflow: 'none' }} status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};
