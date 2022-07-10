import { useRoutes } from 'react-router-dom';

// routes
import config from 'config';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoutes from './AdminRoutes';
import LoginRoutes from './LoginRoutes';
import { NotFoundHandler } from './RoutesController';

export default function CustomRoutes() {
    return useRoutes([LoginRoutes, MainRoutes, AuthenticationRoutes, AdminRoutes, NotFoundHandler], config.basename);
}
