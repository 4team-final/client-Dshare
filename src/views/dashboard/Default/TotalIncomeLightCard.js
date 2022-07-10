import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Button, Modal, Grid, Link } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
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
import { readyException } from 'jquery';
// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
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
import { getVBookmark, getUserProfile, getRBookmark, delRBookmark } from 'components/ApiModules/ApiHandler';

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TotalIncomeLightCard = (props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [RBookmark, setRBookmark] = useState([]);

    //처음 랜더링
    useEffect(() => {
        const setR = async () => {
            let Rdata = await getRBookmark();
            setRBookmark(Rdata);
        };
        setR();
    }, []);
    //삭제 하는거
    const delbm = async (id) => {
        let check = confirm('삭제하시겠습니까?');
        if (check) {
            let Rdata = await delRBookmark(id);
            setRBookmark(Rdata);
        }
    };
    return (
        <>
            {props.isLoading ? (
                <TotalIncomeCard />
            ) : (
                <>
                    <CardWrapper border={false} content={false}>
                        <Box
                            sx={{ p: 2 }}
                            style={{
                                height: '7em',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <List sx={{ py: 0 }}>
                                <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.warning.light,
                                                color: theme.palette.warning.dark
                                            }}
                                        >
                                            <StorefrontTwoToneIcon fontSize="inherit" onClick={handleOpen} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{
                                            py: 0,
                                            mt: 0.45,
                                            mb: 0.45
                                        }}
                                        primary={<Typography variant="h4">회의실</Typography>}
                                        secondary={
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    color: theme.palette.grey[500],
                                                    mt: 0.5
                                                }}
                                            >
                                                내가 즐겨찾기한 회의실 조회
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
                            title="나의 회의실 즐겨찾기"
                            style={{ width: '50%', height: '80%', textAlign: 'center', marginBottom: '30px' }}
                        >
                            {/* <Grid container spacing={gridSpacing} sx={{ p: 3 }}> */}
                            {RBookmark.map((r) => (
                                <SubCard key={r.roomId} title={r.name} style={{ width: '100%', marginBottom: '50px' }}>
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
                                        <ListItemButton style={{ marginBottom: '10px' }}>
                                            <ListItemIcon>
                                                <StorefrontTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={`${r.roomNo}호`} />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <BadgeOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={`${r.categoryName}`} />
                                        </ListItemButton>

                                        <ListItemButton style={{ width: '90%', marginBottom: '10px' }}>
                                            <ListItemIcon>
                                                <ColorLensOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={`${r.content}`} />
                                        </ListItemButton>
                                        <ListItemButton style={{ width: '100%', marginBottom: '10px' }}>
                                            <ListItemIcon>
                                                <PeopleAltOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={`정원 : ${r.capacity} 명`} />
                                        </ListItemButton>

                                        <ListItemButton style={{ width: '150%', marginBottom: '10px' }}>
                                            <ListItemIcon>
                                                <BurstModeOutlinedIcon />
                                            </ListItemIcon>
                                            <SimpleSlider data={r.roomImgResDTOList} style={{ width: '280px' }} />
                                        </ListItemButton>
                                        <ListItemButton
                                            sx={{ width: '100%', marginBottom: '10px' }}
                                            onClick={() => {
                                                delbm(r.roomId);
                                            }}
                                        >
                                            <ListItemIcon style={{ color: '#1296ec' }}>
                                                <StarsIcon style={{}} />
                                            </ListItemIcon>
                                            즐겨찾기 취소
                                        </ListItemButton>
                                    </List>
                                    <Grid item xs={12} sm={12}>
                                        {r.roomObjectResDTOList.map((object) =>
                                            object.name != ' ' ? (
                                                <Chip
                                                    key={object.imgId}
                                                    label={`${object.name}`}
                                                    variant="outlined"
                                                    style={{ marginTop: '12px', marginRight: '10px' }}
                                                />
                                            ) : (
                                                <></>
                                            )
                                        )}
                                    </Grid>
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

TotalIncomeLightCard.propTypes = {
    isLoading: PropTypes.bool,
    roomBookmark: PropTypes.any
};

export default TotalIncomeLightCard;
