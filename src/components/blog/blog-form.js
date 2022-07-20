import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router';
import Blog from './blogs';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            imageURL: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // buildForm() {
    //     let formData = new FormData();

    //     formData.append("blog[title]", this.state.title);
    //     // formData.append("[content]", this.state.content);
    //     // formData.append("[imageURL]", "https://google.com");

        
        
    //     return formData;
    // }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("https://burgerblogs.herokuapp.com/blog", { title: this.state.title, content: this.state.content, imageURL: this.state.imageURL }) // dont forget to add { withCredentials: true} so it requires authentication.
        .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data)
            this.setState({
                title: "",
                content: "",
                imageURL: ""
            })
            // if (response.status == 200){
            //     window.location("/blogs")
            // }
        }).catch(error => {
            console.log("error", error)
        })

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="blog-form">
                    <div className='two-column'>
                        <div className='top-column'>
                    <input onChange={this.handleChange} type="text" name="title" placeholder='Title' value={this.state.title}/>
                    <input onChange={this.handleChange} type="text" name="imageURL" placeholder='image' value={this.state.imageURL}/>
                    </div>
                    <input className="content-box" onChange={this.handleChange} type="text" name="content" placeholder='Content' value={this.state.content}/>
                    </div>
                    <button className='save-btn'>Save</button>
                </form>
            </div>
   )
 }
}