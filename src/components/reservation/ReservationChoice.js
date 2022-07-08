import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ReservationChoice.scss';
import { AiFillCar } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
import { SelectedChangeSave } from 'store/actions/ChangeAction';

function ReservationChoice() {
    const dispatch = useDispatch();

    const handle = (data) => {
        dispatch(SelectedChangeSave(data));
    };

    return (
        <div className="choice">
            <div className="good">
                <MdMeetingRoom onClick={() => handle(0)} className="car" />
                회의실
            </div>
            <div className="good">
                <AiFillCar onClick={() => handle(1)} className="room" />
                차량
            </div>
        </div>
    );
}
export default ReservationChoice;
