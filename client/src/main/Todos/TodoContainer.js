import React, { Component } from 'react';
import Todo from "./Todo";
import {connect} from "react-redux";
import {editTodo, deleteTodo} from "../../redux/todos";

class TodoContainer extends Component {
    
    handleCompleted(e){
        this.props.editTodo(this.props.id, {completed: e.target.checked})
    }

    handleRemove(){
        this.props.deleteTodo(this.props.id);
    }

    render() {
        return (
            <Todo
            handleCompleted={this.handleCompleted.bind(this)}
            handleRemove={this.handleRemove.bind(this)}
                todo={this.props.todo}
                id={this.props.id} 
                {...this.state}/>
        )
    }
}

export default connect(null,{editTodo, deleteTodo})(TodoContainer);
