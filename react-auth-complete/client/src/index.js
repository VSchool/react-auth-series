import React from 'react';
import ReactDOM from 'react-dom';

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//REDUX
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import mainReducer from "./redux/reducers/index";

import "./index.css";

import App from "./main/App";

let store = createStore(mainReducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
})

ReactDOM.render(<Provider store={store}>
    <Router><App /></Router>
</Provider>, document.getElementById("root"));