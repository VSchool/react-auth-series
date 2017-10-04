import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/index";

class Navbar extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="navbar-wrapper">
                {isAuthenticated ? null : <div className="nav-link"><Link to="/">Sign Up</Link></div>}
                {isAuthenticated ? null : <div className="nav-link"><Link to="/signin">Sign In</Link></div>}
                {isAuthenticated ? <div className="nav-link"><Link to="/todos">Todos</Link></div> : null}
                {isAuthenticated ? <div className="nav-link"><Link to="/profile">Profile</Link></div> : null}
                {isAuthenticated ? <div className="nav-link"><button onClick={this.props.logout}>Logout</button></div> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { logout })(Navbar);
