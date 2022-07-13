// Install
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillCar } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
// User
import { selectByType } from 'store/actions/WebsocketAction';
import { CardFrame, InsideContentFrame, SubContentFrame } from './SelectProductStyle';

const SelectProductService = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [type, setType] = useState(2);
    useEffect(() => {
        setType(2);
    }, []);
    useEffect(() => {
        if (selected) {
            dispatch(selectByType(type));
            setSelected(false);
        }
    }, [selected]);
    return (
        <SubContentFrame>
            <InsideContentFrame>
                <CardFrame
                    props={type === 0 ? '1296ec' : 'fff'}
                    onClick={() => {
                        setType(0);
                        setSelected(true);
                    }}
                >
                    <MdMeetingRoom style={{ width: '30px', height: '30px', paddingRight: '10px', color: type === 0 ? 'fff' : '000' }} />
                    회의실
                </CardFrame>
            </InsideContentFrame>
            <InsideContentFrame>
                <CardFrame
                    props={type === 1 ? '1296ec' : 'fff'}
                    onClick={() => {
                        setType(1);
                        setSelected(true);
                    }}
                >
                    <AiFillCar style={{ width: '30px', height: '30px', paddingRight: '10px', color: type === 1 ? 'fff' : '000' }} />차 량
                </CardFrame>
            </InsideContentFrame>
        </SubContentFrame>
    );
};

export const SelectProductFrame = () => {
    return <SelectProductService />;
};
