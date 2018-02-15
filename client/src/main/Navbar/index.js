import React from 'react';
import {Link} from "react-router-dom";

function Navbar (props){
    return (
        <div className="navbar-wrapper">
            <div className="nav-link"><Link to="/">Sign Up</Link></div>
            <div className="nav-link"><Link to="/login">Log In</Link></div>
            <div className="nav-link"><Link to="/todos">Todos</Link></div>
            <div className="nav-link"><Link to="/profile">Profile</Link></div>
            <div className="nav-link">
                <button>Logout</button>
            </div>
        </div>
    )
}
export default Navbar;