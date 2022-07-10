import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { AccessDeniedHandler } from './RoutesController';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/main',
    element: AccessDeniedHandler(<MinimalLayout />),
    children: [
        {
            path: '/logout',
            element: <AuthLogin3 />
        },
        {
            path: '/Mypage',
            element: <AuthRegister3 />
        }
    ]
};

export default AuthenticationRoutes;
