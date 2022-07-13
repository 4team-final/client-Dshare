import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getRBookmark, getVBookmark, delVBookmark, delRBookmark, addVBookmark } from 'components/ApiModules/ApiHandler';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { mdiCartVariant, mdiHeart, mdiComment } from '@mdi/js';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mdi/react';
import { mdiBookmark } from '@mdi/js';
import { mdiLeadPencil } from '@mdi/js';
import { mdiClock } from '@mdi/js';
import { mdiHome } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';
import { mdiCounter } from '@mdi/js';
import './BoardCard.css';
import SimpleSlider from 'components/reservation/SimpleSlider';
import StarsIcon from '@mui/icons-material/Stars';
import { Grid } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

export default function BoardCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [mark, setMark] = useState(false);
    const [RBook, setRBook] = useState([]);
    const [VBook, setVBook] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [board, setBoard] = useState(props?.item);
    console.log(board);

    const delVbm = async (id) => {
        console.log(id);
        if (mark) {
            let Rdata = await delVBookmark(id);
            alert('즐겨 찾기를 취소 했습니다~!');
        } else {
            let Rdata = await addVBookmark(id);
            console.log(Rdata);
            alert('즐겨 찾기를 등록 했습니다~!');
        }

        window.location.href = '/main/room/vehicle/list';
    };

    const delRbm = async (id) => {
        console.log(id);
        let Rdata = await delRBookmark(id);
        if (mark) {
            alert('즐겨 찾기를 취소 했습니다~!');
        } else {
            alert('즐겨 찾기를 등록 했습니다~!');
        }
        window.location.href = '/main/room/vehicle/list';
    };

    async function getBookInfo() {
        if (!board.content) {
            console.log('차량입니다');
            let tmp = await getVBookmark();
            console.log(tmp);

            tmp.map((tmp) => (tmp.id == board.id ? setMark(true) : <></>));
        } else {
            console.log('회의실 입니다');
            let tmp = await getRBookmark();
            setRBook(tmp);
            console.log(tmp);
            tmp.map((tmp) => (tmp.roomId == board.roomId ? setMark(true) : <></>));
            // console.log(props.item);
            // props.item.roomId;
        }
    }

    useEffect(() => {
        getBookInfo();
        console.log(props.item);
        props?.item?.roomId;
        // getRBookmark
        // getVBookmark
    }, []);

    function convertTime(time) {
        let convert = time.split('T')[0];
        return convert;
    }

    return (
        <Grid item xs={12} md={4} sx={{ padding: '1%' }}>
            <Card className="card2" sx={{ width: '28em', height: '30em', margin: '1%' }}>
                {/* <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={board.profileImg}>
                        사진
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={board.nickname}
                subheader={convertTime(board.createAt)}
            /> */}
                {/* boardImgPath */}

                {board?.imgList?.length > 0 ? (
                    <SimpleSlider data={board?.imgList} style={{ width: '95%', height: '15em' }} />
                ) : (
                    // <CardMedia component="img" width={'300px'} height={'300px'} src={board.boardImgPath} />
                    // <CardMedia component="img" width={'300px'} height={'300px'} src={'/monkey_2.png'} alt="douzone monkey" />
                    <SimpleSlider data={{}} style={{ width: '95%', height: '70em' }} />
                )}

                <CardContent
                    style={{
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid #d3d3d3'
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        {board?.categoryName || board?.name}
                    </Typography>
                </CardContent>

                <br />

                <CardActions style={{ height: '35px' }} disableSpacing>
                    <Typography
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '10px',
                            margin: '8px',
                            borderRadius: '30px',
                            padding: '3px 8px 3px 8px',
                            boxShadow: '1px 1px 3px 1px #dadce0'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon path={mdiBookmark} title="menu" size={'1.5em'} color="#1296ec" />
                            {board?.content || board?.model}
                        </div>
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '10px',
                            margin: '8px',
                            borderRadius: '30px',
                            padding: '3px 8px 3px 8px',
                            boxShadow: '1px 1px 3px 1px #dadce0'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {board?.roomNo && (
                                <>
                                    <Icon path={mdiHome} title="menu" size={'1.5em'} color="#1296ec" />
                                    {board?.roomNo + '호'}
                                </>
                            )}
                            {board?.number && (
                                <>
                                    <Icon path={mdiCounter} title="menu" size={'1.5em'} color="#1296ec" />
                                    {board?.number}
                                </>
                            )}
                        </div>
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: '10px',
                            margin: '5px',
                            borderRadius: '30px',
                            padding: '3px 6px 3px 6px ',
                            boxShadow: '1px 1px 3px 1px #dadce0'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon path={mdiAccountMultiple} title="menu" size={'1.8em'} color="#1296ec" />
                            {board?.capacity + '인'}
                        </div>
                    </Typography>

                    {/* <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore> */}
                </CardActions>
                {mark ? (
                    <ListItemButton
                        sx={{ width: '100%', marginBottom: '10px' }}
                        style={{ textAlign: 'center' }}
                        onClick={() => {
                            if (!board.content) {
                                delVbm(board.id);
                            } else {
                                delRbm(board.roomId);
                            }
                        }}
                    >
                        <ListItemIcon style={{ color: '#1296ec' }}>
                            <StarsIcon style={{}} />
                        </ListItemIcon>
                        <ListItemText>즐겨찾기 취소</ListItemText>
                    </ListItemButton>
                ) : (
                    <ListItemButton
                        sx={{ width: '100%', marginBottom: '10px' }}
                        style={{ textAlign: 'center' }}
                        onClick={() => {
                            if (!board.content) {
                                delVbm(board.id);
                            } else {
                                delRbm(board.roomId);
                            }
                        }}
                    >
                        {/* <ListItemIcon style={{ color: '#1296ec' }}>
                        <StarsIcon style={{}} />
                    </ListItemIcon> */}
                        <ListItemText>즐겨찾기 등록</ListItemText>
                    </ListItemButton>
                )}
                {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph style={{ fontFamily: 'BMDOHYEON' }}>
                        <Icon path={mdiClock} title="menu" size={1} color="black" />
                        {}asd
                    </Typography>
                </CardContent>
            </Collapse> */}
            </Card>
        </Grid>
    );
}
