import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ReservationChoice.scss';
import { AiFillCar } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
import { SelectedChangeSave } from 'store/actions/ChangeAction';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import roombtn from 'assets/image/roombutton.png';
import vehiclebtn from 'assets/image/vehiclebutton.png';

function ReservationChoice() {
    const dispatch = useDispatch();
    const changeStoreSelect = useSelector((state) => state.changeReducer.selected);

    useEffect(() => {
        if (changeStoreSelect === 0 || changeStoreSelect === 1) {
            if (changeStoreSelect === 0) {
                setABC('filled');
                setABC2('outlined');
                setcolor('#fff');
                setcolor2('#1296ec');
            }
            if (changeStoreSelect === 1) {
                setABC('outlined');
                setABC2('filled');
                setcolor('#1296ec');
                setcolor2('#fff');
            }
        }
    }, [changeStoreSelect]);

    const handle = (data) => {
        dispatch(SelectedChangeSave(data));
    };
    const [abc, setABC] = useState('filled');
    const [abc2, setABC2] = useState('outlined');

    const [color, setcolor] = useState('#fff');
    const [color2, setcolor2] = useState('#1296ec');

    return (
        <div className="choice">
            {/* <div className="good">
                <MdMeetingRoom onClick={() => handle(0)} className="car" />
                회의실
            </div>
            <div className="good">
                <AiFillCar onClick={() => handle(1)} className="room" />
                차량
            </div> */}
            <Stack direction="row" spacing={1}>
                <Chip
                    sx={{ color: color, border: '1px solid #1296ec' }}
                    color="primary"
                    onClick={() => handle(0)}
                    icon={<MdMeetingRoom />}
                    label="회의실"
                    variant={abc}
                />
                <Chip
                    sx={{ color: color2, border: '1px solid #1296ec' }}
                    color="primary"
                    onClick={() => handle(1)}
                    icon={<AiFillCar />}
                    label="차량"
                    variant={abc2}
                />
            </Stack>
        </div>
    );
}
export default ReservationChoice;
