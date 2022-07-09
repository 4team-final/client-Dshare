import { height } from '@mui/system';
import { CalendarService } from './CalendarService';
import { FullWidthFrame, ComponentFrame, TitleFrame } from './CalendarStyles';
import ReservationChoice from 'components/reservation/ReservationChoice';

export const CalendarFrame = () => {
    return (
        <>
            <div style={{ display: 'flex', fontSize: '2em', justifyContent: 'center', alignItems: 'center' }}>월별 현황</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                개수 -
                <div
                    style={{
                        backgroundColor: 'yellow',
                        borderRadius: '50px',
                        border: '1px solid yellow',
                        width: '1em',
                        height: '1em',
                        marginLeft: '1em',
                        marginRight: '3px'
                    }}
                ></div>
                1~3 <br />
                <div
                    style={{
                        backgroundColor: '#60ff00',
                        borderRadius: '50px',
                        border: '1px solid #60ff00',
                        width: '1em',
                        height: '1em',
                        marginLeft: '1em',
                        marginRight: '3px'
                    }}
                ></div>
                4~9
                <br />
                <div
                    style={{
                        backgroundColor: 'red',
                        borderRadius: '50px',
                        border: '1px solid red',
                        width: '1em',
                        height: '1em',
                        marginLeft: '1em',
                        marginRight: '3px'
                    }}
                ></div>
                10~
                <br />
                <div
                    style={{
                        marginLeft: '3em'
                    }}
                >
                    <ReservationChoice />
                </div>
            </div>

            <CalendarService />
        </>
    );
};
