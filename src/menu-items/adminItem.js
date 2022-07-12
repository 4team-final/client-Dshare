// assets
import { IconDashboard } from '@tabler/icons';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { IconKey, IconEye } from '@tabler/icons';
// constant
const icons = {
    IconDashboard,
    StorefrontIcon,
    PersonAddAltIcon,
    FormatListBulletedIcon,
    AutoFixHighIcon,
    DirectionsCarIcon,
    DeleteOutlineIcon,
    IconEye
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
            title: '회의실 및 차량 정보',
            type: 'item',
            url: '/main/admin/RV',
            icon: icons.IconEye,
            breadcrumbs: false
        }
    ]
};

export default adminItem;
