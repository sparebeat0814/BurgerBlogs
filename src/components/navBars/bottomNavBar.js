import React, { Component } from 'react';

export default class BottomNavBar extends Component {
  render() {
    return (
        <div className='navBar-wrapper-bottom'>
            <div className='nav-items'>
                <div className='logo'>
                  <div className='logo-bottom'>
                  <img src={require('./logo/BURGER (1).jpg')} />
                </div>
                </div>
                <div className='copyright'>
                    <p id="copyright-text">copyright 2022 Burger Blogs</p>
                </div>
            </div>
            </div>
    );
  }
}