import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.scss";
//redux
import { Switch, Route } from "react-router-dom";
import LoginPage from "./page/login/LoginPage";
//Main
import EmpMain from "./page/employee/main/EmpMainPage";
import Header from "./components/Outlet/Header";
import reset from "styled-reset";
import QuickMenu from "./components/Outlet/QuickMenu";
import PublicRoute from "./components/Route/Public";
//store
const GlobalStyle = createGlobalStyle`
${reset}
`;
//최상위 컴포넌트 App
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <QuickMenu />
      <Switch>
        <PublicRoute path={"/login"} restricted={true} component={LoginPage} />
        {/* <Route path={"/"} component={Header} /> */}
        {/* <Route path={"/"}  component={Footer} /> */}
        <Route path={"/"} component={EmpMain} />
      </Switch>
    </div>
  );
}

export default App;
