import React, { useContext } from "react";

import "./App.css";
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./store/reducers/indexReducer";

//Main
import EmpMain from "./page/employee/main/EmpMainPage";

//store
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//최상위 컴포넌트 App
function App() {
  return (
    <Provider store={store}>
      <EmpMain />
    </Provider>
  );
}

export default App;
