import { useState, useEffect } from 'react';
import { ListFrame, ItemFrame } from '../DateTimeTableStyle';
import { TimeTableCard } from '../DateTimeModules';
import { dataVehicle, dataRoom } from '../TimeTableDefault';

const TimeTable = (props) => {
    const [dataList, setDataList] = useState([]);
    const [type, setType] = useState();
    useEffect(() => {
        setType(props.props.props);
        setDataList(type === 1 ? dataVehicle : dataRoom);
    }, [props, type]);
    return (
        <ListFrame>
            {dataList ? (
                dataList.map((item) => (
                    <ItemFrame key={item.k}>
                        {item.k}
                        <TimeTableCard props={item.v} />
                    </ItemFrame>
                ))
            ) : (
                <></>
            )}
        </ListFrame>
    );
};

export const TimeTableService = (v) => {
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (v) {
            setLoading(false);
            setValue(v);
        }
    }, [v]);
    return <>{loading ? <></> : <TimeTable props={value} />}</>;
};
