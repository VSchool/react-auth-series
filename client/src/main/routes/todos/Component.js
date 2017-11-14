import React, {Component} from 'react';
import TodoContainer from "./todo/Container";
import TodoFormContainer from "./form/Container";

export default class TodosComponent extends Component {

    render() {
        const todos = this.props.todos.map(todo => {
            return (
                <TodoContainer
                    key={todo._id}
                    todo={todo}
                    id={todo._id}/>
            )
        })

        return (
            <div>
                <TodoFormContainer/>
                {todos}
            </div>
        )
    }
}
