import React, { Component } from 'react';
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

import SignupContainer from "./routes/signup/SignupFormContainer";
import SigninContainer from "./routes/signin/SigninFormContainer";
import TodosContainer from "./routes/todos/TodoListContainer";

export default class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SignupContainer} />
                    <Route path="/signin" component={SigninContainer} />
                    <Route path="/todos" component={TodosContainer}/>
                    <Route path="/profile" />
                </Switch>
            </div>
        )
    }
}
