import { Navigate } from 'react-router-dom';
import { getAccess, getRefresh } from '../components/ApiModules/ApiParts';
import PermitPage from 'page/exception/permitpage';
import ErrorPage from 'page/exception/errorpage';

const IsLogin = () => {
    const access = getAccess();
    const refresh = getRefresh();
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
