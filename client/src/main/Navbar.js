import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <div className="nav-link"><Link to="/">Sign Up</Link></div>
                <div className="nav-link"><Link to="/signin">Sign In</Link></div>
                <div className="nav-link"><Link to="/todos">Todos</Link></div>
                <div className="nav-link"><Link to="/profile">Profile</Link></div>
                <div className="nav-link"><button>Logout</button></div>
            </div>
        )
    }
}
