import React, { Component } from 'react';
import Navbar from "./Navbar";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../redux/auth";

import Signup from "./Signup";
import Login from "./Login";
import TodoList from "./Todos";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {

    componentDidMount() {
        this.props.verify();
    }
    render() {
        const { isAuthenticated, loading } = this.props;
        return (
            <div className="app-wrapper">
                <Navbar />
                {loading ?
                    <div>...Loading user data </div>
                    :
                    <Switch>
                        <Route exact path="/" render={props => isAuthenticated ?
                            <Redirect to="/profile" /> :
                            <Signup {...props} />} />
                        <Route path="/login" render={props => isAuthenticated ?
                            <Redirect to="/profile" /> :
                            <Login {...props} />} />
                        <ProtectedRoute path="/todos" component={TodoList} />
                        <ProtectedRoute path="/profile" component={Profile} />
                    </Switch>
                }
            </div>
        )
    }
}

export default withRouter(connect(state => state.auth, { verify })(App));