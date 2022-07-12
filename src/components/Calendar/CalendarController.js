import { height } from '@mui/system';
import { CalendarService } from './CalendarService';
import { FullWidthFrame, ComponentFrame, TitleFrame } from './CalendarStyles';
import ReservationChoice from 'components/reservation/ReservationChoice';
import { Grid } from '@mui/material';

export const CalendarFrame = () => {
    return (
        <>
            <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Grid
                            style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start' }}
                            container
                            direction="column"
                            spacing={1}
                        >
                            <Grid item rowSpacing={2}>
                                <Grid item style={{ marginBottom: '10%', display: 'flex' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                                        <span>원할</span>
                                        <br />
                                        <div
                                            style={{
                                                backgroundColor: '#fc9a33',
                                                borderRadius: '50px',
                                                border: '1px solid #fc9a33',
                                                width: '1em',
                                                height: '1em',
                                                marginLeft: '1em',
                                                marginRight: '3px'
                                            }}
                                        ></div>
                                        보통
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
                                        혼잡
                                    </div>
                                </Grid>

                                <Grid item></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1 style={{ display: 'flex', fontSize: '2em', justifyContent: 'center', alignItems: 'center' }}>월별 현황</h1>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                            <ReservationChoice />
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <CalendarService />
        </>
    );
};
