import React, { useState } from 'react';
import './InputLogin.scss';
import { FaRegUser } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { requestByEmployeeLogin } from '../ApiModules/ApiHandler';

export default function InputLogin() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const idHandler = (e) => {
        setId(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const inputReset = () => {
        setId('');
        setPassword('');
    };
    const onClickLogin = async (e) => {
        if (e) e.preventDefault();
        if (id === '' || password === '') {
            alert('사번과 비밀번호는 필수 입력 사항입니다.');
            return;
        }
        let dataSet = { id: id, pw: password };
        inputReset();
        if ((await requestByEmployeeLogin(dataSet)) === 0) {
            window.location.href = '/';
        } else {
            alert('사번 혹은 비밀번호가 틀렸습니다.');
        }
    };

    return (
        <div className="InputLogin">
            <form className="inputLoginForm" onSubmit={onClickLogin}>
                <div className="input-container">
                    <FaRegUser className="i" />
                    <input type="text" placeholder="사원번호 입력" onChange={idHandler} />
                </div>
                <div className="input-container">
                    <IoIosLock className="i lock" />
                    <input type="password" placeholder="비밀번호 입력" onChange={passwordHandler} />
                </div>
                <div className="input-container">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
}
