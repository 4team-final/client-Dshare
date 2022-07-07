import dashboard from './dashboard';
import MyPage from './MyPage';
import Reservation from './Reservation';
import ResCheck from './ResCheck';
import admin from './admin';
import adminEmp from './adminEmp';
import adminItem from './adminItem';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, MyPage, Reservation, ResCheck],
    adminItems: [admin, adminEmp, adminItem]
};

export default menuItems;
