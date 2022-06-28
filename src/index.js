import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

//Router
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./store/reducers/indexReducer";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
ReactDOM.render(
  //React에서 Render 2번 되는 현상 해결 --> <React.StrictMode> 태그를 지운채 실행
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
