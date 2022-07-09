// assets
import { IconKey, IconEye } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconEye
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const MyPage = {
    id: 'pages',
    title: '미리보기',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: '회의실/차량 보기',
            type: 'collapse',
            icon: icons.IconEye,

            children: [
                {
                    id: 'room',
                    title: '회의실/차량 보기',
                    type: 'item',
                    url: '/main/room/vehicle/list'
                    // ,
                    // target: true
                }
            ]
        }
    ]
};

export default MyPage;
