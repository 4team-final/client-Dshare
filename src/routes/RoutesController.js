import { Navigate } from 'react-router-dom';
import { getToken } from '../components/ApiModules/ApiParts';
import PermitPage from 'page/exception/permitpage';
import ErrorPage from 'page/exception/errorpage';

const IsLogin = () => {
    const access = getToken('access');
    const refresh = getToken('refresh');
    if (access || refresh) return true;
    return false;
};
export const NotFoundHandler = {
    path: '*',
    element: <ErrorPage />
};
export const MainRedirectHandler = (component) => {
    return IsLogin() ? <Navigate replace to={'/main/dashboard/default'} /> : component;
};
export const AccessDeniedHandler = (component) => {
    return IsLogin() ? component : <PermitPage />;
};
