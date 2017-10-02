import React, { Component } from 'react';
import TodosComponent from "./Component";
import { connect } from "react-redux";
import {loadTodos} from "../../../redux/actions/index";

class TodosContainer extends Component {
    componentDidMount(){
        this.props.loadTodos();
    }
    render() {
        return (
            <TodosComponent 
                todos={this.props.todos}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {loadTodos})(TodosContainer)
