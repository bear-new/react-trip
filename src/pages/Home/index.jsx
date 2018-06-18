import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>home</h1>
                <Link to="/login">sign in</Link>
            </div>
        )
    }
}
