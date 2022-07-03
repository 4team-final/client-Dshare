import { MSG_TALK, MSG_DUAL, MSG_QUIT, MSG_DATA, SET_UIDANDVID } from 'store/actions/WebsocketAction';

const initialMsg = {
    ready: false,
    data: { type: '', vehicleId: '', uid: '', time: '', empNo: '', message: '' }
};
const initialSet = {
    loading: false,
    data: null
};
const initialState = {
    talk: initialMsg,
    dual: initialMsg,
    quit: initialMsg,
    isSeatData: initialSet,
    userId: initialSet
};

export default function WebsocketReducer(state = initialState, action) {
    switch (action.type) {
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
        case MSG_DATA:
            return {
                ...state,
                isSeatData: {
                    loading: true,
                    data: action.data
                }
            };
        case SET_UIDANDVID:
            return {
                ...state,
                userId: {
                    loading: true,
                    data: {
                        uid: action.uid,
                        vid: action.vid
                    }
                }
            };
        default:
            return state;
    }
}
