import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';
import LoginRoutes from './LoginRoutes';
import AdminRoutes from './AdminRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes(props) {
    return useRoutes([MainRoutes, AuthenticationRoutes, LoginRoutes, AdminRoutes], config.basename);
}
