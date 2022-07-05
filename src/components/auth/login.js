import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       

    } 

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/token",
        {
                username: this.state.email,
                password: this.state.password
       
        }
        ).then(response => {
            if (response.status === 200) {
              this.props.handleSuccessfulAuth();
            } else {
              this.setState({
                errorText: "Wrong email or password"
              });
              this.props.handleUnSuccessfulAuth();
            }
          })
          .catch(error => {
            this.setState({
              errorText: "An error occurred"
            });
            this.props.handleUnSuccessfulAuth();
          });
    
        event.preventDefault();
      

        

        // sessionStorage.setItem('username', 'token');

        // console.log(sessionStorage.getItem('username'));
    }

//     handleStorage(event) {

//     // Save data to sessionStorage
// sessionStorage.setItem('token', 'value');

// // Get saved data from sessionStorage
// let data = sessionStorage.getItem('token');

//          // Get the text field that we're going to track
// let field = document.getElementById("token");

// // See if we have an autosave value
// // (this will only happen if the page is accidentally refreshed)
// if (sessionStorage.getItem("autosave")) {
//   // Restore the contents of the text field
//   field.value = sessionStorage.getItem("autosave");
// }

// // Listen for changes in the text field
// field.addEventListener("change", function() {
//   // And save the results into the session storage object
//   sessionStorage.setItem("autosave", field.value);
// });
// }



    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>{this.state.errorText}</div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="username" 
                    name="email"
                    placeholder='Username'
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="password" 
                    name="password"
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
   )
 }
}