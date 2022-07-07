// assets
import { IconBrandChrome, IconHelp, IconBellRinging } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconBellRinging };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    title: '예약현황',
    type: 'group',
    children: [
        {
            id: 'Room-Reserve',
            title: '나의 회의실 예약 현황',
            type: 'item',
            url: 'main/my/reservation/status',
            icon: icons.IconBellRinging,
            breadcrumbs: false
        }

        // {
        //     id: 'Vehicle-Reserve',
        //     title: '나의 차량 예약 현황',
        //     type: 'item',
        //     url: '/',
        //     icon: icons.IconHelp,
        //     external: true,
        //     target: true
        // }
    ]
};

export default other;
