import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Spinner from '../../Shared/Spinner/Spinner';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';


const Review = () => {
    const [toggle, setToggle] = useState(true);
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(true);
    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    setTimeout(() => {
        setLoading(false);
    }, 200);

    // user login info and review insert into database
    const [review, setReview] = useState({});
    const [loggedInUser, ] = useContext(UserContext);
    const {name, email, photoUrl} = loggedInUser;
    const handleInputChange = (e) => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        newReview['name'] = name;
        newReview['email'] = email;
        newReview['profile'] = photoUrl;
        setReview(newReview);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://young-forest-78562.herokuapp.com/dashboard/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // responsive desgin pattern of sidebar
    const fullWidth = {
        width: '100%',
        marginTop: '70px',
    };
    const halfWidth= {
        marginLeft: '200px',
        marginTop: '70px',
    };
    const browser = window.innerWidth;
    return (
        <div className="dashboard">
            <DashHeader toggleSidebar={toggleSidebar}/>
            {toggle && <DashSidebar active="dashReview"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="dashReview"/> : null }
            {
                loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                <h2 className="dash-brands">Write a Review</h2>
                <form onSubmit={handleFormSubmit}> 
                    <div className="form-group">
                        <select name="course" className="form-control" onChange={handleInputChange}>
                            <option value="Select Your Course">Select Your Course</option>
                            <option value="PSC">PSC Course</option>
                            <option value="JSC">JSC Course</option>
                            <option value="SSC">SSC Course</option>
                            <option value="HSC">HSC Course</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <textarea name="review" value={review.review} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div>
            }
        </div>
    );
};

export default Review;