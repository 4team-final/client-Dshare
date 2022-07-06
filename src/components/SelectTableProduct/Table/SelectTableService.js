import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllByRoom, findAllByVehicle } from 'store/actions/CalendarAction';
import { selectByVId, selectByRId } from 'store/actions/WebsocketAction';
import {
    HalfWidthFrame,
    ComponentFrame,
    CardFrame,
    ListFrame,
    ItemFrame,
    ImgCard,
    InsideFrame,
    TextFrame,
    TextTitle,
    TextContent,
    ContentFrame,
    SubContentFrame,
    CustomButton,
    TextSubTitle
} from './SelectTableStyle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ImgCardList(props) {
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        setImgs(props.data || props);
    }, [props]);

    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <ImgCard>
            <Slider {...settings}>
                {imgs?.length > 0 &&
                    imgs?.map((item) => {
                        return (
                            <ImgCard>
                                <img
                                    src={item?.imgPath || item}
                                    alt="자원이미지"
                                    style={{ height: '100%', width: '100%', borderRadius: '20px' }}
                                />
                            </ImgCard>
                        );
                    })}
            </Slider>
        </ImgCard>
    );
}

const RoomTableCard = (item) => {
    return (
        <div>
            <InsideFrame>
                {item.props && item.props.imgList.length ? <ImgCardList data={item.props.imgList} /> : <></>}
                <TextFrame>
                    <TextTitle props={'25'}>{item.props.content}</TextTitle>
                    <ContentFrame>
                        <SubContentFrame>
                            <TextContent props={'20'}>{item.props.categoryName}</TextContent>
                        </SubContentFrame>
                        <SubContentFrame>
                            <TextContent props={'18'}>방번호 : {item.props.roomNo}</TextContent>
                            <TextContent props={'18'}>인원수 : {item.props.capacity}</TextContent>
                        </SubContentFrame>
                    </ContentFrame>
                </TextFrame>
            </InsideFrame>
        </div>
    );
};

const VehicleTableCard = (item) => {
    return (
        <div>
            <InsideFrame>
                {item.props && item.props.imgList.length ? <ImgCardList data={item.props.imgList} /> : <></>}
                <TextFrame>
                    <TextTitle props={'30'}>{item.props.name}</TextTitle>
                    <ContentFrame>
                        <SubContentFrame></SubContentFrame>
                        <SubContentFrame>
                            <TextContent props={'18'}>차종 : {item.props.model}</TextContent>
                            <TextContent props={'15'}>차량 번호 : {item.props.number}</TextContent>
                            <TextContent props={'18'}>탑승 인원 : {item.props.capacity}</TextContent>
                        </SubContentFrame>
                    </ContentFrame>
                </TextFrame>
            </InsideFrame>
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
                            <CustomButton
                                onClick={() => {
                                    setRId(i.roomId);
                                    setSelected(true);
                                }}
                            >
                                선택
                            </CustomButton>
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
        <div>
            <ListFrame>
                {item ? (
                    item.props.map((i) => (
                        <ItemFrame key={i.id}>
                            <CardFrame props={'fff'}>
                                <VehicleTableCard props={i} />
                                <CustomButton
                                    onClick={() => {
                                        setVId(i.id);
                                        setSelected(true);
                                    }}
                                >
                                    선택
                                </CustomButton>
                            </CardFrame>
                        </ItemFrame>
                    ))
                ) : (
                    <></>
                )}
            </ListFrame>
        </div>
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
    return (
        <>
            {loading && item ? (
                <ComponentFrame>
                    <TextSubTitle props={'25'}>날짜를 먼저 선택해주세요</TextSubTitle>
                </ComponentFrame>
            ) : type === 0 ? (
                <ComponentFrame>
                    <SelectRoomTable props={item} />
                </ComponentFrame>
            ) : (
                <ComponentFrame>
                    <SelectVehicleTable props={item} />
                </ComponentFrame>
            )}
        </>
    );
};

export const SelectTableFrame = () => {
    return (
        <HalfWidthFrame>
            <SelectTableService />
        </HalfWidthFrame>
    );
};
