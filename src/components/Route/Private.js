import React from 'react';
import { Route } from 'react-router-dom';
import IsLogin from './IsLogin';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (IsLogin() ? <Component {...props} /> : <Redirect to="/login" />)} />;
};
export default PrivateRoute;
