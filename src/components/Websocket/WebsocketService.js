import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsSeatByUIdAndVId } from 'store/actions/WebsocketAction';
import { DefaultMessage, onOpenTable, onCloseTable, sendMessage, onMessageTable } from './WebsocketModules';

export const SocketConnection = (props) => {
    const msgState = useSelector((state) => state.websocketReducer);
    const socket = new WebSocket('ws://localhost:8082/emp/vehicle/chat');
    const [connected, setConnected] = useState(false);
    // const [items, setItems] = useState([]);

    useEffect(() => {
        onOpenTable(socket, DefaultMessage('ENTER', props));
        selectIsSeatByUIdAndVId(onMessageTable(socket));
        setConnected(true);
    }, []);

    useEffect(() => {
        if (msgState.talk.ready && connected) {
            sendMessage(socket, msgState.talk.data);
            selectIsSeatByUIdAndVId(onMessageTable(socket));
        }
    }, [connected, msgState.talk, socket]);

    useEffect(() => {
        if (msgState.dual.ready && connected) {
            sendMessage(socket, msgState.dual.data);
            selectIsSeatByUIdAndVId(onMessageTable(socket));
        }
    }, [connected, msgState.dual, socket]);

    useEffect(() => {
        if (msgState.quit.ready && connected) {
            onCloseTable(socket, msgState.quit.data);
            setConnected(false);
        }
    }, [connected, msgState.quit, socket]);

    // let socket = new WebSocket(vehicleURL);
    // const sendMessage = () => {
    //     socket.send(JSON.stringify(MsgVehicle({ value: 0, vid: 1, uid: '20220703', empno: '220100001' })));
    //     console.log('메시지 전송');
    // };

    // socket.onclose = (e) => {
    //     if (e.wasClean) {
    //         console.log('연결 해제');
    //     } else {
    //         console.log('연결 해제 에러');
    //     }
    // };
    // useEffect(() => {
    //     socket.onopen = () => {
    //         console.log('서버 연결');
    //         sendMessage();
    //     };
    //     socket.onmessage = (e) => {
    //         const data = JSON.parse(e.data);
    //         console.log(e);
    //         setItems([...data]);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (!socket) {
    //         ws.current = new WebSocket(vehicleURL);
    //         ws.current.onopen = () => {
    //             console.log(vehicleURL + '연결');
    //             setConnected(true);
    //         };
    //         ws.current.send(
    //             JSON.stringify(
    //                 MsgVehicle({
    //                     value: 0,
    //                     vid: 1,
    //                     uid: '20220703',
    //                     empno: '220100001'
    //                 })
    //             )
    //         );
    //         setSendMsg(true);
    //     }
    //     ws.current.onmessage = (e) => {
    //         const data = JSON.parse(e.data);
    //         console.log(data);
    //         setItems((i) => [...i, data]);
    //     };
    // });

    // useEffect(() => {
    //     if (!ws.current) {
    //         ws.current = new WebSocket(vehicleURL);
    //         ws.current.onopen = () => {
    //             console.log('connected to ' + vehicleURL);
    //             setConnected(true);
    //         };
    //         ws.current.onclose = (error) => {
    //             console.log('disconnect from ' + vehicleURL);
    //             console.log(error);
    //         };
    //         ws.current.onerror = (error) => {
    //             console.log('connection error ' + vehicleURL);
    //             console.log(error);
    //         };
    //         ws.current.onmessage = (e) => {
    //             const data = JSON.parse(e.data);
    //             console.log(data);
    //             setItems((i) => [...i, data]);
    //         };
    //     }
    //     return () => {
    //         console.log('clear');
    //         ws.current.close();
    //     };
    // }, []);
    // useEffect(() => {
    //     if (connected) {
    //         ws.current.send(JSON.stringify(MsgVehicle(0)));
    //         setSendMsg(true);
    //     }
    // }, [connected]);

    // return (
    //     <>
    //         {items.map((i) => {
    //             return <>{JSON.stringify(i)}</>;
    //         })}
    //     </>
    // );
    return <></>;
};
