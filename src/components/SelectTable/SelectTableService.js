import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllByVehicle } from 'store/actions/CalendarAction';
import { SelectTableCard } from './SelectTableModule';
import { SCardFrame, SListFrame, SItemFrame } from './SelectTableStyle';

const SelectTable = (item) => {
    return (
        <SListFrame>
            {item ? (
                item.props.map((i) => (
                    <SItemFrame key={i.id}>
                        <SCardFrame
                            props={'fff'}
                            onClick={() => {
                                DataSet(i.id);
                            }}
                        >
                            <SelectTableCard props={i} />
                        </SCardFrame>
                    </SItemFrame>
                ))
            ) : (
                <></>
            )}
        </SListFrame>
    );
};

export const SelectTableService = () => {
    const dispatch = useDispatch();
    const vehicleStore = useSelector((state) => state.calendarReducer.allVehicle);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    useEffect(() => {
        dispatch(findAllByVehicle());
        setLoading(false);
    }, []);
    useEffect(() => {
        if (vehicleStore.data) {
            setItem([...vehicleStore.data.data.value]);
        }
    }, [vehicleStore]);
    return <>{loading && item ? <></> : <SelectTable props={item} />}</>;
};

const DataSet = (vid) => {
    return <>{console.log(vid)}</>;
};
