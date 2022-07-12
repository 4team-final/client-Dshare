// Install
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
// User
import { convertArrayToTimeTable, convertToTime } from 'store/actions/WebsocketAction';
import { HalfWidthFrame, ComponentFrame, ListFrame, ItemFrame, CardFrame, CustomButton, TextTitle } from './TimeTableStyle';

const TimeTableCard = (v) => {
    const [used, setUsed] = useState('fff');
    useEffect(() => {
        setUsed(v.props === 1 ? '1296ec' : v.props === 2 ? '673ab7' : 'fff');
    }, [v]);
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
        let filterData = [...dataList];
        let copyList = dataList.filter((v) => v.isSeat === 2);
        console.log(copyList);
        if (copyList.length < 2) {
            filterData = dataList.map((v, index) => (i === index && v.isSeat !== 1 ? { ...v, isSeat: 2 } : v));
        } else {
            let start = 0;
            let end = 0;
            for (let j = 0; j < filterData.length; j++) {
                if (filterData[j].isSeat === 2) {
                    start = j;
                    break;
                }
            }
            for (let j = filterData.length - 1; j >= 0; j--) {
                if (filterData[j].isSeat === 2) {
                    end = j;
                    break;
                }
            }
            for (let j = start; j <= end; j++) {
                if (filterData[j].isSeat === 1) {
                    continue;
                }
                filterData[j] = { ...filterData[j], isSeat: 2 };
            }
        }
        setDataList(filterData);
    };
    const setTimeTable = () => {
        let copyList = [];
        let copyList2 = [];
        for (let i = 0; i < dataList.length; i++) {
            copyList.push(dataList[i]);
            copyList2.push(dataList[i].isSeat === 0 ? 0 : 1);
        }
        setSendData([...copyList2]);
        const fliterDataList = copyList.map((v, i) => (v.isSeat !== 2 ? { ...v, isSeat: 0 } : { ...v, isSeat: 1 }));
        const filterCopyData = fliterDataList.filter((v) => v.isSeat === 1);
        let startUid = moment(filterCopyData[0].uid).format('YYYY-MM-DD');
        let endUid = moment(filterCopyData[filterCopyData.length - 1].uid).format('YYYY-MM-DD');
        let start = filterCopyData[0].time.length < 5 ? '0' + filterCopyData[0].time : filterCopyData[0].time;
        let end =
            filterCopyData[filterCopyData.length - 1].time.length < 5
                ? '0' + filterCopyData[filterCopyData.length - 1].time
                : filterCopyData[filterCopyData.length - 1].time;
        let endTime =
            end.substring(3) === '00'
                ? end.substring(0, 3) + '30'
                : end.substring(0, 2) === '23'
                ? '00:00'
                : Number(end.substring(0, 2)) + 1 + ':00';
        setTransData({
            start: startUid + 'T' + start + ':00',
            end: endUid + 'T' + endTime + ':00'
        });
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
    const nextStepTwoToThreeStore = useSelector((state) => state.nextReducer.twotothree);
    const [loading, setLoading] = useState(true);
    const resetStore = useSelector((state) => state.websocketReducer.resetdata);

    useEffect(() => {
        if (resetStore && resetStore.ready) {
            setLoading(true);
        }
    }, [resetStore]);

    useEffect(() => {
        if (isSeatStore && isSeatStore.ready && nextStepTwoToThreeStore && nextStepTwoToThreeStore.ready) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [isSeatStore, nextStepTwoToThreeStore]);
    return (
        <>
            {loading ? (
                <></>
            ) : (
                <HalfWidthFrame visible={!loading} height={150}>
                    <ComponentFrame height={100}>
                        <TimeTable />
                    </ComponentFrame>
                </HalfWidthFrame>
            )}
        </>
    );
};

export const TimeTableFrame = () => {
    return <TimeTableService />;
};
