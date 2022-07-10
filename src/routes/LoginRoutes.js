import LoginPage from 'page/login/LoginPage';
import { MainRedirectHandler } from './RoutesController';

const LoginRoutes = {
    path: '/',
    element: MainRedirectHandler(<LoginPage />)
};
export default LoginRoutes;
