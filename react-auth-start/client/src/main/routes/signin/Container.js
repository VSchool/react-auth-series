import React, { Component } from 'react';
import SigninComponent from "./Component";
import {connect} from "react-redux";

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
        // This is where we will call our signin function from redux
        alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }
    render() {
        return (
            <SigninComponent
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                authError={this.props.authError}
                {...this.state.inputs} />
        )
    }
}

export default connect(null,{})(SigninContainer);