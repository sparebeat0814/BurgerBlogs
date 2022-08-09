import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return(
        <p>Your message has been sent!</p>
    )
}

 function Contact(props) {
    const [result,showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6ztea8d', 'template_jzu1lff', e.target, 'Aq9g3ULCroRfIsh1U')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true)
      };


        return (
            <div>
                <div className='contact-wrapper'>
                <div className='left-side-contact'>
                    <h1>Contact Us</h1>
                
                <form className='contact-form' onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder='Name' className='name-input'/>   
                    <input type="email" name="user_email" placeholder='email' className='email-input'/>
                    <div className='question-input-wrapper'>
                    <textarea type="text" name="message" placeholder='type your questions, concerns etc. here' className='question-input' />
                    </div>
                    <button className='send-btn' on> Send </button> 
                    <div className='result'>{result ? <Result /> : null}</div>
                </form>
                </div>
                
                <div className='right-side-contact'>
                    <img src={require("./images/frenchfriescontactpage.jpg")} /> 
                </div>
                </div>
            </div>
   )
 }

 export default Contact;