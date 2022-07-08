import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Admin
// 사원등록
const AdminRegister = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const AdminEmpInfo = Loadable(lazy(() => import('page/admin/main/AdminEmpInfo')));
const AdminRoutes = {
    path: '/main/admin',
    element: <MainLayout />,
    children: [
        {
            path: '/CEmp',
            element: <AdminRegister />
        },
        {
            path: '/REmp',
            element: <AdminEmpInfo />
        }
    ]
};
export default AdminRoutes;
