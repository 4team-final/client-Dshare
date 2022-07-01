import React from 'react';
import { Route } from 'react-router-dom';
import IsLogin from './IsLogin';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return <Route {...rest} render={(props) => (IsLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)} />;
};
export default PublicRoute;
