import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Admin
// 사원등록
const AdminRegister = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const AdminRoutes = {
    path: '/main/admin',
    element: <MainLayout />,
    children: [
        {
            path: '/CEmp',
            element: <AdminRegister />
        }
    ]
};
export default AdminRoutes;
