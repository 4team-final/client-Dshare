import CalendarFrame from '../../../../components/Calendar/index';
import SelectTableFrame from '../../../../components/SelectTable/index';
import TimeTableFrame from '../../../../components/TimeTable/index';
import { ComponentFrame, ContentFrame, FullWidthFrame } from './ReservationPageStyle';

export const ReservationPage = () => {
    return (
        <FullWidthFrame>
            <ComponentFrame>
                <CalendarFrame />
            </ComponentFrame>
            <ComponentFrame>
                <ContentFrame>
                    <TimeTableFrame />
                </ContentFrame>
                <ContentFrame>
                    <SelectTableFrame />
                </ContentFrame>
            </ComponentFrame>
        </FullWidthFrame>
    );
};
