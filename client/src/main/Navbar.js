import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth";

function Navbar(props) {
    const { isAuthenticated } = props;
    return (
        <div className="navbar-wrapper">

            {!isAuthenticated && <div className="nav-link"><Link to="/">Sign Up</Link></div>}
            {!isAuthenticated && <div className="nav-link"><Link to="/login">Log In</Link></div>}
            {isAuthenticated && <div className="nav-link"><Link to="/todos">Todos</Link></div>}
            {isAuthenticated && <div className="nav-link"><Link to="/profile">Profile</Link></div>}
            {isAuthenticated &&
                <div className="nav-link">
                    <button onClick={props.logout}>Logout</button>
                </div>}
        </div>
    )
}
export default connect(state => state.auth, { logout })(Navbar);  