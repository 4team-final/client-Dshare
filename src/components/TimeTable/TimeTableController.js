import { FullWidthFrame, ComponentFrame } from './TimeTableStyle';
import { TimeTableContent } from './TimeTableService';

export const TimeTableFrame = () => {
    return (
        <FullWidthFrame>
            <ComponentFrame>
                <TimeTableContent value={0} />
            </ComponentFrame>
        </FullWidthFrame>
    );
};
