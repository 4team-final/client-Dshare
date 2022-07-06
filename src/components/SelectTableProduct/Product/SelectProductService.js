import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectByType } from 'store/actions/WebsocketAction';
import { InsideContentFrame, SubContentFrame } from './SelectProductStyle';
import { AiFillCar } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';

const SelectProductCard = () => {
    return <CardFrame></CardFrame>;
};

const SelectProductService = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [type, setType] = useState(0);

    useEffect(() => {
        if (selected) {
            dispatch(selectByType(type));
            setSelected(false);
        }
    }, [selected]);
    return (
        <SubContentFrame>
            <InsideContentFrame>
                <MdMeetingRoom
                    style={{ width: '120px', height: '120px' }}
                    onClick={() => {
                        setType(0);
                        setSelected(true);
                    }}
                >
                    회의실
                </MdMeetingRoom>
            </InsideContentFrame>
            <InsideContentFrame>
                <AiFillCar
                    style={{ width: '120px', height: '120px' }}
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
