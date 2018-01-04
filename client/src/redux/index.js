import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import todos from "./todos";

const reducer = combineReducers({
    todos
});

export default createStore(reducer, applyMiddleware(thunk));