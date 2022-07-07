// assets
import { IconDashboard } from '@tabler/icons';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// constant
const icons = { IconDashboard, PersonAddAltIcon, FormatListBulletedIcon, AutoFixHighIcon, DeleteOutlineIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const adminEmp = {
    id: 'EmpInfo',
    title: 'EmpInfo',
    caption: '사원 관리 탭',
    type: 'admin',
    children: [
        {
            id: 'EmpCInfo',
            title: '사원 등록',
            type: 'item',
            url: '/main/admin/CEmp',
            icon: icons.PersonAddAltIcon,
            breadcrumbs: false
        },
        {
            id: 'EmpRInfo',
            title: '사원 조회',
            type: 'item',
            url: '/main/admin/REmp',
            icon: icons.FormatListBulletedIcon,
            breadcrumbs: false
        }
    ]
};

export default adminEmp;
