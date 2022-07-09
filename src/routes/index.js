import { useRoutes } from 'react-router-dom';

// routes
import config from 'config';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoutes from './AdminRoutes';
import LoginRoutes from './LoginRoutes';
import { getAccess, getRefresh } from '../components/ApiModules/ApiParts';
import ErrorRoutes from './ErrorRoutes';

const IsLogin = () => {
    const access = getAccess();
    const refresh = getRefresh();
    if (access || refresh) return true;
    return false;
};

export default function CustomRoutes() {
    return useRoutes(
        IsLogin() ? [MainRoutes, AuthenticationRoutes, AdminRoutes, ErrorRoutes] : [LoginRoutes, ErrorRoutes],
        config.basename
    );
}
