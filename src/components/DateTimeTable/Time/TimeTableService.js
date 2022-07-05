import { useState, useEffect } from 'react';
import { HalfWidthFrame, ComponentFrame, ListFrame, ItemFrame, CardFrame } from './TimeTableStyle';
import { useSelector } from 'react-redux';
import { convertToTime } from 'store/actions/WebsocketAction';

const TimeTableCard = (v) => {
    const [lock, setLock] = useState(false);
    const [used, setUsed] = useState('fff');

    useEffect(() => {
        setLock(v.props === 1 ? true : false);
    }, [v]);
    useEffect(() => {
        setUsed(lock ? '1296ec' : 'fff');
    }, [lock]);
    return <CardFrame props={used} />;
};

const TimeTable = () => {
    const [dataList, setDataList] = useState([]);
    const [sendData, setSendData] = useState([]);
    const timeStore = useSelector((state) => state.websocketReducer.isSeatData);
    const convertDataList = (i) => {
        const filterData = dataList.map((v, index) => (i === index ? { ...v, isSeat: 1 } : v));
        setDataList(filterData);
    };
    const setTimeTable = () => {
        let copyList = [];
        for (let i = 0; i < dataList.length; i++) {
            copyList.push(dataList[i].isSeat);
        }
        setSendData(copyList);
        dispatch(convertToTime(sendData));
    };

    useEffect(() => {
        if (timeStore && timeStore.data) {
            setDataList(timeStore.data);
        }
    }, [timeStore]);
    return (
        <div>
            <ListFrame>
                {dataList?.length > 0 ? (
                    dataList?.map((item, i) => (
                        <ItemFrame key={i} onClick={() => convertDataList(i)}>
                            {item.time}
                            <TimeTableCard props={item.isSeat} />
                        </ItemFrame>
                    ))
                ) : (
                    <></>
                )}
            </ListFrame>
            <button onClick={setTimeTable}>선택</button>
            <button>선택</button>
        </div>
    );
};

const TimeTableService = () => {
    const isSeatStore = useSelector((state) => state.websocketReducer.validisseat);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isSeatStore && isSeatStore.ready) {
            setLoading(false);
        }
    }, [isSeatStore]);
    return <>{loading ? <></> : <TimeTable />}</>;
};

export const TimeTableFrame = () => {
    return (
        <HalfWidthFrame height={100}>
            <ComponentFrame height={80}>
                <TimeTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
