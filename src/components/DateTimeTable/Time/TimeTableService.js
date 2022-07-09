// Install
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
// User
import { convertArrayToTimeTable, convertToTime } from 'store/actions/WebsocketAction';
import { HalfWidthFrame, ComponentFrame, ListFrame, ItemFrame, CardFrame, CustomButton, TextTitle } from './TimeTableStyle';

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
    const resetStore = useSelector((state) => state.websocketReducer.resetdata);
    const convertDataList = (i) => {
        const filterData = dataList.map((v, index) => (i === index ? { ...v, isSeat: 1 } : v));
        setDataList(filterData);
    };
    const setTimeTable = () => {
        let copyList = [];
        let copyList2 = [];
        for (let i = 0; i < dataList.length; i++) {
            copyList.push(dataList[i]);
            copyList2.push(dataList[i].isSeat);
        }
        setSendData([...copyList2]);
        const fliterDataList = copyList.map((v, i) => (v.isSeat === 1 && v.isSeat === defaultList[i].isSeat ? { ...v, isSeat: 0 } : v));
        const filterCopyData = fliterDataList.filter((v) => v.isSeat === 1);
        let startUid = moment(filterCopyData[0].uid).format('YYYY-MM-DD');
        let endUid = moment(filterCopyData[filterCopyData.length - 1].uid).format('YYYY-MM-DD');
        let start = filterCopyData[0].time.length < 5 ? '0' + filterCopyData[0].time : filterCopyData[0].time;
        let endTime =
            filterCopyData[0].time.substring(3) === '00'
                ? filterCopyData[0].time.substring(0, 3) + '30'
                : filterCopyData[0].time.substring(0, 2) === '23'
                ? '00:00'
                : Number(filterCopyData[0].time.substring(0, 2)) + 1 + ':00';
        let end = filterCopyData[filterCopyData.length - 1].time.length < 5 ? '0' + endTime : endTime;
        setTransData({
            start: startUid + 'T' + start + ':00',
            end: endUid + 'T' + end + ':00'
        });
    };
    const resetTimeTable = () => {
        setDataList(defaultList);
    };
    useEffect(() => {
        if (resetStore && resetStore.ready) {
            setSendData([]);
            setDataList([]);
        }
    }, [resetStore]);
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
    const resetStore = useSelector((state) => state.websocketReducer.resetdata);

    useEffect(() => {
        if (resetStore && resetStore.ready) {
            setLoading(true);
        }
    }, [resetStore]);

    useEffect(() => {
        if (isSeatStore && isSeatStore.ready) {
            setLoading(false);
        }
    }, [isSeatStore]);
    return <>{loading ? <TextTitle props={'25'}>날짜와 자원을 먼저 선택해주세요</TextTitle> : <TimeTable />}</>;
};

export const TimeTableFrame = () => {
    return (
        <HalfWidthFrame height={150}>
            <ComponentFrame height={100}>
                <TimeTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
