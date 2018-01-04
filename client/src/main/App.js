import React from 'react';
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import TodoList from "./Todos";

function App(){
    return (
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/todos" component={TodoList}/>
                <Route path="/profile"/>
            </Switch>
        </div>
    )
}

export default App;
