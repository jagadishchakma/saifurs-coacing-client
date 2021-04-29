import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="top-foo">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt=""/>
                            <p><FontAwesomeIcon icon={faAddressCard}/> Road 212, Dhaka, Bangladesh</p>
                            <p><FontAwesomeIcon icon={faEnvelope}/> jagadishchakma401@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone}/>+8801878581794</p>
                            <ul className="social-icon">
                                <li><a href="https://saifurs-b0a03.web.app/"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                <li><a href="https://saifurs-b0a03.web.app/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                <li><a href="https://saifurs-b0a03.web.app/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                <li><a href="https://saifurs-b0a03.web.app/"><FontAwesomeIcon icon={faYoutube}/></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>Quicks Links</h2>
                            <ul>
                                <li><a href="https://saifurs-b0a03.web.app/">Who We Are</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Privacy Policy</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Terms of Use</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Collaboration</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Join as Instructor</a></li>
                            </ul>
                        </div>
                        <div className="col-nd-3">
                            <h2>Follow Us</h2>
                            <ul>
                                <li><a href="https://saifurs-b0a03.web.app/">Facebook Page</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">YouTube Channel</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Live Channel</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Instagram</a></li>
                                <li><a href="https://saifurs-b0a03.web.app/">Linkdin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="text-center">&copy; 2020-2021 All Rights Reserverd By Shera Coaching Center</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;