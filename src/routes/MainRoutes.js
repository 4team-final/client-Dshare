import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ReservationPage from 'page/employee/main/reservation/Current';

// my reservation routing
const MyReservationDefault = Loadable(lazy(() => import('page/employee/main/reservation/ReservationStatusPage')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const AllResource = Loadable(lazy(() => import('components/board/BoardList')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

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
            path: '/emp/reservation',
            element: <ReservationPage />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/my/reservation/status',
            element: <MyReservationDefault />
        },
        {
            path: '/room/vehicle/list',
            element: <AllResource />
        }
    ]
};

export default MainRoutes;
