import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { useState } from 'react';
// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import navigation from 'menu-items';
import { drawerWidth } from 'store/actions/DashboardConstant';
import { SET_MENU } from 'store/actions/DashboardActions';
import { getUserProfile } from 'components/ApiModules/ApiHandler';

import Alert from '@mui/material/Alert';

// assets
import { IconChevronRight } from '@tabler/icons';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = (props) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const [user, setUser] = useState('');
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state?.customization?.opened);
    const dispatch = useDispatch();
    const allMessages = useSelector((state) => state.changeReducer.allMessage);
    const [messages, setMessages] = useState({});

    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    useEffect(async () => {
        const profile = await getUserProfile();
        setUser(profile.id);
    }, []);

    useEffect(() => {
        setMessages(allMessages);
    }, [allMessages]);

    console.log(allMessages);
    console.log(messages);

    useEffect(() => {
        if (messages.message === '' && messages.message2 === '' && messages.message3 === '' && messages.message4 === '') {
        } else {
            setTimeout(() => {
                setMessages({ message: '', message2: '', message3: '', message4: '' });
            }, 50000);
        }
    }, [messages.message, messages.message2, messages.message3, messages.message4]);
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            {user == 1 ? (
                <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
            ) : (
                <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
            )}

            {/* main content */}
            <Main theme={theme} open={leftDrawerOpened}>
                {messages.message != '' ? (
                    <>
                        <>
                            <Alert sx={{ bgcolor: '#5073b4' }} variant="filled" severity="success">
                                <div className="memo" style={{ display: 'flex' }}>
                                    <span>
                                        {messages.message ? (
                                            <>
                                                <div>{messages.message}</div>
                                            </>
                                        ) : (
                                            <div className="memo">{}</div>
                                        )}
                                    </span>
                                    <button
                                        onClick={() => {
                                            setMessages({ message: '', message2: '', message3: '', message4: '' });
                                        }}
                                        style={{
                                            zIndex: 80
                                        }}
                                    >
                                        x
                                    </button>
                                </div>
                            </Alert>
                        </>
                    </>
                ) : (
                    <></>
                )}
                {messages.message2 != '' ? (
                    <>
                        <>
                            <Alert sx={{ bgcolor: '#5073b4' }} variant="filled" severity="success">
                                <div className="memo" style={{ display: 'flex' }}>
                                    <span>
                                        {messages.message2 ? (
                                            <>
                                                <div>{messages.message2}</div>
                                            </>
                                        ) : (
                                            <div className="memo">{}</div>
                                        )}
                                    </span>
                                    <button
                                        onClick={() => {
                                            setMessages({ message: '', message2: '', message3: '', message4: '' });
                                        }}
                                        style={{
                                            zIndex: 80
                                        }}
                                    >
                                        x
                                    </button>
                                </div>
                            </Alert>
                        </>
                    </>
                ) : (
                    <></>
                )}
                {messages.message3 != '' ? (
                    <>
                        <>
                            <Alert sx={{ bgcolor: '#5073b4' }} variant="filled" severity="success">
                                <div className="memo" style={{ display: 'flex' }}>
                                    <span>
                                        {messages.message3 ? (
                                            <>
                                                <div>{messages.message3}</div>
                                            </>
                                        ) : (
                                            <div className="memo">{}</div>
                                        )}
                                    </span>
                                    <button
                                        onClick={() => {
                                            setMessages({ message: '', message2: '', message3: '', message4: '' });
                                        }}
                                        style={{
                                            zIndex: 80
                                        }}
                                    >
                                        x
                                    </button>
                                </div>
                            </Alert>
                        </>
                    </>
                ) : (
                    <></>
                )}
                {messages.message4 != '' ? (
                    <>
                        <>
                            <Alert sx={{ bgcolor: '#5073b4' }} variant="filled" severity="success">
                                <div className="memo" style={{ display: 'flex' }}>
                                    <span>
                                        {messages.message4 ? (
                                            <>
                                                <div>{messages.message4}</div>
                                            </>
                                        ) : (
                                            <div className="memo">{}</div>
                                        )}
                                    </span>
                                    <button
                                        onClick={() => {
                                            setMessages({ message: '', message2: '', message3: '', message4: '' });
                                        }}
                                        style={{
                                            zIndex: 80
                                        }}
                                    >
                                        x
                                    </button>
                                </div>
                            </Alert>
                        </>
                    </>
                ) : (
                    <></>
                )}

                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Main>
            <Customization />
        </Box>
    );
};

export default MainLayout;
