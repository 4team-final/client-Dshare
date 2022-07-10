import React, { useState } from 'react';
import { LoginFormFrame, LoginAlertFrame, LoginInputFrame, LoginContainerFrame, LoginButtonFrame } from './LoginFormStyle';
import { FaRegUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { BsExclamationDiamondFill } from 'react-icons/bs';
import { requestByEmployeeLogin } from '../ApiModules/ApiHandler';

export default function InputLogin() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [alert, setAlert] = useState('');

    const idHandler = (e) => {
        setId(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const inputReset = () => {
        setId('');
        setPassword('');
        setAlert('');
    };

    const onClickLogin = async (e) => {
        setDisabledBtn(true);
        if (e) e.preventDefault();
        if (id === '' || password === '') {
            inputReset();
            setAlert('사번과 비밀번호는 필수 입력 사항입니다.');
            setDisabledBtn(false);
            return;
        }
        inputReset();

        let dataSet = { id: id, pw: password };
        const check = await requestByEmployeeLogin(dataSet);
        if (check === 0) {
            window.location.href = '/main/dashboard/default';
        } else {
            setAlert('사번 혹은 비밀번호가 틀렸습니다.');
        }
        setDisabledBtn(false);
    };

    return (
        <LoginFormFrame>
            <form className="inputLoginForm" onSubmit={onClickLogin}>
                <LoginContainerFrame>
                    <FaRegUser style={{ color: '#fff' }} />
                    <LoginInputFrame type="text" placeholder="사원번호 입력" onChange={idHandler} />
                </LoginContainerFrame>
                <LoginContainerFrame>
                    <IoIosLock style={{ color: '#fff' }} />
                    <LoginInputFrame type="password" placeholder="비밀번호 입력" onChange={passwordHandler} />
                </LoginContainerFrame>
                <LoginContainerFrame>
                    {alert ? <BsExclamationDiamondFill /> : <></>}
                    <LoginAlertFrame>{alert}</LoginAlertFrame>
                </LoginContainerFrame>
                <LoginContainerFrame>
                    <LoginButtonFrame type="submit" disabled={disabledBtn}>
                        Login
                    </LoginButtonFrame>
                </LoginContainerFrame>
            </form>
        </LoginFormFrame>
    );
}
