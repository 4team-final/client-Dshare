// Install
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
// User
import SelectTableFrame from '../../../../../components/SelectTableProduct/Table';
import TimeTableFrame from '../../../../../components/DateTimeTable/Time';
import DateTableFrame from 'components/DateTimeTable/Date';
import BoardTableFrame from 'components/SelectTableProduct/Board';
import WebsocketController from 'components/Websocket';
import { ComponentFrame, ContentFrame, FullWidthFrame } from './ReservationPageStyle';

export const ReservationPage = (props) => {
    const [updateData, setUpdateData] = useState(props?.data);

    return (
        <FullWidthFrame>
            <ComponentFrame>
                <ContentFrame>
                    <DateTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <BoardTableFrame />
                </ContentFrame>
            </ComponentFrame>
            <ComponentFrame>
                <ContentFrame>
                    <TimeTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <SelectTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <WebsocketController />
                </ContentFrame>
            </ComponentFrame>
        </FullWidthFrame>
    );
};
