// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

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
            url: '/',
            icon: icons.IconHelp,
            breadcrumbs: false
        },
        {
            id: 'Vehicle-Reserve',
            title: '나의 차량 예약 현황',
            type: 'item',
            url: '/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
