import React, { Component } from 'react';

export default class TopNavBar extends Component {
  render() {
    return (
    <div className='navBar-wrapper'>
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
            <a href="/"> Home </a>
            {/* <NavLink exact to="/" /> */}
        </div>

        <div className='nav-links'>
            <a href="/blogs"> Blogs </a>
            {/* <NavLink exact to="/blogs" /> */}
        </div>

        <div className='nav-links'>
            <a href="/about"> About </a>
            {/* <NavLink exact to="/about" /> */}
        </div>
        </div>
        </div>

    );
  }
}
