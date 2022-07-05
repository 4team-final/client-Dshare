import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectByType } from 'store/actions/WebsocketAction';
import { HalfWidthFrame, ComponentFrame, CardFrame, ListFrame } from './SelectProductStyle';

const SelectProductCard = () => {
    return <CardFrame></CardFrame>;
};

const SelectProduct = () => {
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
        <ListFrame>
            <CardFrame>
                <SelectProductCard />
                <button
                    onClick={() => {
                        setType(0);
                        setSelected(true);
                    }}
                >
                    회의실
                </button>
            </CardFrame>
            <CardFrame>
                <SelectProductCard />
                <button
                    onClick={() => {
                        setType(1);
                        setSelected(true);
                    }}
                >
                    차량
                </button>
            </CardFrame>
        </ListFrame>
    );
};

const SelectProductService = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    return <>{loading ? <></> : <SelectProduct />}</>;
};

export const SelectProductFrame = () => {
    return (
        <HalfWidthFrame>
            <ComponentFrame>
                <SelectProductService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
