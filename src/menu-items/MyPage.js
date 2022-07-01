// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const MyPage = {
    id: 'pages',
    title: 'MyPage',
    caption: 'logout & mypage',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'logout',
                    title: 'Logout',
                    type: 'item',
                    url: '/logout',
                    target: true
                },
                {
                    id: 'Mypage',
                    title: 'Mypage',
                    type: 'item',
                    url: '/main/mypage',
                    target: true
                }
            ]
        }
    ]
};

export default MyPage;
