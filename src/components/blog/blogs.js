import React, { Component } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogItem from "./blogItem";
import BlogModal from "../modals/blog-modal";




class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentpage: 0,
      isLoading: true,
      blogModalisOpen: false
    }


    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfulBlogSubmission = this.handleSuccessfulBlogSubmission.bind(this);
  }

  handleSuccessfulBlogSubmission(blog) {
    this.setState({
      blogModalisOpen: false,
      blogItems: [blog].concat(this.state.blogItems)
    })
  }

  handleModalClose() {
    this.setState({
      blogModalisOpen: false
    })
  }

  handleNewBlogClick() {
    this.setState({
      blogModalisOpen: true
    })
  }

  getBlogItems() {
    this.setState({
      currentpage: this.state.currentpage + 1
    })
 
        axios.get(`http://localhost:5000/blogs?page=${this.state.currentpage}` 
        // add { withCredentials: true } next to the URL so it does auth stuff
        ).then(response => {
          this.setState({
            blogItems: this.state.blogItems.concat(response.data),
            totalCount: response.data.total_records,
            isLoading: false
          })
        }).catch(error => {
          console.log("get blog items error", error)
        })
 

  }

  componentDidMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  onScroll() {
      if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
        return;
      }

      if (window.innerHeight + document.documentElement.scrollTop === window.document.documentElement.offsetHeight) {
        this.getBlogItems();
      }
  }
  

  
  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem ={blogItem}/>
    })

    return (
      <div className="blog-container">
        <BlogModal getBlogItems={this.getBlogItems} handleSuccessfulBlogSubmission={this.handleSuccessfulBlogSubmission} handleModalClose={this.handleModalClose} modalIsOpen={this.state.blogModalisOpen}/>
        <div className="newbloglink">
          <a onClick={this.handleNewBlogClick}>
            Open Modal
          </a>
        </div>
        <div className="content-container">
          <h1>BLOG INDEX</h1>
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