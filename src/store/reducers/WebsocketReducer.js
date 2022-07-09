import {
    MSG_ENTER,
    ROOM_ENTER,
    MSG_TALK,
    MSG_DUAL,
    MSG_QUIT,
    ROOM_TALK,
    ROOM_QUIT,
    MSG_DATA,
    SET_UID,
    SET_VID,
    SET_RID,
    SET_EMPNO,
    SET_PRODUCT,
    VALID_IS_SEAT,
    CONVERT_TO_TIME,
    SOCKET_MESSAGE,
    ARRAY_TO_TIMETABLE,
    SET_TITLE,
    SET_CONTENT,
    INIT_DATA
} from 'store/actions/WebsocketAction';

const initialMsg = {
    ready: false,
    data: { type: '', vehicleId: '', uid: '', time: '', empNo: '', message: '' }
};
const initialMsgRoom = {
    ready: false,
    data: { type: '', uid: '', time: '', empNo: '', roomId: '' }
};
const initialSet = {
    loading: false,
    data: null
};
const initialState = {
    enter: initialMsg,
    roomenter: initialMsgRoom,
    talk: initialMsg,
    dual: initialMsg,
    quit: initialMsg,
    rommtalk: initialMsgRoom,
    roomquit: initialMsgRoom,
    isSeatData: initialSet,
    uid: initialSet,
    vid: initialSet,
    rid: initialSet,
    empno: initialSet,
    product: initialSet,
    validisseat: { ready: false },
    converttotime: initialSet,
    socketmessage: initialSet,
    arraytotime: initialSet,
    title: initialSet,
    content: initialSet,
    resetdata: { ready: false }
};

export default function WebsocketReducer(state = initialState, action) {
    switch (action.type) {
        case MSG_ENTER:
            let enter = {
                ready: true,
                data: {
                    type: 'ENTER',
                    vehicleId: action.data.vid,
                    uid: action.data.uid,
                    time: [],
                    empNo: action.data.empno,
                    message: ''
                }
            };
            return {
                ...state,
                enter: enter
            };
        case ROOM_ENTER:
            let roomenter = {
                ready: true,
                data: {
                    type: 'ENTER',
                    uid: action.data.uid,
                    empNo: action.data.empno,
                    roomId: action.data.rid
                }
            };
            return {
                ...state,
                roomenter: roomenter
            };
        case MSG_TALK:
            let talk = {
                ready: true,
                data: {
                    type: 'TALK',
                    vehicleId: action.data.vid,
                    uid: action.data.uid,
                    time: action.data.time,
                    empNo: action.data.empno,
                    message: ''
                }
            };
            return {
                ...state,
                talk: talk
            };
        case MSG_DUAL:
            let dual = {
                ready: true,
                data: {
                    type: 'DUAL',
                    vehicleId: action.data.vid,
                    uid: action.data.uid,
                    time: action.data.time,
                    empNo: action.data.empno,
                    message: action.data.message
                }
            };
            return {
                ...state,
                dual: dual
            };
        case MSG_QUIT:
            let quit = {
                ready: true,
                data: {
                    type: 'QUIT',
                    vehicleId: action.data.vid,
                    uid: action.data.uid,
                    time: [],
                    empNo: action.data.empno,
                    message: ''
                }
            };
            return {
                ...state,
                quit: quit
            };
        case ROOM_TALK:
            let roomtalk = {
                ready: true,
                data: {
                    type: 'TALK',
                    uid: action.data.uid,
                    time: action.data.time,
                    empNo: action.data.empno,
                    roomId: action.data.rid
                }
            };
            return {
                ...state,
                roomtalk: roomtalk
            };
        case ROOM_QUIT:
            let roomquit = {
                ready: true,
                data: {
                    type: 'QUIT',
                    uid: action.data.uid,
                    time: [],
                    empNo: action.data.empno,
                    roomId: action.data.roomId
                }
            };
            return {
                ...state,
                roomquit: roomquit
            };
        case MSG_DATA:
            return {
                ...state,
                isSeatData: {
                    loading: true,
                    data: action.data
                }
            };
        case SET_UID:
            return {
                ...state,
                uid: {
                    loading: true,
                    data: action.uid
                }
            };
        case SET_VID:
            return {
                ...state,
                vid: {
                    loading: true,
                    data: action.vid
                }
            };
        case SET_RID:
            return {
                ...state,
                rid: {
                    loading: true,
                    data: action.rid
                }
            };
        case SET_EMPNO:
            return {
                ...state,
                empno: {
                    loading: true,
                    data: action.empno
                }
            };
        case SET_PRODUCT:
            return {
                ...state,
                product: {
                    loading: true,
                    data: action.product
                }
            };
        case VALID_IS_SEAT:
            return {
                ...state,
                validisseat: {
                    ready: action.ready
                }
            };
        case CONVERT_TO_TIME:
            return {
                ...state,
                converttotime: {
                    loading: true,
                    data: action.data
                }
            };
        case SOCKET_MESSAGE:
            return {
                ...state,
                socketmessage: {
                    loading: true,
                    data: action.data
                }
            };
        case ARRAY_TO_TIMETABLE:
            return {
                ...state,
                arraytotime: {
                    loading: true,
                    data: action.data
                }
            };
        case SET_TITLE:
            return {
                ...state,
                title: {
                    loading: true,
                    data: action.data
                }
            };
        case SET_CONTENT:
            return {
                ...state,
                content: {
                    loading: true,
                    data: action.data
                }
            };
        case INIT_DATA:
            return {
                ...state,
                resetdata: { ready: true },
                isSeatData: initialSet,
                uid: initialSet,
                vid: initialSet,
                rid: initialSet,
                empno: initialSet,
                product: initialSet,
                socketmessage: initialSet,
                arraytotime: initialSet,
                title: initialSet,
                content: initialSet,
                validisseat: { ready: false },
                converttotime: initialSet
            };
        default:
            return state;
    }
}
