import React, { Component } from 'react';
import Blogs from "./blog/blogs";

export default class Home extends Component {
render() {
    return (
        <div className='homepage-wrapper'>
          <div className='newest-blog-wrapper'>
            <div className='newest=blog-header'>
              <h1>The Latest Patty</h1>
            </div>
          </div>
          <Blogs />
        </div>
   )
 }
}