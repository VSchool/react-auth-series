import React, { Component } from 'react';
import SigninComponent from "./Component";
import { connect } from "react-redux";
import { signin } from "../../../redux/actions/index";

class SigninContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.signin(this.state.inputs);
        this.clearInputs();
    }
    render() {
        let authErrCode = this.props.authErrCode.signin;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = "Invalid username or password!";
        } else if (authErrCode > 499) {
            errMsg = "Server error!";
        }
        return (
                <SigninComponent
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    errMsg={errMsg}
                    {...this.state.inputs} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { signin })(SigninContainer);