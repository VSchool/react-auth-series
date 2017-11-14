import React from 'react';
import TodoContainer from "./TodoContainer";
import TodoFormContainer from "./AddTodoFormContainer";

function TodoList(props) {
    const todos = props.todos.map(todo => {
        return (
            <TodoContainer
                key={todo._id}
                todo={todo}/>
        )
    })

    return (
        <div>
            <TodoFormContainer/>
            {todos}
        </div>
    )
}

export default TodoList