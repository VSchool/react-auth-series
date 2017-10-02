import React, { Component } from 'react';
import TodoFormComponent from "./Component";
import {connect} from "react-redux";
import {addTodo} from "../../../../redux/actions/index";

class TodosFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                title: ""
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
                title: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.inputs);
        this.clearInputs()
    }
    render() {
        return (
            <TodoFormComponent
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

export default connect(null,{addTodo})(TodosFormContainer);
