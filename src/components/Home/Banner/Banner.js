import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="container">
            <div className="banner">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="ubunto"> <span className="brand-text">Effective Learning</span> is Better Than a Normal Learning.</h2>
                        <p className="ubunto">Choose your curiculom,  enroll now, move fast, and get better expreience about learning. </p>
                        <div className="curiculom">
                            <div className="psc">
                                PSC
                            </div>
                            <div className="jsc">
                                JSC
                            </div>
                            <div className="ssc">
                                SSC
                            </div>
                            <div className="hsc">
                                HSC
                            </div>
                        </div>
                        <button className="btn btn-warning enroll">Enroll Now</button>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://i.ibb.co/gVyLtFQ/studying.png" alt="" width="100%" height="auto"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;