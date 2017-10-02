import React, { Component } from 'react'

export default class SignupComponent extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input onChange={this.props.handleChange} value={this.props.username} name="username" type="text" placeholder="@Username" />
                    <input onChange={this.props.handleChange} value={this.props.email} name="email" type="email" placeholder="Email" />
                    <input onChange={this.props.handleChange} value={this.props.password} name="password" type="password" placeholder="#" />
                    <button type="submit">Create Account</button>
                    <p>{this.props.errMsg}</p>
                </form>
            </div>
        )
    }
}
