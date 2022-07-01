import { Badge, Calendar } from 'antd';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { ContentNote, ContentNoteSection, ContentFrame, ContentBadge } from './CalendarStyles';

const ManageByData = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList();
    }, [list]);
};

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

export const CalendarContent = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <ContentNote>
                <ContentNoteSection>{num}</ContentNoteSection>
                <span>Backlog number</span>
            </ContentNote>
        ) : null;
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
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
