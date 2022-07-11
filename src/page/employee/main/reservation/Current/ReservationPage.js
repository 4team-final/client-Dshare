import SelectTableFrame from '../../../../../components/SelectTableProduct/Table';
import TimeTableFrame from '../../../../../components/DateTimeTable/Time';
import DateTableFrame from 'components/DateTimeTable/Date';
import BoardTableFrame from 'components/SelectTableProduct/Board';
import WebsocketController from 'components/Websocket';
import { ComponentFrame, ContentFrame, FullWidthFrame } from './ReservationPageStyle';

export const ReservationPage = () => {
    return (
        <FullWidthFrame>
            <ComponentFrame>
                <ContentFrame>
                    <TimeTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <DateTableFrame />
                </ContentFrame>
            </ComponentFrame>
            <ComponentFrame>
                <ContentFrame>
                    <WebsocketController />
                </ContentFrame>
                <ContentFrame>
                    <SelectTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <BoardTableFrame />
                </ContentFrame>
            </ComponentFrame>
        </FullWidthFrame>
    );
};
