import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import todos from "./todos";
import auth from "./auth";

const reducer = combineReducers({
    todos,
    auth
});

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);