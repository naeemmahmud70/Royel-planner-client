import React from 'react';
import contactBg from '../../../images/contact-bg.jpg'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="row mt-5 ">
            <div className="col-md-5">
                <img style={{height:"550px"}} className="img-fluid" src={contactBg} alt=""/>
            </div>
            <div className="col-md-7">

            <div className="contact mt-3">
           <div className="container">
               <div className="section-header text-center text-white mb-3">
                    <h5 className="text-white">Contact Form <span style={{fontWeight:'bold'}}>Management</span></h5>
                    <small>Send us a message for your personalized event booking.</small>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-success"> Send Message </button>
                       </div>
                   </form>
               </div>
           </div>
       </div>


            </div>
            
        </div>
    );
};

export default ContactForm;