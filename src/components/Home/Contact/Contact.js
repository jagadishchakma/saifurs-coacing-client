import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="container" id="contact">
            <div className="contact">
                <h2 className="ubunto">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contct-form">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="name" className="ubunto">Your Name:</label>
                                    <input type="text" className="form-control" name="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title" className="ubunto">Message Title:</label>
                                    <input type="text" className="form-control" name="title"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="ubunto">Your Email:</label>
                                    <input type="email" className="form-control" name="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className="ubunto">Your Message:</label>
                                    <textarea name="message" className="form-control" value="Write Your Message....."></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199895.51993728027!2d90.27923775747219!3d23.78088745621176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1618621296749!5m2!1sen!2sbd" width="100%" height="450" style={{border:'0'}} allowFullScreen={true} loading="lazy" title="Map"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;