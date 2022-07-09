// Install
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// User
import {
    BackFrame,
    ModalSection,
    ModalTitle,
    ModalCloseButton,
    ModalContent,
    ModalFrameBody,
    ModalFrameTitle,
    ModalFrameContent,
    ModalCheckButton,
    CustomButton,
    TextTitle,
    TextContent,
    ContentFrame,
    SubContentFrame,
    ImgCard,
    InsideFrame,
    TextFrame,
    ModalTag
} from './ReservationModalStyle';
import { ImgCardList } from '../Table/SelectTableService';
import { selectCompleteRoomReservation, selectCompleteVehicleReservation } from '../../../store/actions/CalendarAction';

const ModalFrame = ({ children, visible, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (visible) {
            setIsOpen(true);
        } else {
            setTimeout(() => setIsOpen(false), 150);
        }
    }, [visible]);
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <BackFrame visible={visible} onClick={onClose} />
            <ModalSection visible={visible}>
                <ModalTitle>
                    <ModalCloseButton type={'button'} onClick={onClose}>
                        X
                    </ModalCloseButton>
                </ModalTitle>
                <ModalContent>{children}</ModalContent>
                <ModalCheckButton>
                    <CustomButton onClick={onClose}>확인</CustomButton>
                </ModalCheckButton>
            </ModalSection>
        </>
    );
};

export const ModalInsideText = (props) => {
    const dispatch = useDispatch();
    const [dataSet, setDataSet] = useState();
    const inputRoomStore = useSelector((state) => state.calendarReducer.completeRoomReservation);
    const inputVehicleStore = useSelector((state) => state.calendarReducer.completeVehicleReservation);

    useEffect(() => {
        if (props) {
            dispatch(props.type === 0 ? selectCompleteRoomReservation() : selectCompleteVehicleReservation());
        }
    }, [props]);
    useEffect(() => {
        if (props.type === 0) {
            if (inputRoomStore && inputRoomStore.data != null && inputRoomStore.data.value) {
                setDataSet(inputRoomStore.data.value[0]);
            }
        } else if (props.type === 1) {
            if (inputVehicleStore && inputVehicleStore.data != null && inputVehicleStore.data.value) {
                setDataSet(inputVehicleStore.data.value[0]);
            }
        }
    }, [inputVehicleStore, inputRoomStore, props, dataSet]);
    return (
        <ModalFrameBody>
            <ModalFrameContent>
                {dataSet !== undefined ? (
                    props.type === 0 ? (
                        <InsideFrame>
                            <ImgCard>
                                <div style={{ marginBottom: '20px' }}>
                                    {dataSet.reservationResDTO.room && dataSet.reservationResDTO.room.roomImgResDTOList.length ? (
                                        <ImgCardList
                                            data={dataSet.reservationResDTO.room.roomImgResDTOList}
                                            width={'700'}
                                            height={'auto'}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <InsideFrame>
                                    <TextFrame>
                                        <TextContent props={'18'}>예약자 : {dataSet.reservationResDTO.emp.name}</TextContent>
                                        <TextContent props={'18'}>사번 : {dataSet.reservationResDTO.emp.empNo}</TextContent>
                                    </TextFrame>
                                    <TextFrame>
                                        <TextTitle props={'18'}>제목 : {dataSet.reservationResDTO.title}</TextTitle>
                                        <TextTitle props={'18'}>내용 : {dataSet.reservationResDTO.reason}</TextTitle>
                                    </TextFrame>
                                </InsideFrame>
                            </ImgCard>
                            <SubContentFrame>
                                <ModalFrameTitle>예약 완료</ModalFrameTitle>
                                <TextContent props={'20'}>{dataSet.reservationResDTO.room.content}</TextContent>
                                <ContentFrame>
                                    <TextContent props={'19'}>{dataSet.reservationResDTO.room.categoryName}</TextContent>
                                    <TextFrame>
                                        <TextContent props={'18'}>방번호 : {dataSet.reservationResDTO.room.roomNo}</TextContent>
                                        <TextContent props={'18'}>인원수 : {dataSet.reservationResDTO.room.capacity}</TextContent>
                                    </TextFrame>
                                </ContentFrame>
                                <ContentFrame>
                                    {dataSet.reservationResDTO.room.roomObjectResDTOList ? (
                                        dataSet.reservationResDTO.room.roomObjectResDTOList.map((v, i) => {
                                            return (
                                                <div key={i}>{v.name !== ' ' && v.name !== '' ? <ModalTag>{v.name}</ModalTag> : <></>}</div>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </ContentFrame>
                                <TextContent props={'16'}>
                                    예약시간 : {dataSet.reservationResDTO.startedAt} ~ {dataSet.reservationResDTO.endedAt}
                                </TextContent>
                                <div style={{ marginTop: '10px' }}>등록일 : {dataSet.reservationResDTO.createdAt}</div>
                            </SubContentFrame>
                        </InsideFrame>
                    ) : (
                        <InsideFrame>
                            <ImgCard>
                                <div style={{ marginBottom: '20px' }}>
                                    {dataSet && dataSet.imgList.length ? (
                                        <ImgCardList data={dataSet.imgList} width={'700'} height={'auto'} />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <InsideFrame>
                                    <TextFrame>
                                        <TextContent props={'18'}>예약자 : {dataSet.ename}</TextContent>
                                        <TextContent props={'18'}>사번 : {dataSet.empNo}</TextContent>
                                    </TextFrame>
                                    <TextFrame>
                                        <TextTitle props={'18'}>제목 : {dataSet.title}</TextTitle>
                                        <TextTitle props={'18'}>내용 : {dataSet.reason}</TextTitle>
                                    </TextFrame>
                                </InsideFrame>
                            </ImgCard>
                            <SubContentFrame>
                                <ModalFrameTitle>예약 완료</ModalFrameTitle>
                                <TextContent props={'20'}>{dataSet.vname}</TextContent>
                                <ContentFrame>
                                    <TextContent props={'19'}>{dataSet.model}</TextContent>
                                    <TextFrame>
                                        <TextContent props={'18'}>차량번호 : {dataSet.vnumber}</TextContent>
                                        <TextContent props={'18'}>탑승인원 : {dataSet.capacity}</TextContent>
                                        <TextContent props={'18'}>차량색상 : {dataSet.color}</TextContent>
                                    </TextFrame>
                                </ContentFrame>
                                <TextContent props={'16'}>
                                    예약시간 : {dataSet.startedAt} ~ {dataSet.endedAt}
                                </TextContent>
                                <div style={{ marginTop: '10px' }}>등록일 : {dataSet.reservationCreatedAt}</div>
                            </SubContentFrame>
                        </InsideFrame>
                    )
                ) : (
                    <></>
                )}
            </ModalFrameContent>
        </ModalFrameBody>
    );
};

const ModalPage = (props) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const isCloseHandler = () => {
        setIsOpen(false);
        navigate('/main/dashboard/default');
        location.reload();
    };
    useEffect(() => {
        setIsOpen(props.open);
    }, [props]);
    return (
        <div>
            <ModalFrame visible={isOpen} onClose={isCloseHandler}>
                <ModalInsideText type={props.type} />
            </ModalFrame>
        </div>
    );
};

export const ReservationModal = (props) => {
    return (
        <>
            <ModalPage type={props.type} open={props.open} />
        </>
    );
};
