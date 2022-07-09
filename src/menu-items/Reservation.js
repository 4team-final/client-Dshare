// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import { MdMeetingRoom } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    MdMeetingRoom,
    AiFillCar
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Reservation = {
    id: 'utilities',
    title: '예약하기',
    type: 'group',
    children: [
        {
            id: 'reservation',
            title: '회의실/차량 예약 등록',
            type: 'item',
            url: '/main/emp/reservation',
            icon: icons.MdMeetingRoom,
            breadcrumbs: false
        }
        // {
        //     id: 'vehicle-reserve',
        //     title: '차량 예약',
        //     type: 'item',
        //     url: '/main/reserve/vehicle-reserve',
        //     icon: icons.AiFillCar,
        //     breadcrumbs: false
        // }
    ]
};

export default Reservation;
