// Install
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// User
import { alertToSocketMessage, selectIsSeatByUIdAndVId } from 'store/actions/WebsocketAction';
import { getAccess } from '../ApiModules/ApiParts';
import { requestByEmployeeLogout } from '../ApiModules/ApiHandler';

export const SocketConnection = (props) => {
    const [items, setItems] = useState([]);
    const [socketMsg, setSocketMsg] = useState();
    const dispatch = useDispatch();
    const vehicleURLS = process.env.REACT_APP_SOCKET_VEHICLE_S;
    const roomURLS = process.env.REACT_APP_SOCKET_ROOM_S;
    const vehicleURL = process.env.REACT_APP_SOCKET_VEHICLE;
    const roomURL = process.env.REACT_APP_SOCKET_ROOM;
    const enterState = useSelector((state) => state.websocketReducer.enter);
    const roomEnterState = useSelector((state) => state.websocketReducer.roomenter);
    const talkState = useSelector((state) => state.websocketReducer.talk);
    const dualState = useSelector((state) => state.websocketReducer.dual);
    const quitState = useSelector((state) => state.websocketReducer.quit);
    const roomTalkState = useSelector((state) => state.websocketReducer.roomtalk);
    const roomQuitState = useSelector((state) => state.websocketReducer.roomquit);
    const urlV = window.location.protocol === 'http:' ? vehicleURL : vehicleURLS;
    const urlR = window.location.protocol === 'http:' ? roomURL : roomURLS;
    const socket = new WebSocket(props.props.type === 0 ? urlR : urlV);
    const [connected, setConnected] = useState(false);
    useEffect(() => {
        if (socketMsg) {
            dispatch(alertToSocketMessage(socketMsg));
        }
    }, [socketMsg]);

    useEffect(() => {
        if (items) {
            dispatch(selectIsSeatByUIdAndVId(items));
        }
    }, [items]);

    useEffect(() => {
        if (enterState && enterState.ready) {
            onOpenTable(socket, enterState.data);
            onMessageTable(socket);
            setConnected(true);
        }
    }, [enterState]);

    useEffect(() => {
        if (roomEnterState && roomEnterState.ready) {
            onOpenTable(socket, roomEnterState.data);
            onMessageTable(socket);
            setConnected(true);
        }
    }, [roomEnterState]);

    useEffect(() => {
        if (talkState && talkState.ready && connected) {
            sendMessage(socket, talkState.data);
            onMessageTable(socket);
        }
    }, [talkState]);

    useEffect(() => {
        if (roomTalkState && roomTalkState.ready && connected) {
            sendMessage(socket, roomTalkState.data);
            onMessageTable(socket);
        }
    }, [roomTalkState]);

    useEffect(() => {
        if (dualState && dualState.ready && connected) {
            sendMessage(socket, dualState.data);
            onMessageTable(socket);
        }
    }, [dualState]);

    useEffect(() => {
        if (quitState && quitState.ready && connected) {
            onCloseTable(socket, quitState.data);
            setConnected(false);
        }
    }, [quitState]);

    useEffect(() => {
        if (roomQuitState && roomQuitState.ready && connected) {
            onCloseTable(socket, roomQuitState.data);
            setConnected(false);
        }
    }, [roomQuitState]);

    const onMessageTable = (socket) => {
        try {
            socket.onmessage = (e) => {
                console.log('메시지 수신');
                const msg = JSON.parse(e.data);
                setItems(msg?.results);
                setSocketMsg(msg?.message);
                if (msg instanceof String && msg.startsWith('시간')) {
                    setSocketMsg(msg);
                }
            };
        } catch (error) {
            console.log(error);
        }
    };
    return <></>;
};

const token = getAccess();

export const onOpenTable = (socket, enter) => {
    try {
        if (!token) {
            requestByEmployeeLogout(3);
            return;
        }
        socket.onopen = () => {
            console.log('서버 연결');
            sendMessage(socket, enter);
        };
    } catch (error) {
        console.log(error);
    }
};
export const onCloseTable = (socket, quit) => {
    try {
        sendMessage(socket, quit);
        socket.onclose = (e) => {
            if (e.wasClean) {
                console.log('연결 해제');
            } else {
                console.log('연결 해제 에러');
            }
            socket.close();
            console.log('clear');
        };
    } catch (error) {
        console.log(error);
    }
};
const waitForWebsocket = (socket, callback) => {
    setTimeout(function () {
        if (socket.readyState === 1) {
            callback();
        } else {
            waitForWebsocket(socket, callback);
        }
    }, 1);
};

export const sendMessage = (socket, message) => {
    try {
        if (!token) {
            requestByEmployeeLogout(3);
            return;
        }
        const data = message;
        waitForWebsocket(socket, () => {
            socket.send(JSON.stringify(data));
        });
        console.log('메시지 전송');
    } catch (error) {
        console.log(error);
    }
};
