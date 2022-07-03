export const MSG_TALK = 'MSG_TALK';
export const MSG_DUAL = 'MSG_DUAL';
export const MSG_QUIT = 'MSG_QUIT';
export const MSG_DATA = 'MSG_DATA';
export const SET_UIDANDVID = 'SET_UIDANDVID';

export const preventionOfDuplicationByReservation = (type, set) => {
    return (dispatch) => {
        try {
            switch (type) {
                case 'TALK':
                    dispatch({ type: MSG_TALK, data: set });
                    break;
                case 'DUAL':
                    dispatch({ type: MSG_DUAL, data: set });
                    break;
                case 'QUIT':
                default:
                    dispatch({ type: MSG_QUIT, data: set });
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

export const selectByUIdAndVId = (uid, vid) => {
    return (dispatch) => {
        try {
            dispatch({ type: SET_UIDANDVID, uid: uid, vid: vid });
        } catch (error) {
            console.log(error);
        }
    };
};
