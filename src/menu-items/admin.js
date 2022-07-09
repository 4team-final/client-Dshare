// assets
import { IconDashboard } from '@tabler/icons';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
// constant
const icons = { IconDashboard, DirectionsCarFilledOutlinedIcon, StorefrontTwoToneIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const admin = {
    id: 'ReservationInfo',

    title: 'ReservationInfo',
    caption: '예약 관리 탭',
    type: 'admin',
    children: [
        {
            id: 'RoomResInfo',
            title: '회의실 예약 현황',
            type: 'item',
            url: '/main/admin/RoomResInfo',
            icon: icons.StorefrontTwoToneIcon,
            breadcrumbs: false
        },
        {
            id: 'VehicleResInfo',
            title: '차량 예약 현황',
            type: 'item',
            url: '/main/admin/VehicleResInfo',
            icon: icons.DirectionsCarFilledOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default admin;
