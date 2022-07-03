import { HalfWidthFrame, ComponentFrame } from './DateTimeTableStyle';
import { useEffect } from 'react';
import { TimeTableService } from './Time/TimeTableService';
import { DateTableService } from './Date/DateTableService';

export const TimeTableFrame = (v) => {
    return (
        <HalfWidthFrame height={100}>
            <ComponentFrame height={80}>
                <TimeTableService props={0} />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};

export const DateTableFrame = (v) => {
    return (
        <HalfWidthFrame height={100}>
            <ComponentFrame height={80}>
                <DateTableService props={0} />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
