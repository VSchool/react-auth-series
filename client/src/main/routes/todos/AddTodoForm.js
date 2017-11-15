import React from 'react'

function AddTodoForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h4>Add New Todo</h4>

                <input
                    name="title"
                    value={props.title}
                    onChange={props.handleChange}
                    type="text"
                    placeholder="Title"/>

                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default AddTodoForm;