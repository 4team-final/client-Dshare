import CalendarFrame from '../../../../../components/Calendar/index';
import SelectTableFrame from '../../../../../components/SelectTable/index';
import TimeTableFrame from '../../../../../components/DateTimeTable/Time/index';
import DateTableFrame from 'components/DateTimeTable/Date/index';
import { ComponentFrame, ContentFrame, FullWidthFrame } from './ReservationPageStyle';
import { SocketConnection } from 'components/Websocket/WebsocketService';

export const ReservationPage = () => {
    return (
        <FullWidthFrame>
            <ComponentFrame>
                <ContentFrame>{/* <CalendarFrame /> */}</ContentFrame>
                <ContentFrame>
                    <DateTableFrame />
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
                    <SocketConnection />
                </ContentFrame>
            </ComponentFrame>
        </FullWidthFrame>
    );
};
