import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class TopNavBar extends Component {
  render() {
    return (
    <div className='navBar-wrapper'>
        <div className='nav-items'>
        <div className='logo'>
        <div className='top-logo'>
            <img src={require('./logo/BURGER (1).png')} />
        </div>
        </div>
        <div className='navBar-middle'>
        <div className='SiteTitle'>
            <h1>BURGER BLOGS</h1>
        </div>
        </div>
        
        <div className='nav-links-wrapper'>
        <div className='nav-links'>
            <Link exact to="/" activeClassName='nav-link'> Home </Link>
        </div>

        <div className='nav-links'>
            <Link exact to="/blogs" activeClassName='nav-link'> Blogs </Link>
        </div>

        <div className='nav-links'>
            <Link exact to="/about" activeClassName='nav-link'> About </Link>
        </div>
        </div>
    </div>
    </div>
    );
  }
}
