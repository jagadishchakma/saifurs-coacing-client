import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://young-forest-78562.herokuapp.com/dashboard/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="container reviews" id="reviews">
            <h2 className="ubunto">Our Students Reviews</h2>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
            {
                reviews.map(review => (
                    <div className="review" key={review._id}>
                        <div className="user">
                            <div className="user-profile">
                                <img className="rounded-circle" src={review.profile} alt="" width="50px"/>
                            </div>
                            <div className="user-name">
                                <h6>{review.name}</h6>
                                <h6>{review.course} Students</h6>
                            </div>
                        </div>
                        <div className="review-text">
                            <p>{review.review}</p>
                        </div>
                        <div className="ratings">
                            <p>🌼🌼🌼</p>
                        </div>
                    </div>
                ))
            }
                
            </Carousel>
        </section>
    );
};

export default Review;