import React from 'react';
import './HowToEnroll.css';

const HowToEnroll = () => {
    return (
        <section className="container" id="how-to-enroll">
            <div className="how-to-enroll">
                <h2 className="ubunto">How To Enroll?</h2>
                <div className="row">
                    <div className="col-md-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/O-6f5wQXSu8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid fugiat optio reprehenderit voluptatem molestiae vel inventore. Ipsam sequi laboriosam quam consectetur consequatur, officia sit sint! Nam ratione aliquam eveniet!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid fugiat optio reprehenderit voluptatem molestiae vel inventore. Ipsam sequi laboriosam quam consectetur consequatur, officia sit sint! Nam ratione aliquam eveniet!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToEnroll;