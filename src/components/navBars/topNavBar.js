import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class TopNavBar extends Component {
  render() {
    return (
    <div className='navBar-wrapper'>
        <div className='nav-items'>
        <div className='logo'>
        <div className='top-logo'>
            <img src={require('./logo/BURGER (1).jpg')} />
        </div>
        </div>
        <div className='navBar-middle'>
        <div className='SiteTitle'>
            <h1>BURGER BLOGS</h1>
        </div>
        </div>
        <div className='nav-links-wrapper'>
        <div className='nav-link'>
            <NavLink exact to="/"> Home </NavLink>
        </div>

        <div className='nav-link'>
            <NavLink exact to="/blogs"> Blogs </NavLink>
        </div>

        <div className='nav-link'>
            <NavLink exact to="/about"> about </NavLink>
        </div>
        </div>
    </div>
    </div>
    );
  }
}
