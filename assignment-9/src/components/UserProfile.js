import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>User Profile</h1>

                    <Link to="/">Home</Link>

                    <div>Username: {this.props.userName}</div>
                    <div>Member Since: {this.props.memberSince}</div>
                </center>
            </div>
        );
    }
}

export default UserProfile;