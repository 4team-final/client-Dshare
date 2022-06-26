import React from "react";
import "./InputLogin.scss";
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

function InputLogin() {
  return (
    <div className="InputLogin">
      <div className="input-container">
        <FaRegUser className="i" />
        <input type="text" placeholder="사원번호 입력" />
      </div>
      <div className="input-container">
        <IoIosLock className="i lock" />
        <input type="password" placeholder="비밀번호 입력" />
      </div>
      <div className="input-container">
        <button type="submit">Log In</button>
      </div>
    </div>
  );
}
export default InputLogin;
