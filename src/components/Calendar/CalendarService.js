import { Badge, Calendar } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { ContentNote, ContentNoteSection, ContentFrame, ContentBadge } from './CalendarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoomDateCalendar, selectVehicleDateCalendar } from 'store/actions/CalendarAction';

const ManageByData = (value) => {
    const calendarRoom = useSelector((state) => state.calendarReducer.calendarRoom);
    const calendarVehicle = useSelector((state) => state.calendarReducer.calendarVehicle);
    const dispatch = useDispatch();
    const [list, setList] = useState([]);

    useEffect(() => {
        selectList();
    }, [calendarRoom, calendarVehicle]);

    const selectList = (value) => {
        if (value === 0) {
            dispatch(selectRoomDateCalendar());
            setList(calendarRoom);
        } else {
            dispatch(selectVehicleDateCalendar());
            setList(calendarVehicle);
        }
    };
    console.log(list);
    return list;
};

const GetListData = (value) => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        setListData();
    }, [listData]);
    return listData || [];
};

const GetMonthData = (value) => {};

export const CalendarContent = () => {
    const monthCellRender = (value) => {
        const num = GetMonthData(value);
        return num ? (
            <ContentNote>
                <ContentNoteSection>{num}</ContentNoteSection>
            </ContentNote>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = GetListData(value);
        return (
            <ContentFrame>
                {listData.map((item) => (
                    <li key={item.content}>
                        <ContentBadge>
                            <Badge sty status={item.type} text={item.content} />
                        </ContentBadge>
                    </li>
                ))}
            </ContentFrame>
        );
    };

    return <Calendar fullscreen dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};
