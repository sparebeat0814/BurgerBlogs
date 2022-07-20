import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faBan,
  faFloppyDisk
} from "@fortawesome/free-solid-svg-icons";

import TopNavBar from './navBars/topNavBar';
import BottomNavBar from './navBars/bottomNavBar';

import Home from './home';
import About from './about';
import Auth from './auth/auth';
import Blog from './blog/blogs';
import BlogDetail from './blog/blogdetail';
import { library } from '@fortawesome/fontawesome-svg-core';




library.add(faSpinner, faBan, faFloppyDisk)

export default class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin=this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin=this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout=this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }


  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
    sessionStorage.clear();
    window.location="/"
  }
  

  checkLoginStatus() {
    const token = sessionStorage.getItem('token');
    // const token = JSON.parse(sessionStorage.getItem('token'));
    // console.log("---->",token);


   axios.get('https://burgerblogs.herokuapp.com/protected', {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' +token
    }
    })
    .then((response) => {
      const loggedIn = response.data;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
       } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    }).catch(error => {
      console.log("error", error)
    })
  }
  

  componentDidMount() {
    this.checkLoginStatus();
    console.log(">---->",this.state.loggedInStatus);
  }

  

  

  render() {
    return (
      <div className='app'>
        <Router>
        <TopNavBar  loggedInStatus={this.state.loggedInStatus} handleSuccessfulLogout={this.handleSuccessfulLogout} />
        
      

      
        <Switch>
          <Route exact path="/"render={(props) => <Home {... props} loggedInStatus={this.state.loggedInStatus} /> }/>


          <Route  path="/blogs" render={(props) => <Blog {... props} loggedInStatus={this.state.loggedInStatus} /> }/>


          <Route  path="/blog/:id" 
          render={props =>( <BlogDetail {...props} loggedInStatus={this.state.loggedInStatus} />)}
          />
          <Route  path="/about" component={About}/>
          <Route  path="/auth" 
          render={props => (
          <Auth
          {...props}
          handleSuccessfulLogin={this.handleSuccessfulLogin}
          handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
          />
          )}
          />
        </Switch>



      <BottomNavBar />


            <NavLink exact to="/" />
            <NavLink exact to="/blogs" />
            <NavLink exact to="/about" />
        </Router>
      </div>
    );
  }
}
