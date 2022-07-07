// assets
import { IconDashboard } from '@tabler/icons';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// constant
const icons = { IconDashboard, PersonAddAltIcon, FormatListBulletedIcon, AutoFixHighIcon, DeleteOutlineIcon };

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
            url: '/main/admin/CEmp',
            icon: icons.PersonAddAltIcon,
            breadcrumbs: false
        },

        {
            id: 'VehicleInfo',
            title: '차량 정보',
            type: 'item',
            url: '/main/admin/REmp',
            icon: icons.FormatListBulletedIcon,
            breadcrumbs: false
        }
    ]
};

export default adminItem;
