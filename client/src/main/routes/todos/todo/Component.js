import React, { Component } from 'react'

export default class TodoComponent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.todo.title}</h3>
                <label htmlFor="">Completed:</label>
                <input onChange={this.props.handleCompleted}type="checkbox" checked={this.props.todo.completed}/>
                <button onClick={this.props.handleRemove}>X</button>
            </div>
        )
    }
}
