import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from "../../components/blog/blog-form";

// the only reason we are saying this right now is for screen readers. This will get rid of a weird warning that confuses the screen readers. The .app-wrapper is a class we can find in our index html doc
ReactModal.setAppElement(".app-wrapper")

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        // this is basically the styling for the modal
        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };

        this.hanldeSuccessfulFormSubmission = this.hanldeSuccessfulFormSubmission.bind(this);
    }

    hanldeSuccessfulFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog)
    }

    render () {
        return (
            <ReactModal 
            style={this.customStyles}
            onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}>
            <BlogForm hanldeSuccessfulFormSubmission={this.hanldeSuccessfulFormSubmission} />
            </ReactModal>
        )
    }
}