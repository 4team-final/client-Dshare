import React, { useEffect, useRef, useState } from "react";
import { Switch, Link } from "react-router-dom";
import { requestByEmployeeLogout } from "../../../components/ApiModules/ApiHandler";

export default function EmpMainPage() {
  return (
    <>
      <button onClick={requestByEmployeeLogout}>임시 로그아웃 버튼</button>
      <Switch>
        {/* <PublicRoute
            restricted={true}
            component={SignUp}
            path="/signup"
            exact
          />
          <PublicRoute
            restricted={false}
            component={BoardList}
            path="/board"
            exact
          />
          <PublicRoute
            restricted={false}
            component={Search}
            path="/search"
            exact
          />
          <PrivateRoute component={BoardCreate} path="/create" exact />
          <PrivateRoute component={Profile} path="/profile" exact />
          <PrivateRoute component={Refrigerator} path="/refrigerator" exact />
          <PrivateRoute component={BoardDetail} path="/board/:id" exact />
          <PrivateRoute component={Cart} path="/cart" exact /> */}
      </Switch>
    </>
  );
}
