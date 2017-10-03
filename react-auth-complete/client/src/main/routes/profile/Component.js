import React, { Component } from 'react';
import {connect} from "react-redux";

class ProfileComponent extends Component {
    render() {
        return (
            <div>
                <h2>Welcome, <i>@{this.props.user.username}</i></h2>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps, {})(ProfileComponent);