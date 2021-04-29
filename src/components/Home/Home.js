import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Courses from './Course/Courses';
import './Home.css';
import HowToEnroll from './HowToEnroll/HowToEnroll';
import Review from './Review/Review';
import WhyEnrolled from './WhyEnrolled/WhyEnrolled';


const Home = () => {
    document.title="Saifu'rs Coaching Center";
    return (
        <div className="main-home">
            <div className="top-section">
                <Header/>
                <Banner/>
            </div>
            <WhyEnrolled/>
            <Courses/>
            <HowToEnroll/>
            <Contact/>
            
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;