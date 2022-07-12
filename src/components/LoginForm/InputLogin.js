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

    //정규식
    let numberReg = /^[0-9]+$/;
    let pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const idHandler = (e) => {
        if (e.target.value.length < 9) {
            setAlert('사번은 9글자 이상 입력돼야합니다');
            setDisabledBtn(true);
        } else if (!numberReg.test(e.target.value)) {
            setAlert('사번에는 숫자만 입력할 수 있습니다.');
            setDisabledBtn(true);
        } else {
            setDisabledBtn(false);
            setAlert('');
        }
        setId(e.target.value);
    };
    const passwordHandler = (e) => {
        if (!pwReg.test(e.target.value)) {
            setAlert('비밀번호는 숫자, 문자 및 하나 이상의 특수문자의 조합으로 이뤄져야 합니다.');
            setDisabledBtn(true);
        } else {
            setDisabledBtn(false);
            setAlert('');
        }
        setPassword(e.target.value);
    };
    const inputReset = () => {
        console.log('gg');
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

        let dataSet = { id: id, pw: password };
        const check = await requestByEmployeeLogin(dataSet);
        if (check === 0) {
            window.location.href = '/main/dashboard/default';
            setDisabledBtn(false);
        } else {
            inputReset();
            setAlert('사번 혹은 비밀번호가 틀렸습니다.');
        }
    };

    return (
        <LoginFormFrame>
            <form
                className="inputLoginForm"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                onSubmit={onClickLogin}
            >
                <LoginContainerFrame>
                    <FaRegUser style={{ color: '#fff', marginRight: '-6%' }} />
                    <LoginInputFrame type="text" placeholder="사원번호 입력" value={id} onChange={idHandler}></LoginInputFrame>
                </LoginContainerFrame>
                <LoginContainerFrame>
                    <IoIosLock style={{ color: '#fff', marginRight: '-6%' }} />
                    <LoginInputFrame type="password" placeholder="비밀번호 입력" onChange={passwordHandler} />
                </LoginContainerFrame>
                {/* <LoginContainerFrame> */}
                {alert ? (
                    <div style={{ borderStyle: 'solid', borderWidth: '0 0 1px 0' }}>
                        <BsExclamationDiamondFill style={{ color: '#fff' }} />
                        <LoginAlertFrame>{alert}</LoginAlertFrame>
                    </div>
                ) : (
                    <></>
                )}
                {/* </LoginContainerFrame> */}
                <LoginContainerFrame>
                    {!alert ? (
                        <LoginButtonFrame type="submit" disabled={disabledBtn}>
                            Login
                        </LoginButtonFrame>
                    ) : (
                        <></>
                    )}
                </LoginContainerFrame>
            </form>
        </LoginFormFrame>
    );
}
