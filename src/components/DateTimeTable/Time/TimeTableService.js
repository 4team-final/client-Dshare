import { useState, useEffect } from 'react';
import { HalfWidthFrame, ComponentFrame, ListFrame, ItemFrame, CardFrame, CustomButton, TextTitle } from './TimeTableStyle';
import { useSelector, useDispatch } from 'react-redux';
import { convertArrayToTimeTable, convertToTime } from 'store/actions/WebsocketAction';

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
    const dispatch = useDispatch();
    const [dataList, setDataList] = useState([]);
    const [defaultList, setDefaultList] = useState([]);
    const [sendData, setSendData] = useState([]);
    const [transData, setTransData] = useState();
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
        setSendData([...copyList]);

        const filterCopyData = dataList.filter((v, i) => v.isSeat !== copyList[i].isSeat && v.isSeat !== 0);
        let start = filterCopyData[0];
        let end = filterCopyData[filterCopyData.length - 1];
        setTransData({ start: start.uid + 'T' + start.time, end: end.uid + 'T' + end.time });
    };
    const resetTimeTable = () => {
        setDataList(defaultList);
    };
    useEffect(() => {
        if (sendData.length > 0) {
            dispatch(convertToTime(sendData));
        }
    }, [sendData]);

    useEffect(() => {
        if (timeStore && timeStore.data) {
            setDataList(timeStore.data);
            setDefaultList(timeStore.data);
        }
    }, [timeStore]);

    useEffect(() => {
        dispatch(convertArrayToTimeTable(transData));
    }, [transData]);
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
            <CustomButton onClick={setTimeTable}>선택</CustomButton>
            <CustomButton onClick={resetTimeTable}>초기화</CustomButton>
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
    return <>{loading ? <TextTitle props={'25'}>날짜와 자원을 먼저 선택해주세요</TextTitle> : <TimeTable />}</>;
};

export const TimeTableFrame = () => {
    return (
        <HalfWidthFrame height={120}>
            <ComponentFrame height={100}>
                <TimeTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
