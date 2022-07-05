import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// project imports
import Customization from '../Customization';
import { getUserProfile } from 'components/ApiModules/ApiHandler';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
    return (
        <>
            <Outlet />
            <Customization />
        </>
    );
};
export default MinimalLayout;
