import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ReservationPage from 'page/employee/main/reservation/Current/index';

// my reservation routing

const MyReservationDefault = Loadable(lazy(() => import('page/employee/main/reservation/ReservationStatusPage')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/main',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/room/room-reserve',
            element: <ReservationPage />
        },
        {
            path: '/reserve/vehicle-reserve',
            element: <ReservationPage />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/my/reservation/status',
            element: <MyReservationDefault />
        }
    ]
};

export default MainRoutes;
