import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllByRoom, findAllByVehicle } from 'store/actions/CalendarAction';
import { selectByVId, selectByRId } from 'store/actions/WebsocketAction';
import { HalfWidthFrame, ComponentFrame, CardFrame, ListFrame, ItemFrame } from './SelectTableStyle';
import SimpleSlider from '../../reservation/SimpleSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RoomTableCard = (item) => {
    return (
        <div>
            <div>
                {item.props && item.props.imgList.length ? (
                    <>
                        <div className="sliderLayout">
                            <SimpleSlider data={item.props.imgList} style={{ width: '100px', height: '50px' }} />
                        </div>
                    </>
                ) : (
                    <div className="sliderLayout"></div>
                )}
                {/* <ImgCard alt="차량이미지" src={`${item.props.imgList}`} /> */}
                <div>
                    {item.props.roomId}
                    {item.props.content}
                    {item.props.categoryName}
                    {item.props.roomNo}
                    {item.props.capacity}
                </div>
            </div>
        </div>
    );
};

const VehicleTableCard = (item) => {
    return (
        <div>
            {item.props.id}
            <div>
                {item.props && item.props.imgList.length ? (
                    <>
                        <div className="sliderLayout">
                            <SimpleSlider data={item.props.imgList} style={{ width: '100px', height: '50px' }} />
                        </div>
                    </>
                ) : (
                    <div className="sliderLayout"></div>
                )}
                {/* <ImgCard alt="차량이미지" src={`${item.props.imgList}`} /> */}
                <div>
                    {item.props.name}
                    {item.props.number}
                    {item.props.model}
                    {item.props.capacity}
                </div>
            </div>
        </div>
    );
};

const SelectRoomTable = (item) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [rid, setRId] = useState(0);
    useEffect(() => {
        if (selected) {
            dispatch(selectByRId(rid));
            setSelected(false);
        }
    }, [selected]);
    return (
        <ListFrame>
            {item ? (
                item.props.map((i) => (
                    <ItemFrame key={i.roomId}>
                        <CardFrame props={'fff'}>
                            <RoomTableCard props={i} />
                            <button
                                onClick={() => {
                                    setRId(i.roomId);
                                    setSelected(true);
                                }}
                            >
                                선택
                            </button>
                        </CardFrame>
                    </ItemFrame>
                ))
            ) : (
                <></>
            )}
        </ListFrame>
    );
};

const SelectVehicleTable = (item) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [vid, setVId] = useState(0);
    useEffect(() => {
        if (selected) {
            dispatch(selectByVId(vid));
            setSelected(false);
        }
    }, [selected]);
    return (
        <ListFrame>
            {item ? (
                item.props.map((i) => (
                    <ItemFrame key={i.id}>
                        <CardFrame props={'fff'}>
                            <VehicleTableCard props={i} />
                            <button
                                onClick={() => {
                                    setVId(i.id);
                                    setSelected(true);
                                }}
                            >
                                선택
                            </button>
                        </CardFrame>
                    </ItemFrame>
                ))
            ) : (
                <></>
            )}
        </ListFrame>
    );
};

const SelectTableService = () => {
    const dispatch = useDispatch();
    const productTypeStore = useSelector((state) => state.websocketReducer.product);
    const dateTimeStore = useSelector((state) => state.websocketReducer.uid);
    const vehicleStore = useSelector((state) => state.calendarReducer.allVehicle);
    const roomStore = useSelector((state) => state.calendarReducer.allRoom);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const [type, setType] = useState(null);

    useEffect(() => {
        if (productTypeStore && productTypeStore.data != null) {
            setType(productTypeStore.data);
        }
    }, [productTypeStore]);

    useEffect(() => {
        if (dateTimeStore && dateTimeStore.data != null) {
            setLoading(false);
        }
    }, [dateTimeStore]);
    useEffect(() => {
        dispatch(findAllByVehicle());
        dispatch(findAllByRoom());
    }, []);
    useEffect(() => {
        if (type !== null) {
            if (type === 1) {
                if (vehicleStore.data) {
                    setItem([...vehicleStore.data.data.value]);
                }
            } else {
                if (roomStore.data) {
                    setItem([...roomStore.data.data.value]);
                }
            }
        }
    }, [type, vehicleStore, roomStore]);
    return <>{loading && item ? <></> : type === 0 ? <SelectRoomTable props={item} /> : <SelectVehicleTable props={item} />}</>;
};

export const SelectTableFrame = () => {
    return (
        <HalfWidthFrame>
            <ComponentFrame>
                <SelectTableService />
            </ComponentFrame>
        </HalfWidthFrame>
    );
};
