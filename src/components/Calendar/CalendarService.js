import { Badge, Calendar } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { ContentNote, ContentNoteSection, ContentFrame, ContentBadge } from './CalendarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoomDateCalendar, selectVehicleDateCalendar } from 'store/actions/CalendarAction';

const GetListData = (value) => {
    let listData;

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
                    <li key={item}>
                        <ContentBadge>
                            <Badge status={item.type} text={item.content} />
                        </ContentBadge>
                    </li>
                ))}
            </ContentFrame>
        );
    };

    return <Calendar fullscreen dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};
