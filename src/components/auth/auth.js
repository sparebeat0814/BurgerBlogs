import React, { Component } from 'react';
import Login from './login';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin();
    }

    render() {
        return (
            <div className='auth-wrapper'>
                <div className='left-side'>
                    <img src={require("../images/fries.jpg")} />
                </div>
                <div className='right-side'>
                    <Login 
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                    />
                </div>
            </div>
   )
 }
}