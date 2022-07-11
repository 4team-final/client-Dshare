// assets
import { IconDashboard } from '@tabler/icons';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StorefrontIcon from '@mui/icons-material/Storefront';
// constant
const icons = {
    IconDashboard,
    StorefrontIcon,
    PersonAddAltIcon,
    FormatListBulletedIcon,
    AutoFixHighIcon,
    DirectionsCarIcon,
    DeleteOutlineIcon
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const adminItem = {
    id: 'ResourceInfo',
    title: 'ResourceInfo',
    caption: '자원 관리 탭',
    type: 'admin',
    children: [
        {
            id: 'RoomInfo',
            title: '회의실 정보',
            type: 'item',
            url: '/main/admin/RV',
            icon: icons.StorefrontIcon,
            breadcrumbs: false
        },

        {
            id: 'VehicleInfo',
            title: '차량 정보',
            type: 'item',
            url: '/main/admin/RV',
            icon: icons.DirectionsCarIcon,
            breadcrumbs: false
        }
    ]
};

export default adminItem;
