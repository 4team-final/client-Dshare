import React, { useEffect, useRef, useState } from "react";
import { Switch, Link } from "react-router-dom";

export default function EmpMainPage() {
  return (
    <>
      test
      <Switch>
        {/* <PublicRoute restricted={false} exact path="/" component={MainPage} />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PublicRoute
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
