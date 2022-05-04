import React, { Component } from 'react';

import TopNavBar from './navBars/topNavBar';
import BottomNavBar from './navBars/bottomNavBar';
import Blogs from './blog/blogs';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <TopNavBar />
        {/* <Blogs /> */}\
        <p>The blogs go here</p>
        
      

      <Router>
        <Switch>
          <Route exact path="/blogs" component={Blogs}/>
        </Switch>
      </Router>

      <BottomNavBar />
      </div>
    );
  }
}
