import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Button, Modal, Grid, Link } from '@mui/material';
import { getVBookmark, getUserProfile, getRBookmark, delRBookmark, delVBookmark } from 'components/ApiModules/ApiHandler';
import MuiTypography from '@mui/material/Typography';
import StarsIcon from '@mui/icons-material/Stars';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
// project imports
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import { useEffect, useState } from 'react';
// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/actions/DashboardConstant';
import SimpleSlider from 'components/reservation/SimpleSlider';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BurstModeOutlinedIcon from '@mui/icons-material/BurstModeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

const style = {
    position: 'absolute',
    overflow: 'scroll',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const TotalIncomeDarkCard = (props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [VBookmark, setVBookmark] = useState([]);
    //처음 랜더링
    useEffect(() => {
        const setV = async () => {
            let Rdata = await getVBookmark();
            setVBookmark(Rdata);
        };
        setV();
    }, []);
    //삭제 하는거
    const delbm = async (id) => {
        console.log(id);
        let check = confirm('삭제하시겠습니까?');
        if (check) {
            let Rdata = await delVBookmark(id);
            setVBookmark(Rdata);
            // console.log(Rdata);
        }
    };

    return (
        <>
            {props.isLoading ? (
                <TotalIncomeCard />
            ) : (
                <>
                    <CardWrapper border={false} content={false}>
                        <Box sx={{ p: 2 }}>
                            <List sx={{ py: 0 }}>
                                <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.primary[800],
                                                color: '#fff'
                                            }}
                                        >
                                            <DirectionsCarFilledOutlinedIcon fontSize="inherit" onClick={handleOpen} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{
                                            py: 0,
                                            mt: 0.45,
                                            mb: 0.45
                                        }}
                                        primary={
                                            <Typography variant="h4" sx={{ color: '#fff' }}>
                                                차량
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                                                내가 즐겨찾기한 차량 조회
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </CardWrapper>

                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <MainCard
                            sx={style}
                            title="차량 즐겨찾기 조회"
                            style={{ width: '50%', height: '80%', textAlign: 'center', marginBottom: '30px' }}
                        >
                            {/* <Grid container spacing={gridSpacing} sx={{ p: 3 }}> */}

                            {VBookmark.map((v) => (
                                <SubCard key={v.id} title={v.name} style={{ width: '100%', marginBottom: '50px' }}>
                                    <List
                                        style={{
                                            width: '100%',
                                            bgcolor: 'background.paper',
                                            textAlign: 'center',
                                            paddingLeft: '100px',
                                            paddingBottom: '50px'
                                        }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <ListItemButton style={{ width: '62%', marginBottom: '10px' }}>
                                                <ListItemIcon>
                                                    <DirectionsCarFilledOutlinedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={`${v.number}`} />
                                            </ListItemButton>
                                            <ListItemButton style={{ width: '70%', marginBottom: '10px' }}>
                                                <ListItemIcon>
                                                    <BadgeOutlinedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={`${v.model}`} />
                                            </ListItemButton>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <ListItemButton style={{ width: '90%', marginBottom: '10px' }}>
                                                <ListItemIcon>
                                                    <ColorLensOutlinedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={`${v.color}`} />
                                            </ListItemButton>
                                            <ListItemButton style={{ width: '100%', marginBottom: '10px' }}>
                                                <ListItemIcon>
                                                    <PeopleAltOutlinedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={`정원 : ${v.capacity} 명`} />
                                            </ListItemButton>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <ListItemButton style={{ width: '100%', marginBottom: '10px' }}>
                                                <ListItemIcon>
                                                    <BurstModeOutlinedIcon />
                                                </ListItemIcon>
                                                <SimpleSlider data={v.imgList} style={{ width: '65%' }} />
                                            </ListItemButton>
                                            <ListItemButton
                                                style={{
                                                    position: 'absolute',
                                                    zIndex: '999',
                                                    top: '-19%',
                                                    right: '30%',
                                                    width: '10%',
                                                    marginBottom: '10px',
                                                    borderRadius: '10px'
                                                }}
                                                onClick={() => {
                                                    delbm(v.id);
                                                }}
                                            >
                                                <ListItemIcon style={{ color: '#1296ec' }}>
                                                    <StarsIcon style={{}} />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </div>
                                    </List>
                                </SubCard>
                            ))}

                            {/* </Grid> */}
                        </MainCard>
                    </Modal>
                </>
            )}
        </>
    );
};

TotalIncomeDarkCard.propTypes = {
    isLoading: PropTypes.bool,
    vehicleBookmark: PropTypes.any
};

export default TotalIncomeDarkCard;
