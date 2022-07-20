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
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(blog) {
    axios.delete(`https://burgerblogs.herokuapp.com/blog/${blog.id}`)
    .then(response => {
      // console.log("blog res from delete", response)
      this.setState({
        blogItems: this.state.blogItems.filter(blogItem => {
          return blog.id != blogItem.id
        })
      })
    }).catch(error => {
      console.log("error", error)
    })
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
 
        axios.get(`https://burgerblogs.herokuapp.com/blogs?page=${this.state.currentpage}` 
        // add { withCredentials: true } next to the URL so it does auth stuff
        ).then(response => {
          // console.log("response", response)
          this.setState({
            blogItems: response.data,
            totalCount: response.data,
            isLoading: false
          })
        }).catch(error => {
          console.log("get blog items error", error)
        })
 

  }

  componentDidMount() {
    this.getBlogItems();
    console.log("----->",this.props.loggedInStatus);
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
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return(
          <div key={blogItem.id} className="admin-blog-wrapper">
            <BlogItem  blogItem={blogItem} />
            <a onClick={() => this.handleDeleteClick(blogItem)}>
              <FontAwesomeIcon icon="ban" />
            </a>
          </div>
        )
      } else {

      return <BlogItem key={blogItem.id} blogItem ={blogItem}/>}
    })

    

    return (
      <div>
        <div className="newbloglink">
        {this.props.loggedInStatus === "LOGGED_IN" ? ( <a onClick={this.handleNewBlogClick}>
            <FontAwesomeIcon icon="floppy-disk" />
          </a> ) : null}
        </div>
      <div className="blog-container">
        <BlogModal handleSuccessfulBlogSubmission={this.handleSuccessfulBlogSubmission} handleModalClose={this.handleModalClose} modalIsOpen={this.state.blogModalisOpen}/>

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
      </div>
    )
  }
 }


export default Blog;