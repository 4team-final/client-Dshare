import React, { useContext } from 'react';
import './App.scss';
//redux
//Main
import ReservationStatusPage from './page/employee/main/reservation/ReservationStatusPage';

import QuickMenu from './components/Outlet/QuickMenu';
import PublicRoute from './components/Route/Public';
//store
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

//최상위 컴포넌트 App
function App() {
    const customization = useSelector((state) => state.customization);

    return (
        <div className="App">
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <Routes />
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
}

export default App;
