import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from 'components/ApiModules/ApiHandler';
import axios from 'axios';
import { baseUrl } from '../../components/ApiModules/ApiParts';
import { request } from '../../components/ApiModules/ReqInterceptor';
import { resError, resSuccess } from '../../components/ApiModules/ResInterceptor';
import { ProfileChangeSave } from 'store/actions/ChangeAction';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography,
    List,
    InputAdornment
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { IconSettings } from '@tabler/icons';
import { BadgeOutlined } from '@mui/icons-material';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY } from 'store/actions/DashboardActions';
import { gridSpacing } from 'store/actions/DashboardConstant';
import DataGrid from 'react-data-grid';

import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Divider } from 'antd';
import EditIcon from '@mui/icons-material/Edit';

// concat 'px'
function valueText(value) {
    return `${value}px`;
}
//리스트

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

//체크박스 관련

import { Theme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DatePicker from 'react-datepicker';
import ImageUploader from 'react-images-upload';
//헤더 이미지 바꾸는 함수
import checkProfImg from 'layout/MainLayout/Header/ProfileSection/index';

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    // state - border radius
    const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
    const handleBorderRadius = (event, newValue) => {
        setBorderRadius(newValue);
    };
    const anchorRef = useRef(null);

    useEffect(() => {
        dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    }, [dispatch, borderRadius]);

    let initialFont;
    switch (customization.fontFamily) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [fontFamily, setFontFamily] = useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto', sans-serif`;
                break;
        }
        dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
    }, [dispatch, fontFamily]);

    //datagrid

    const columns = [
        { key: 'name', name: '이름' },
        { key: 'empNo', name: '사원번호' },
        { key: 'dept', name: '부서' },
        { key: 'team', name: '팀' },
        { key: 'position', name: '직급' }
    ];

    // { id: 0, title: 'Example' }
    //프로필 조회
    const [empInfo, setEmpInfo] = useState({});

    const [profileImg, setProfileImg] = useState([]);

    const [id, setId] = useState('');
    useEffect(
        () => {
            async function profile() {
                let emp = await getUserProfile();
                setBirthDay(emp.birthday.split('T', 1)[0]);
                setEmail(emp.email);
                setName(emp.name);
                setTel(emp.tel);
                setTeam(emp.team);
                setPosition(emp.position);
                setdept(emp.dept);
                setProfileImg(emp.profileImg);
                setId(emp.id);
                setTeamId(emp.teamId);
                setDeptId(emp.deptId);
                setPositionId(emp.positionId);
                setTeamId2(emp.teamId);
                setDeptId2(emp.deptId);
                setPositionId2(emp.positionId);
                setEmpInfo(emp);
            }
            profile();
        },
        [],
        [name, email, tel, birthday, positionId, teamId, deptId]
    );
    useEffect(() => {
        async function profile() {
            let emp = await getUserProfile();
            setBirthDay(emp.birthday.split('T', 1)[0]);
            setEmail(emp.email);
            setName(emp.name);
            setTel(emp.tel);
            setTeam(emp.team);
            setPosition(emp.position);
            setdept(emp.dept);
            setProfileImg(emp.profileImg);
            setId(emp.id);
            setTeamId(emp.teamId);
            setDeptId(emp.deptId);
            setPositionId(emp.positionId);
            setEmpInfo(emp);
            //2
            setEmail2(emp.email);
            setName2(emp.name);
            setTel2(emp.tel);
            setBirthDay2(emp.birthday.split('T', 1)[0]);
        }
        profile();
    }, []);

    //부서 팀 포지션 리스트
    const [liOpen, setLiOpen] = useState(false);

    const handleClick = () => {
        setLiOpen(!liOpen);
    };
    //사원 정보 수정
    const [update, setUpdate] = useState(false);
    const updateProfile = () => {
        setUpdate(!update);
    };

    //변수
    const [team, setTeam] = useState('');
    const [dept, setdept] = useState('');
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState('');
    const [positionId, setPositionId] = useState('');
    const [deptId, setDeptId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [birthday, setBirthDay] = useState();

    //업뎃용
    const [team2, setTeam2] = useState('');
    const [dept2, setdept2] = useState('');
    const [position2, setPosition2] = useState('');
    const [teamId2, setTeamId2] = useState('');
    const [positionId2, setPositionId2] = useState('');
    const [deptId2, setDeptId2] = useState('');
    const [name2, setName2] = useState('');
    const [email2, setEmail2] = useState('');
    const [tel2, setTel2] = useState('');
    const [birthday2, setBirthDay2] = useState();

    //이메일 변경
    const emailChange = (e) => {
        setEmail2(e.target.value);
    };
    //이름 변경
    const nameChange = (e) => {
        setName2(e.target.value);
    };
    //전화번호 변경
    const telChange = (e) => {
        setTel2(e.target.value);
    };
    //생일
    const birthdayChange = (e) => {
        setBirthDay2(e.target.value);
    };

    //체크박스 설정
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        }
    };
    const names = [
        '1cell(관리부)',
        '1cell(기획부)',
        '2cell(기획부)',
        '3cell(기획부)',
        '1cell(영업부)',
        '2cell(영업부)',
        '3cell(영업부)',
        '4cell(영업부)',
        '5cell(영업부)',
        '1cell(마케팅부)',
        '2cell(마케팅부)',
        '3cell(마케팅부)',
        '4cell(마케팅부)',
        '1cell(인사부)',
        '2cell(인사부)',
        '3cell(인사부)',
        '4cell(인사부)',
        '1cell(경영부)',
        '2cell(경영부)',
        '3cell(경영부)',
        '1cell(회계부)',
        '2cell(회계부)',
        '1cell(개발부-erp10)',
        '2cell(개발부-erp10)',
        '3cell(개발부-erp10)',
        '4cell(개발부-erp10)',
        '5cell(개발부-erp10)',
        '1cell(개발부-amaranth10)',
        '2cell(개발부-amaranth10)',
        '3cell(개발부-amaranth10)',
        '4cell(개발부-amaranth10)',
        '5cell(개발부-amaranth10)',
        '1cell(개발부-wehago)',
        '2cell(개발부-wehago)',
        '3cell(개발부-wehago)',
        '1cell(개발부-nahago)',
        '2cell(개발부-nahago)',
        '3cell(개발부-nahago)',
        '1cell(총무부)',
        '2cell(총무부)',
        '3cell(총무부)',
        '3cell(보안부)',
        '4cell(보안부)',
        '1cell(네트워크부)',
        '2cell(네트워크부)',
        '3cell(네트워크부)'
    ];
    const positions = ['회장', '사장', '부사장', '전무', '상무', '이사', '부장', '차장', '과장', '대리', '주임', '사원', '인턴'];

    function getStyles(name, personName, theme) {
        return {
            fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
        };
    }

    const [tdName, setTdName] = useState([]);
    const [pName, setPName] = useState([]);
    const postionChange = (event) => {
        const {
            target: { value }
        } = event;
        setPName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
        for (var i = 0; i < positions.length; i++) {
            if (positions[i] == value) {
                setPositionId2(i + 1);
            }
        }
    };
    const handleChange = (event) => {
        const {
            target: { value }
        } = event;
        setTdName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
        setDeptId(value.split('-', 1));
        if (names == value) {
        }
        for (var i = 0; i < names.length; i++) {
            if (names[i] == value) {
                setTeamId2(i + 1);
            }
        }
    };

    const dshareAPI = axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            RefreshToken: ''
        }
    });
    dshareAPI.interceptors.request.use(request);
    dshareAPI.interceptors.response.use(resSuccess, resError);
    // const [team2, setTeam2] = useState('');
    // const [dept2, setdept2] = useState('');
    // const [position2, setPosition2] = useState('');
    // const [teamId2, setTeamId2] = useState('');
    // const [positionId2, setPositionId2] = useState('');
    // const [deptId2, setDeptId2] = useState('');
    // const [name2, setName2] = useState('');
    // const [email2, setEmail2] = useState('');
    // const [tel2, setTel2] = useState('');
    // const [birthday2, setBirthDay2] = useState();
    const updateEmpInfo = async () => {
        console.log(teamId2, positionId2, name2, email2, birthday2, tel2);
        return await dshareAPI
            .post(`admin/update/${id}`, {
                teamId: teamId2,
                positionId: positionId2,
                name: name2,
                email: email2,
                tel: tel2,
                birthday: birthday2 + 'T00:00:00'
            })
            .then((res) => {
                let emp = getUserProfile();
                return emp;
            })
            .catch((e) => console.log(e));
    };

    const updateEmp = async () => {
        let emp = await updateEmpInfo();
        console.log(emp);
        setUpdate(!update);
        dispatch(ProfileChangeSave(emp));
        // console.log(id, teamId, positionId, name, email, tel, birthday);
        setBirthDay(emp.birthday.split('T', 1)[0]);
        setEmail(emp.email);
        setName(emp.name);
        setTel(emp.tel);
        setTeam(emp.team);
        setPosition(emp.position);
        setdept(emp.dept);
        setProfileImg(emp.profileImg);
        setId(emp.id);
        setTeamId(emp.teamId);
        setDeptId(emp.deptId);
        setPositionId(emp.positionId);
        setEmpInfo(emp);
        alert('사원수정에 성공하였습니다!');
    };
    const [imgUpdate, setImgUpdate] = useState(false);

    const updateImg = () => {
        setImgUpdate(!imgUpdate);
    };
    const [pictures, setPictures] = useState([]);

    const onDrop = (picture) => {
        setPictures(...pictures, picture);
    };

    const updateSuccessImg = async () => {
        let frm = new FormData();
        frm.enctype = 'multipart/form-data';
        let pic = pictures[0];
        frm.append('files', pic);
        frm.append('TargetEmpId', id);
        await dshareAPI
            .post(`emp/image/upload`, frm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    RefreshToken: ''
                }
            })
            .then((res) => {
                alertUpdateImg(res.data);
            })
            .catch((e) => console.log(e));
        setPictures([]);
    };

    const alertUpdateImg = (value) => {
        if (value) {
            async function profile() {
                let emp = await getUserProfile();
                dispatch(ProfileChangeSave(emp));
                setProfileImg(emp.profileImg);
                alert(value.message);
            }
            profile();
            setImgUpdate(!imgUpdate);
            // window.location.href = '/main/dashboard/default';
        } else {
            alert(value.message);
        }
    };
    return (
        <>
            {/* toggle button */}

            <Tooltip title={`${empInfo.name} 님의 프로필 보기`}>
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="large"
                    variant="circular"
                    color="secondary"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: theme.zIndex.speedDial
                    }}
                >
                    <AnimateButton type="rotate">
                        <IconButton color="inherit" size="large" disableRipple>
                            {
                                <Avatar
                                    src={profileImg}
                                    sx={{
                                        ...theme.typography.largeAvatar,
                                        margin: '0px 0 0px 0px !important',
                                        cursor: 'pointer'
                                    }}
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    color="inherit"
                                />
                            }
                        </IconButton>
                    </AnimateButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: '30%'
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            {/* font family */}
                            <SubCard title={`${name} ${position}님, 반갑습니다!`} style={{ width: '100%' }}>
                                {!update ? (
                                    <List
                                        sx={{ width: '100%', margin: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                        subheader={
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                {name}님의 프로필 정보 입니다.
                                            </ListSubheader>
                                        }
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <BadgeOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary={empInfo.empNo} />
                                        </ListItemButton>
                                        {/* 부서 */}
                                        <ListItemButton onClick={handleClick}>
                                            <ListItemIcon>
                                                <FolderSharedOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={empInfo.dept} />
                                            {liOpen ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={liOpen} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {/* 팀 */}
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <PeopleOutlineOutlinedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={empInfo.team} />
                                                </ListItemButton>
                                                {/* 포지션 */}
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <PersonOutlineOutlinedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={empInfo.position} />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                        {/* email */}
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <EmailOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText id="email" primary={email} />
                                        </ListItemButton>
                                        {/* birthday */}
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CakeOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={birthday} />
                                        </ListItemButton>
                                        {/* tel */}
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CallOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={empInfo.tel} />
                                        </ListItemButton>
                                        {id == '1' ? (
                                            <ListItemButton onClick={updateProfile}>
                                                <ListItemIcon>
                                                    <Fab
                                                        color="secondary"
                                                        aria-label="edit"
                                                        style={{ width: '25px', height: '25px', minHeight: 0 }}
                                                    >
                                                        <EditIcon style={{ width: '18px', height: '18px' }} />
                                                    </Fab>
                                                </ListItemIcon>
                                                <ListItemText primary="수정" />
                                            </ListItemButton>
                                        ) : (
                                            <></>
                                        )}
                                    </List>
                                ) : (
                                    <List
                                        sx={{ width: '100%', margin: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                        subheader={
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                {name}님의 프로필 수정 화면 입니다.
                                            </ListSubheader>
                                        }
                                    >
                                        {/* 이름 */}
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="이름"
                                            defaultValue={name2}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DriveFileRenameOutlineOutlinedIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                            onChange={nameChange}
                                            variant="standard"
                                            style={{ marginBottom: '15px', width: '80%' }}
                                        />

                                        {/* 이메일 */}
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="이메일"
                                            defaultValue={email2}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailOutlinedIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                            onChange={emailChange}
                                            variant="standard"
                                            style={{ marginBottom: '15px', width: '80%' }}
                                        />
                                        {/* 생일 */}
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="생일"
                                            defaultValue={birthday2}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CakeOutlinedIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                            onChange={birthdayChange}
                                            variant="standard"
                                            style={{ marginBottom: '15px', width: '80%' }}
                                        />

                                        {/* 전화 */}
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="전화번호"
                                            defaultValue={tel2}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CallOutlinedIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                            onChange={telChange}
                                            variant="standard"
                                            style={{ marginBottom: '15px', width: '80%' }}
                                        />
                                        {/* 팀, 부서, 포지션 */}
                                        <FormControl sx={{ minWidth: 180 }} style={{ marginBottom: '15px', width: '80%' }}>
                                            <InputLabel id="demo-multiple-name-label">부서, 팀</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                id="demo-multiple-name"
                                                displayEmpty
                                                value={tdName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Name" />}
                                                MenuProps={MenuProps}
                                                style={{ marginBottom: '15px' }}
                                            >
                                                <MenuItem value={dept} style={getStyles(dept, tdName, theme)}>
                                                    <em>
                                                        {dept} - {team}
                                                    </em>
                                                </MenuItem>
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name} style={getStyles(name, tdName, theme)}>
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        {/* 포지션 */}
                                        <FormControl sx={{ minWidth: 180 }} style={{ marginBottom: '15px', width: '80%' }}>
                                            <InputLabel id="demo-multiple-position-label">직급</InputLabel>
                                            <Select
                                                labelId="demo-multiple-position-label"
                                                id="demo-multiple-name"
                                                displayEmpty
                                                value={pName}
                                                onChange={postionChange}
                                                input={<OutlinedInput label="Name" />}
                                                MenuProps={MenuProps}
                                            >
                                                <MenuItem value={position} style={getStyles(name, pName, theme)}>
                                                    <em>{position}</em>
                                                </MenuItem>
                                                {positions.map((name) => (
                                                    <MenuItem key={name} value={name} style={getStyles(name, pName, theme)}>
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <List style={{ display: 'flex', width: '80%' }}>
                                            <ListItemButton onClick={updateEmp}>
                                                <ListItemIcon>
                                                    <Fab
                                                        color="primary"
                                                        aria-label="edit"
                                                        style={{ width: '25px', height: '25px', minHeight: 0 }}
                                                    >
                                                        <CheckCircleOutlinedIcon style={{ width: '18px', height: '18px' }} />
                                                    </Fab>
                                                </ListItemIcon>
                                                <ListItemText primary="완료" />
                                            </ListItemButton>
                                            <ListItemButton onClick={updateProfile}>
                                                <ListItemIcon>
                                                    <Fab
                                                        color="secondary"
                                                        aria-label="edit"
                                                        style={{ width: '25px', height: '25px', minHeight: 0 }}
                                                    >
                                                        <CancelOutlinedIcon style={{ width: '18px', height: '18px' }} />
                                                    </Fab>
                                                </ListItemIcon>
                                                <ListItemText primary="취소" />
                                            </ListItemButton>
                                        </List>
                                    </List>
                                )}
                            </SubCard>
                            {/* border radius */}
                            <Divider />
                            <SubCard title="프로필 사진">
                                {!imgUpdate ? (
                                    <>
                                        <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5, pl: 4 }}>
                                            <Grid item>
                                                <img
                                                    src={profileImg}
                                                    alt=""
                                                    style={{
                                                        width: 260,
                                                        textAlign: 'center',
                                                        bgcolor: 'background.paper',
                                                        borderRadius: '10px'
                                                    }}
                                                />
                                            </Grid>

                                            <ListItemButton onClick={updateImg} style={{}}>
                                                <ListItemIcon>
                                                    <Fab
                                                        color="secondary"
                                                        aria-label="edit"
                                                        style={{ width: '25px', height: '25px', minHeight: 0 }}
                                                    >
                                                        <EditIcon style={{ width: '18px', height: '18px' }} />
                                                    </Fab>
                                                </ListItemIcon>
                                                <ListItemText primary="수정하기" />
                                            </ListItemButton>
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <ImageUploader
                                            singleImage={true}
                                            withIcon={true}
                                            buttonText="이미지를 선택하세요"
                                            label="5mb 이하, jpg, gif, png, gif 가능"
                                            onChange={onDrop}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={5242880}
                                            withPreview={true}
                                        />
                                        <ListItemButton onClick={updateSuccessImg} style={{}}>
                                            <ListItemIcon>
                                                <Fab
                                                    color="primary"
                                                    aria-label="edit"
                                                    style={{ width: '25px', height: '25px', minHeight: 0 }}
                                                >
                                                    <CheckCircleOutlinedIcon style={{ width: '18px', height: '18px' }} />
                                                </Fab>
                                            </ListItemIcon>
                                            <ListItemText primary="수정 완료" />
                                        </ListItemButton>
                                        <ListItemButton onClick={updateImg} style={{}}>
                                            <ListItemIcon>
                                                <Fab
                                                    color="secondary"
                                                    aria-label="edit"
                                                    style={{ width: '25px', height: '25px', minHeight: 0 }}
                                                >
                                                    <CancelOutlinedIcon style={{ width: '18px', height: '18px' }} />
                                                </Fab>
                                            </ListItemIcon>
                                            <ListItemText primary="수정 취소" />
                                        </ListItemButton>
                                    </>
                                )}
                            </SubCard>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Customization;
