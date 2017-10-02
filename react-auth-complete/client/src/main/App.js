import React, { Component } from 'react';
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

import SignupContainer from "./routes/signup/Container";
import LoginContainer from "./routes/login/Container";
import TodosContainer from "./routes/todos/Container";

export default class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SignupContainer} />
                    <Route path="/login" component={LoginContainer} />
                    <Route path="/todos" component={TodosContainer}/>
                    <Route path="/profile" />
                </Switch>
            </div>
        )
    }
}
