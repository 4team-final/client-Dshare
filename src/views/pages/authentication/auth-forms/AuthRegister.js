import { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//datepicker

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { RegistWorker } from 'components/ApiModules/ApiHandler';
import { IMaskInput } from 'react-imask';

// material-ui
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NearMeSharp, Telegram } from '@mui/icons-material';
//image upload
import ImageUploader from 'react-images-upload';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
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
    const [tdName, setTdName] = useState([]);

    const [pName, setPName] = useState([]);
    //등록 폼
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [teamId, setTeamId] = useState([]);
    const [positionId, setPositionId] = useState('');
    const [birthday, setBirthday] = useState(new Date());
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [deptName, setDeptName] = useState('');
    const [profileImg, setProfileImg] = useState([]);

    //이메일 변경
    const emailChange = (value) => {
        setEmail(value);
    };
    //이름 변경
    const nameChange = (e) => {
        setName(e.target.value);
    };
    //전화번호 변경
    const telChange = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        console.log(regex.test(e.target.value));

        if (regex.test(e.target.value)) {
            setTel(e.target.value);
        }
    };

    //등록 폼

    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
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

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const googleHandler = async () => {
        console.error('Register');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
        setPassword(value);
    };
    function getStyles(name, names, theme) {
        return {
            fontWeight: names.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
        };
    }
    const DTChange = (event) => {
        const {
            target: { value }
        } = event;
        setTdName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
        let tmp = value.split('(', 2);
        // setDeptName();

        if (names == value) {
            console.log(names.length);
        }
        for (var i = 0; i < names.length; i++) {
            if (names[i] == value) {
                setTeamId(i + 1);
            }
        }
    };
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
                setPositionId(i + 1);
            }
        }
    };
    const onDrop = (picture) => {
        setProfileImg(...profileImg, picture);
    };

    useEffect(() => {
        if (tel.length === 10) {
            setTel(tel.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (tel.length === 13) {
            setTel(tel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [tel]);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (checked) {
                            if (!(profileImg[0] == [] || profileImg[0] == '' || profileImg[0] == null || profileImg[0] == undefined)) {
                                if (!(name == '' || email == '' || positionId == '' || teamId == '')) {
                                    if (scriptedRef.current) {
                                        setStatus({ success: true });
                                        setSubmitting(false);
                                        let success = await RegistWorker(
                                            teamId,
                                            positionId,
                                            password,
                                            name,
                                            email,
                                            tel,
                                            birthday,
                                            profileImg
                                        );
                                        console.log(success);
                                        //사원조회목록으로 라우팅
                                    }
                                } else {
                                    alert('사원정보를 모두 입력해 주세요!');
                                }
                            } else {
                                alert('프로필 사진을 등록해주세요!');
                            }
                        } else {
                            alert('입력정보 확인란에 첵크해 주세요!');
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <>
                        <form noValidate onSubmit={handleSubmit} {...others}>
                            <Grid item xs={12} container alignItems="center" justifyContent="center">
                                <Box sx={{ mb: 2 }}></Box>
                            </Grid>
                            <Grid item xs={12} container alignItems="center" justifyContent="center" style={{ marginBottom: '2%' }}>
                                <Box sx={{ mb: 2 }}>
                                    <ImageUploader
                                        singleImage={true}
                                        withIcon={true}
                                        buttonText="이미지를 선택하세요"
                                        label="5mb 이하, jpg, gif, png, gif 가능"
                                        onChange={onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                        withPreview={true}
                                        size="small"
                                    />
                                </Box>
                            </Grid>

                            <Grid container spacing={matchDownSM ? 0 : 2} style={{ marginBottom: '1%' }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        margin="normal"
                                        name="fname"
                                        type="text"
                                        defaultValue=""
                                        onChange={nameChange}
                                        sx={{ ...theme.typography.customInput }}
                                        size="small"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ marginBottom: '3%' }}>
                                    <TextField
                                        fullWidth
                                        label="Tel"
                                        margin="normal"
                                        name="lname"
                                        type="text"
                                        onChange={telChange}
                                        value={tel}
                                        defaultValue=""
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={matchDownSM ? 0 : 2} style={{ marginBottom: '3%' }}>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="demo-simple-select-standard-label">Dept/team</InputLabel>
                                    <Select
                                        id="demo-multiple-name"
                                        // displayEmpty
                                        labelId="demo-simple-select-standard-label"
                                        onChange={DTChange}
                                        // input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                        sx={{ ...theme.typography.customInput, width: '100%' }}

                                        // style={{ marginBottom: '15px' }}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name} style={getStyles(name, names, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={6} style={{ marginBottom: '3%' }}>
                                    <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
                                    <Select
                                        labelId="demo-multiple-position-label"
                                        id="demo-multiple-name"
                                        // displayEmpty
                                        onChange={postionChange}
                                        // input={<OutlinedInput label="Name" />}
                                        sx={{ ...theme.typography.customInput, width: '100%' }}
                                        MenuProps={MenuProps}
                                    >
                                        {positions.map((name) => (
                                            <MenuItem key={name} value={name} style={getStyles(name, positions, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginBottom: '3%' }}>
                                <Stack spacing={3} style={{ marginBottom: '3%' }}>
                                    <DatePicker
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        label="Birthday"
                                        value={birthday}
                                        onChange={(newValue) => {
                                            console.log(newValue);
                                            setBirthday(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                            <FormControl
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                                sx={{ ...theme.typography.customInput }}
                                style={{ marginBottom: '3%' }}
                            >
                                <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email-register"
                                    type="email"
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        emailChange(e.target.value);
                                    }}
                                    inputProps={{}}
                                />
                                {touched.email && errors.email && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <FormControl
                                fullWidth
                                error={Boolean(touched.password && errors.password)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password-register"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name="password"
                                    label="Password"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        changePassword(e.target.value);
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    inputProps={{}}
                                />
                                {touched.password && errors.password && (
                                    <FormHelperText error id="standard-weight-helper-text-password-register">
                                        {errors.password}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            {strength !== 0 && (
                                <FormControl fullWidth>
                                    <Box sx={{ mb: 2 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item>
                                                <Box
                                                    style={{ backgroundColor: level?.color }}
                                                    sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" fontSize="0.75rem">
                                                    {level?.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </FormControl>
                            )}

                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) => setChecked(event.target.checked)}
                                                name="checked"
                                                color="primary"
                                            />
                                        }
                                        label={<Typography variant="subtitle1">정보를 모두 확인 하셨습니까? &nbsp;</Typography>}
                                    />
                                </Grid>
                            </Grid>
                            {errors.submit && (
                                <Box sx={{ mt: 3 }}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Box>
                            )}

                            <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Regist
                                    </Button>
                                </AnimateButton>
                            </Box>
                        </form>
                    </>
                )}
            </Formik>
        </>
    );
};

export default FirebaseRegister;
