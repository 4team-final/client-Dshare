import React, { useContext } from 'react';
import { useEffect } from 'react';
import './App.scss';
//redux
//Main
import ReservationStatusPage from './page/employee/main/reservation/ReservationStatusPage';

import QuickMenu from './components/Outlet/QuickMenu';
//store

import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from 'components/ApiModules/ApiHandler';
import { goAdminPage } from 'store/actions/ChangeAction';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import CustomRoutes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

//최상위 컴포넌트 App
function App() {
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();
    // useEffect(async () => {
    //     const emp = await getUserProfile();
    //     if (emp.id == 1) {
    //         dispatch(goAdminPage());
    //     }
    // }, []);
    return (
        <div className="App">
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <CustomRoutes />
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
}

export default App;
