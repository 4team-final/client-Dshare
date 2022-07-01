import React, { useEffect, useRef, useState } from 'react';
import { Switch, Link } from 'react-router-dom';
import { requestByEmployeeLogout, requestByTokenExpired } from '../../../components/ApiModules/ApiHandler';

export default function EmpMainPage() {
    return (
        <>
            <button onClick={requestByEmployeeLogout}>임시 로그아웃 버튼</button>
            <button onClick={async () => console.log(await requestByTokenExpired())}> 임시 토큰 체크 버튼</button>
            <Switch>
                {/* <PublicRoute
=======
import React, { useEffect, useRef, useState } from "react";
import { Switch, Link } from "react-router-dom";
import {
  requestByEmployeeLogout,
  requestByTokenExpiredGET,
  requestByTokenExpiredGETAndParam,
  requestByTokenExpiredPOSTAndBody,
} from "../../../components/ApiModules/ApiHandler";
import CalendarFrame from "../../../components/Calendar/index";

export default function EmpMainPage() {
  return (
    <>
      <div>
        <button onClick={requestByEmployeeLogout}>임시 로그아웃 버튼</button>
        <button
          onClick={async () => console.log(await requestByTokenExpiredGET())}
        >
          임시 토큰 체크 버튼
        </button>
        <button
          onClick={async () =>
            console.log(await requestByTokenExpiredGETAndParam())
          }
        >
          임시 파람 체크 버튼
        </button>
        <button
          onClick={async () =>
            console.log(await requestByTokenExpiredPOSTAndBody())
          }
        >
          임시 바디 체크 버튼
        </button>
      </div>

      <CalendarFrame />

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
