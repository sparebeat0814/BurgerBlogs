import React, { Component } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogItem from "./blogItem";



class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentpage: 0,
      isLoading: true
    }


    this.getBlogItems = this.getBlogItems.bind(this);
    this.activateInfiniteScroll();
  }

  getBlogItems() {
    this.setState({
      currentpage: this.state.currentpage + 1
    })
    axios.get(`http://localhost:5000/blogs?page=${this.state.currentpage}` 
    // add { withCredentials: true } next to the URL so it does auth stuff
    ).then(response => {
      console.log("getting", response.data)
      this.setState({
        blogItems: this.state.blogItems.concat(response.data),
        totalCount: response.data.total_records,
        isLoading: false
      })
    }).catch(error => {
      console.log("get blog items error", error)
    })
  }

  componentWillMount() {
    this.getBlogItems();
  }

  activateInfiniteScroll() {
    window.onscroll = () => {
      if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
        return;
      }

      if (window.innerHeight + document.documentElement.scrollTop === window.document.documentElement.offsetHeight) {
        this.getBlogItems();
      }
    }
  }
  

  
  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem ={blogItem}/>
    })

    return (
      <div className="blog-container">
        <div className="content-container">
        {blogRecords}
      </div>
      {this.state.isLoading ? (
      <div className="content-loader">
          <FontAwesomeIcon icon="spinner" spin/>
        </div>
        ) : null}
      </div>
    )
  }
 }


export default Blog;