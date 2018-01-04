import React, {Component} from 'react';
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {loadTodos} from "../../redux/todos";

class TodoListContainer extends Component {

    componentDidMount() {
        this.props.loadTodos();
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
            <TodoList
                todos={this.props.todos}/>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {loadTodos})(TodoListContainer)
