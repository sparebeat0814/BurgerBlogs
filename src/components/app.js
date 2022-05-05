import React, { Component } from 'react';

import TopNavBar from './navBars/topNavBar';
import BottomNavBar from './navBars/bottomNavBar';
import Blogs from './blog/blogs';
import About from './about';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <TopNavBar />
        
      

      <Router>
        <Switch>
          <Route exact path="/blogs" component={Blogs}/>
          <Route exact path="/About" component={About}/>
        </Switch>
      </Router>

      <BottomNavBar />
      </div>
    );
  }
}
