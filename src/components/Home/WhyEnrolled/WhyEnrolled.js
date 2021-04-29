import { faQuestion, faSchool, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyEnrolled.css';

const WhyEnrolled = () => {
    return (
        <section className="container why-enrolled" id="about">
            <h2 className="ubunto">Why You Should Enrolled Our Coaching Center?</h2>
            <div className="benefits">
                <div className="row">
                    <div className="col-md-4">
                        <div className="effective">
                            <div className="effective-header">
                                <h3><FontAwesomeIcon icon={faSchool}/></h3>
                                <h3>Effective Learning</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero dolorem repellat. Repellat aliquam atque vel. Delectus numquam eaque debitis ab, repudiandae quibusdam sint eum non, unde molestias quasi quaerat.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                       <div className="support">
                        <div className="support-header">
                                <h3><FontAwesomeIcon icon={faQuestion}/></h3>
                                <h3>Unlimited Support</h3>
                        </div>
                        <img src="https://th.bing.com/th/id/OIP.XnZBEwVI_v6XOoxGCzR-4AHaGB?w=191&h=180&c=7&o=5&pid=1.7" alt=""/>
                       </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gpa">
                            <div className="gpa-header">
                                <h3><FontAwesomeIcon icon={faUserGraduate}/></h3>
                                <h3>Got A+</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque dolorem sed expedita quas temporibus quaerat, ex ullam necessitatibus perferendis nemo esse, debitis quos vitae sit ipsa quia, ipsam omnis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyEnrolled;