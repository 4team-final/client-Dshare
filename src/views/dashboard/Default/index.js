import { useCallback, useEffect, useRef, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalOrderLineChartCardTwo from './TotalOrderLineChartCardTwo';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/actions/DashboardConstant';
import { getVBookmark, getUserProfile, getRBookmark } from 'components/ApiModules/ApiHandler';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [vehicleBookmark, setVehicleBookmark] = useState([]);
    const [roomBookmark, setRoomBookmark] = useState([]);

    const [graphInt, setgraphInt] = useState(12);
    const [calendarInt, setcalendarInt] = useState(0);
    const [graphIntZ, setgraphIntZ] = useState(2);
    const [calendarZ, setcalendarZ] = useState(3);

    useEffect(() => {
        async function VBookmark() {
            let data = await getVBookmark();
            setVehicleBookmark(data);
            let Rdata = await getRBookmark();
            setRoomBookmark(Rdata);
        }
        VBookmark();
        setLoading(false);
    }, []);
    const handleClick = () => {
        scrollToBottom();
    };
    const handleClick2 = () => {
        scrollToBottom2();
    };
    const scrollToBottom = useCallback(() => {
        calendarH.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, []);
    const scrollToBottom2 = useCallback(() => {
        dashboardX.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, []);
    const calendarH = useRef();
    const dashboardX = useRef();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4.5} md={6} sm={6} xs={12}>
                        {/* <EarningCard isLoading={isLoading} /> */}
                        <TotalOrderLineChartCard isLoading={isLoading} text={'가장 즐겨찾는 '} />
                    </Grid>
                    <Grid item lg={4.5} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCardTwo isLoading={isLoading} text={'최근에 예약된 '} />
                    </Grid>
                    <Grid item lg={3} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} vehicleBookmark={vehicleBookmark} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} roomBookmark={roomBookmark} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: '5%' }}>
                                    <Button
                                        variant="outlined"
                                        style={{
                                            height: '5em',
                                            width: '50%',
                                            borderRadius: '20px',
                                            border: '1px solid #d3d3d3',
                                            backgroundColor: '#fafafa',
                                            justifySelf: 'center',
                                            alignItems: 'center',
                                            marginRight: '5%'
                                        }}
                                        onClick={handleClick}
                                    >
                                        <BsFillCalendarDateFill size={'2em'} style={{ marginRight: '1em' }} />{' '}
                                        <span style={{ fontWeight: 'bold' }}>월별 현황</span>
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        style={{
                                            height: '5em',
                                            width: '50%',
                                            borderRadius: '20px',
                                            border: '1px solid #d3d3d3',
                                            backgroundColor: '#fafafa',
                                            justifySelf: 'center',
                                            alignItems: 'center'
                                        }}
                                        onClick={scrollToBottom2}
                                    >
                                        <AiOutlineBarChart size={'2em'} style={{ marginRight: '1em' }} />
                                        <span style={{ fontWeight: 'bold' }}>통계 현황</span>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={graphInt}>
                        <div ref={dashboardX}>
                            <TotalGrowthBarChart isLoading={isLoading} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={calendarInt}>
                        <div ref={calendarH}>
                            <PopularCard isLoading={isLoading} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
