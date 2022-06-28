import React, { useEffect, useState } from "react";
import "./InputLogin.scss";
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeValidate,
  testToken,
} from "../../store/actions/EmployeeAction";

function InputLogin() {
  const employeeStore = useSelector((s) => s.employeeReducer);
  const dispatch = useDispatch();
  const [empNo, setEmpNo] = useState("");
  const [password, setPassword] = useState("");
  const empNoHandler = (e) => {
    setEmpNo(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const inputReset = () => {
    setEmpNo("");
    setPassword("");
  };
  const onClickLogin = async (e) => {
    e.preventDefault();
    if (empNo === "" || password === "") {
      alert("사번과 비밀번호는 필수 입력 사항입니다.");
      return;
    }
    let dataSet = { id: empNo, pw: password };
    dispatch(employeeValidate(dataSet));
    inputReset();
  };
  const validateLogin = () => {
    if (
      employeeStore.data === undefined ||
      employeeStore.data === null ||
      employeeStore.data.value === null
    ) {
      alert("사번 혹은 비밀번호가 맞지 않습니다.");
    }
    window.location.href = "/";
  };

  const test = () => {
    dispatch(testToken);
    console.log("time");
  };
  useEffect(() => {
    console.log(employeeStore);
  }, [employeeStore]);
  return (
    <div className="InputLogin">
      <button onClick={test}>test</button>
      <form className="inputLoginForm" onSubmit={onClickLogin}>
        <div className="input-container">
          <FaRegUser className="i" />
          <input
            type="text"
            placeholder="사원번호 입력"
            onChange={empNoHandler}
          />
        </div>
        <div className="input-container">
          <IoIosLock className="i lock" />
          <input
            type="password"
            placeholder="비밀번호 입력"
            onChange={passwordHandler}
          />
        </div>
        <div className="input-container">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}
export default InputLogin;
