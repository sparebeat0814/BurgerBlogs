import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

import TopNavBar from './navBars/topNavBar';
import BottomNavBar from './navBars/bottomNavBar';

import Home from './home';
import About from './about';
import Auth from './auth/auth';
import Blog from './blog/blogs';
import BlogDetail from './blog/blogdetail';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSpinner)

export default class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin=this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin=this.handleUnSuccessfulLogin.bind(this);
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

  // checkLoginStatus() {
  //   return axios.get("http://localhost:5000/protected", { withCredentials: true })
  //   .then(response => {
  //     console.log("logged_in return", response)
  //   })
  // }

  // componentDidMount() {
  //   this.checkLoginStatus();
  // }

  render() {
    return (
      <div className='app'>
        <Router>
        <TopNavBar />
        {this.state.loggedInStatus}
      

      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blogs" component={Blog}/>
          <Route exact path="/blog/:id" component={BlogDetail}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/auth" 
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
