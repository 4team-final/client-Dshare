import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getRBookmark, getVBookmark } from 'components/ApiModules/ApiHandler';
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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [board, setBoard] = useState(props.item);
    console.log(board);
    useEffect(() => {
        console.log(props.item);
        props.item.roomId;
        // getRBookmark
        // getVBookmark
    }, []);

    function convertTime(time) {
        let convert = time.split('T')[0];
        return convert;
    }

    return (
        <Card className="card2" sx={{ width: '35em', height: '30em', margin: '1%' }}>
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
                        fontFamily: 'BMDOHYEON',
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
                        fontFamily: 'BMDOHYEON',
                        fontSize: '13px',
                        margin: '8px',
                        borderRadius: '30px',
                        padding: '3px',
                        background: '#DBFFCF',
                        boxShadow: '1px 1px 3px 1px #dadce0'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon path={mdiBookmark} title="menu" size={1} color="orange" />
                        {board?.content || board?.model}
                    </div>
                </Typography>
                <Typography
                    style={{
                        fontFamily: 'BMDOHYEON',
                        fontSize: '13px',
                        margin: '8px',
                        borderRadius: '30px',
                        padding: '3px',
                        background: '#FFDDDC',
                        boxShadow: '1px 1px 3px 1px #dadce0'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {board?.roomNo && (
                            <>
                                <Icon path={mdiHome} title="menu" size={'2em'} color="red" />
                                {board?.roomNo + '호'}
                            </>
                        )}
                        {board?.number && (
                            <>
                                <Icon path={mdiCounter} title="menu" size={'2em'} color="red" />
                                {board?.number}
                            </>
                        )}
                    </div>
                </Typography>
                <Typography
                    style={{
                        fontFamily: 'BMDOHYEON',
                        fontSize: '10px',
                        margin: '5px',
                        borderRadius: '30px',
                        padding: '3px',
                        background: 'lightyellow',
                        boxShadow: '1px 1px 3px 1px #dadce0'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon path={mdiAccountMultiple} title="menu" size={1} color="black" />
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
                        delbm(r.roomId);
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
                        delbm(r.roomId);
                    }}
                >
                    <ListItemIcon style={{ color: '#1296ec' }}>
                        <StarsIcon style={{}} />
                    </ListItemIcon>
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
    );
}
