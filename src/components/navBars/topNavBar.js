// import { response } from 'express';
import React from 'react';
import { withRouter } from 'react-router';



const TopNavBar = props => {
    


     const handleSignOut = () => {
        // if(response.status === 200) {
        props.history.push("/");
        props.handleSuccessfulLogout();
        // }
        // return response.data
    }

  
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
        <div className='logout'>           
            {props.loggedInStatus === "LOGGED_IN" ? ( <a onClick={handleSignOut}>Sign Out</a> ) : null}
        </div>
        </div>

    );
  }

export default withRouter(TopNavBar);