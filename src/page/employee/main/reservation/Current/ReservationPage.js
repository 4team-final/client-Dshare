import SelectTableFrame from '../../../../../components/SelectTableProduct/Table/index';
import TimeTableFrame from '../../../../../components/DateTimeTable/Time/index';
import DateTableFrame from 'components/DateTimeTable/Date/index';
import { ComponentFrame, ContentFrame, FullWidthFrame } from './ReservationPageStyle';
import WebsocketController from 'components/Websocket/index';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

export const ReservationPage = () => {
    const [msg, setMsg] = useState(null);
    const socketMsgStore = useSelector((state) => state.websocketReducer.socketmessage);
    useEffect(() => {
        if (socketMsgStore && socketMsgStore.data != null) {
            setMsg(socketMsgStore.data);
        }
    }, [socketMsgStore]);
    return (
        <FullWidthFrame>
            <ComponentFrame>
                <ContentFrame>
                    <DateTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <SelectTableFrame />
                </ContentFrame>
            </ComponentFrame>
            <ComponentFrame>
                {msg !== null ? <Alert severity="info">{socketMsgStore.data}</Alert> : <></>}
                <ContentFrame>
                    <TimeTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <WebsocketController />
                </ContentFrame>
            </ComponentFrame>
        </FullWidthFrame>
    );
};
