// material-ui
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import { useSelector } from 'react-redux';
import changeReducer from 'store/reducers/ChangeReducer';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const admin = useSelector((state) => state.changeReducer.adminPage);
    if (admin) {
        const navItems = menuItem.adminItems.map((item) => {
            switch (item.type) {
                case 'admin':
                    return <NavGroup key={item.id} item={item} />;
                default:
                    return (
                        <Typography key={item.id} variant="h6" color="error" align="center">
                            Menu Items Error
                        </Typography>
                    );
            }
        });
        return <>{navItems}</>;
    } else {
        const navItems = menuItem.items.map((item) => {
            switch (item.type) {
                case 'group':
                    return <NavGroup key={item.id} item={item} />;
                default:
                    return (
                        <Typography key={item.id} variant="h6" color="error" align="center">
                            Menu Items Error
                        </Typography>
                    );
            }
        });
        return <>{navItems}</>;
    }
};

export default MenuList;
