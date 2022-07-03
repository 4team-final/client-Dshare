import { getAccess } from '../ApiModules/ApiParts';

const token = getAccess();

export const onOpenTable = (socket, enter) => {
    try {
        if (!token) {
            alert('로그인 후 이용해주세요.');
            window.location.href = '/';
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
export const onMessageTable = (socket) => {
    try {
        let data = null;
        socket.onmessage = (e) => {
            console.log('메시지 수신');
            data = JSON.parse(e);
        };
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const sendMessage = (socket, message) => {
    try {
        if (!token) {
            alert('로그인 후 이용해주세요.');
            window.location.href = '/';
            return;
        }
        const data = message;
        // 리덕스를 통해서 메시지 가져오는 구간
        waitForWebsocket(socket, () => {
            socket.send(JSON.stringify(data));
        });
        console.log('메시지 전송');
        // 보낸 메시지 객체를 리셋해서 비워두는 구간
    } catch (error) {
        console.log(error);
    }
};

export const DefaultMessage = (v) => {
    return {
        type: 'ENTER',
        vehicleId: v.vid,
        uid: v.uid,
        time: [],
        empNo: v.empno,
        message: ''
    };
};
