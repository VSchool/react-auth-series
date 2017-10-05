import React, { Component } from 'react';
import Navbar from "./Navbar";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import SignupContainer from "./routes/signup/Container";
import SigninContainer from "./routes/signin/Container";
import TodosContainer from "./routes/todos/Container";
import ProfileComponent from "./routes/profile/Component";
import ProtectedRoute from "./routes/ProtectedRoute";

import {connect} from "react-redux";
import {verify} from "../redux/actions/index";

class App extends Component {
    componentDidMount(){
        this.props.verify();
    }
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" render={(props)=>{
                       return  isAuthenticated ?
                        <Redirect to= "/profile"/> :
                        <SignupContainer {...props}/>
                    }}/>
                    <Route path="/signin" render={(props)=>{
                       return  isAuthenticated ?
                        <Redirect to= "/profile"/> :
                        <SigninContainer {...props}/>
                    }} />
                    <ProtectedRoute path="/todos" component={TodosContainer}/>
                    <ProtectedRoute path="/profile" component={ProfileComponent}/>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return state;
}

export default withRouter(connect(mapStateToProps,{verify})(App));