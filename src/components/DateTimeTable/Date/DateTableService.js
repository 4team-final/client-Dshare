import { useState, useEffect } from 'react';
import { DateTableCalendar } from '../DateTimeModules';

const DateTable = (v) => {
    return (
        <>
            <DateTableCalendar props={v} />
        </>
    );
};

export const DateTableService = (v) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    return <>{loading ? <></> : <DateTable props={v} />}</>;
};
