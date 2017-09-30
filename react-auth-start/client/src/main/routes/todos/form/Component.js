import React, { Component } from 'react'

export default class TodoFormComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h4>Add New Todo</h4>
                    <input name= "title"value={this.props.title}onChange={this.props.handleChange}type="text" placeholder="Title"/>
                    <button type="submit">+</button>
                </form>
            </div>
        )
    }
}
