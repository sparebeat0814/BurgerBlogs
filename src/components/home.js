import React, { Component } from 'react';


export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      blogItem: []
    }
  }

  

render() {
    return (
        <div className='homepage-wrapper'>
          <div className='newest-blog-wrapper'>
            <div className='newest=blog-header'>
                <h1>Welcome To Burger Blogs</h1>
                </div>
                <div className='content-wrapper-home'>
                <div className='img-wrapper'>
                <img src={require("./images/homeBurger.jpg")} />
                </div>
                <div className='words'>
                <h2>You may be wondering...</h2>
                <div className='content'>
                <p>You may be wondering what you've just come across. This is burger blogs! Here you can learn about restaurants with good burgers. Some are huge chains like mcdonalds, some are smaller. You know of a place we don't have a blog about? Send an email to burgerblogsSubmissions@gmail.com</p>
                <div className='closure-home'>
                <p>Now go find some good pattys!</p>
                <a href="/blogs"> (Click here for the Blogs) </a> 
                </div>
                </div>
                </div>
          </div>
          </div>
        </div>
   )
 }
}