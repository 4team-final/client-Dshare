import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ReservationPage from 'page/employee/main/reservation/Current';
import { AccessDeniedHandler } from './RoutesController';

// my reservation routing
const MyReservationDefault = Loadable(lazy(() => import('page/employee/main/reservation/ReservationStatusPage')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const AllResource = Loadable(lazy(() => import('components/board/BoardList')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/main',
    element: AccessDeniedHandler(<MainLayout />),
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
