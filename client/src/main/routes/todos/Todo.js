import React from 'react';

function Todo(props) {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <label htmlFor="">Completed:</label>
            <input
                onChange={props.handleCompleted}
                type="checkbox"
                checked={props.todo.completed}/>
            <button onClick={props.handleRemove}>X</button>
        </div>
    )
}

export default Todo;