import { selectByEmpNoAPI } from '../../api/CalendarApi';

export const MSG_ENTER = 'MSG_ENTER';
export const ROOM_ENTER = 'ROOM_ENTER';
export const MSG_TALK = 'MSG_TALK';
export const MSG_DUAL = 'MSG_DUAL';
export const MSG_QUIT = 'MSG_QUIT';
export const ROOM_TALK = 'ROOM_TALK';
export const ROOM_QUIT = 'ROOM_QUIT';
export const MSG_DATA = 'MSG_DATA';
export const SET_UID = 'SET_UID';
export const SET_VID = 'SET_VID';
export const SET_RID = 'SET_RID';
export const SET_EMPNO = 'SET_EMPNO';
export const SET_PRODUCT = 'SET_PRODUCT';
export const VALID_IS_SEAT = 'VALID_IS_SEAT';
export const CONVERT_TO_TIME = 'CONVERT_TO_TIME';
export const SOCKET_MESSAGE = 'SOCKET_MESSAGE';
export const ARRAY_TO_TIMETABLE = 'ARRAY_TO_TIMETABLE';
export const SET_TITLE = 'SET_TITLE';
export const SET_CONTENT = 'SET_CONTENT';

export const socketMsgByReservation = (type, set) => {
    return (dispatch) => {
        try {
            switch (type) {
                case 'ENTER':
                    dispatch({ type: MSG_ENTER, data: set });
                    break;
                case 'R_ENTER':
                    dispatch({ type: ROOM_ENTER, data: set });
                    break;
                case 'TALK':
                    dispatch({ type: MSG_TALK, data: set });
                    break;
                case 'DUAL':
                    dispatch({ type: MSG_DUAL, data: set });
                    break;
                case 'QUIT':
                    dispatch({ type: MSG_QUIT, data: set });
                    break;
                case 'R_TALK':
                    dispatch({ type: ROOM_TALK, data: set });
                    break;
                case 'R_QUIT':
                    dispatch({ type: ROOM_QUIT, data: set });
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectIsSeatByUIdAndVId = (msg) => {
    return (dispatch) => {
        try {
            dispatch({ type: MSG_DATA, data: msg });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByUId = (uid) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_UID, uid: uid });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByVId = (vid) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_VID, vid: vid });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByRId = (rid) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_RID, rid: rid });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByEmpNo = () => {
    return async (dispatch) => {
        try {
            const result = await selectByEmpNoAPI();
            dispatch({ type: SET_EMPNO, empno: result.data.value });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByType = (product) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_PRODUCT, product: product });
        } catch (error) {
            console.log(error);
        }
    };
};

export const validIsSeat = () => {
    return (dispatch) => {
        try {
            dispatch({ type: VALID_IS_SEAT, ready: true });
        } catch (error) {
            console.log(error);
        }
    };
};

export const convertToTime = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: CONVERT_TO_TIME, data: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const alertToSocketMessage = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: SOCKET_MESSAGE, data: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const convertArrayToTimeTable = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: ARRAY_TO_TIMETABLE, data: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByTitle = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_TITLE, data: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const selectByContent = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_CONTENT, data: data });
        } catch (error) {
            console.log(error);
        }
    };
};
