import React, { useEffect, useRef, useState } from 'react';
import './ReservationStatusPage.scss';
import Timer from 'components/Timer/Timer.js';
import MyReservationList from 'components/reservation/MyReservationList.js';
import ReservationChoice from 'components/reservation/ReservationChoice';
import MyReservationDetail from 'components/reservation/MyReservationDetail';
import CalendarFrame from 'components/Calendar/index';
import { BsCalendarDate } from 'react-icons/bs';
import Loading from 'components/Loading';

function ReservationStatusPage() {
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 400);
    }, []);
    return (
        <>
            {isLoading ? (
                <>
                    <Loading center={true} text={'내 예약 조회중'} />
                </>
            ) : (
                <>
                    <div className="layout">
                        <div className="left">
                            {/* <Timer /> */}
                            <MyReservationDetail />
                        </div>

                        <div className="right">
                            <ReservationChoice />
                            <MyReservationList />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
export default ReservationStatusPage;
