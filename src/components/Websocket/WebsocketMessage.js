import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AlertModule from '../Alerts';

const WebsocketMessage = () => {
    const socketMsgStore = useSelector((state) => state.websocketReducer.socketmessage);
    const [socketMsg, setSocketMsg] = useState('');
    const [socketFlag, setSocketFlag] = useState(false);
    useEffect(() => {
        setSocketFlag(false);
        setSocketMsg('');
    }, []);
    useEffect(() => {
        if (socketMsgStore && socketMsgStore.data != null) {
            if (socketMsgStore.data.includes('null')) {
                setSocketMsg('');
            } else {
                let tempMsg = socketMsgStore.data.substring(17);
                let endMsg = tempMsg.split(' ');
                endMsg =
                    '익명의 사용자가 ' +
                    tempMsg.substring(5, 7) +
                    '월 ' +
                    tempMsg.substring(7, 9) +
                    '일 날짜에서 ' +
                    endMsg[endMsg.length - 2] +
                    endMsg[endMsg.length - 1];
                setSocketMsg(endMsg);
            }
        }
    }, [socketMsgStore]);
    useEffect(() => {
        if (socketMsg !== '' && socketMsg !== undefined && socketMsg !== null) {
            setSocketFlag(true);
        }
        setTimeout(() => {
            setSocketFlag(false);
            setSocketMsg('');
        }, 2500);
    }, [socketMsg]);
    return <AlertModule status={socketFlag} notice={'info'} font={'23'} contents={socketMsg} />;
};
export default WebsocketMessage;
