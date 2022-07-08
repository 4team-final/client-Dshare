// Install
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillCar } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
// User
import { selectByType } from 'store/actions/WebsocketAction';
import { InsideContentFrame, SubContentFrame } from './SelectProductStyle';

const SelectProductService = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [type, setType] = useState(2);

    useEffect(() => {
        if (selected) {
            dispatch(selectByType(type));
            setSelected(false);
        }
    }, [selected]);
    return (
        <SubContentFrame>
            <InsideContentFrame props={type === 0 ? '1565c0' : 'fff'}>
                <MdMeetingRoom
                    style={{ width: '100px', height: '100px' }}
                    onClick={() => {
                        setType(0);
                        setSelected(true);
                    }}
                >
                    회의실
                </MdMeetingRoom>
            </InsideContentFrame>
            <InsideContentFrame props={type === 1 ? '1565c0' : 'fff'}>
                <AiFillCar
                    style={{ width: '100px', height: '100px' }}
                    onClick={() => {
                        setType(1);
                        setSelected(true);
                    }}
                >
                    차량
                </AiFillCar>
            </InsideContentFrame>
        </SubContentFrame>
    );
};

export const SelectProductFrame = () => {
    return <SelectProductService />;
};
