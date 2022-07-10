import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { AccessDeniedHandler } from './RoutesController';

// Admin
// 사원등록
const AdminRegister = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const AdminEmpInfo = Loadable(lazy(() => import('page/admin/main/AdminEmpInfo')));
const AdminRoomResInfo = Loadable(lazy(() => import('page/admin/main/AdminRoomResInfo')));
const AdminVehicleResInfo = Loadable(lazy(() => import('page/admin/main/AdminVehicleResInfo')));
const AdminRoutes = {
    path: '/main/admin',
    element: AccessDeniedHandler(<MainLayout />),
    children: [
        {
            path: '/CEmp',
            element: <AdminRegister />
        },
        {
            path: '/REmp',
            element: <AdminEmpInfo />
        },
        {
            path: '/RoomResInfo',
            element: <AdminRoomResInfo />
        },
        {
            path: '/VehicleResInfo',
            element: <AdminVehicleResInfo />
        }
    ]
};
export default AdminRoutes;
