import { useEffect, useState } from 'react';
import { CardFrame, ItemFrame, ListFrame } from './TimeTableStyle';
import { dataVehicle, dataRoom } from './TimeModel';

const TimeCard = (props) => {
    const [lock, setLock] = useState(false);
    const [used, setUsed] = useState('fff');
    useEffect(() => {
        setLock(props === 1 ? true : false);
    }, [props]);
    useEffect(() => {
        setUsed(lock ? '1296ec' : 'fff');
    }, [lock]);
    return <CardFrame props={used} />;
};

export const TimeTableContent = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.value === 1 ? dataVehicle : dataRoom);
    }, [props]);
    return (
        <ListFrame>
            {data ? (
                data.map((item) => {
                    return (
                        <ItemFrame>
                            {item.k}
                            <TimeCard props={item.v}>시발</TimeCard>
                        </ItemFrame>
                    );
                })
            ) : (
                <></>
            )}
        </ListFrame>
    );
};
