import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/LoginForm/Logo";
import Footer from "../../components/Outlet/Footer";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <>
      <div className="LoginPage">
        <div className="LogoFrame">
          <Logo />
        </div>
        <div className="FormFrame">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default LoginPage;
