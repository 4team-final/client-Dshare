import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Admin
const AdminMainPage = Loadable(lazy(() => import('page/admin/main/AdminMainPage')));
const Paperbase = Loadable(lazy(() => import('page/admin/main/Paperbase')));
const AdminNavigator = Loadable(lazy(() => import('page/admin/main/AdminNavigator')));

const AdminRoutes = {
    path: '/admin',
    element: <Paperbase />,
    children: [
        {
            path: '/main',
            element: <AdminMainPage />
        },
        {
            path: '/navi',
            element: <AdminNavigator />
        }
    ]
};
export default AdminRoutes;
