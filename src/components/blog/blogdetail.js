import React, { Component } from 'react';
import axios from 'axios';


export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.id,
            blogItem: {}
        }
    }

    getBlogItem() {
        axios.get(`http://localhost:5000/blog/${this.state.currentId}`)
        .then(response => {
            console.log("response", response);
            this.setState({
                blogItem: response.data
            })
        }).catch(error => {
            console.log("error", error);
        })

    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        const {
            title,
            content,
            imageURL
        } = this.state.blogItem
        return (
            <div className='blog-container'>
            <div className='content-container'>
                <h1>{title}</h1>
                <div className='imageURL-wrapper'>
                <img src={imageURL} />
                </div>
                <div className='content'>{content}</div>
            </div>
            </div>
   )
 }
}