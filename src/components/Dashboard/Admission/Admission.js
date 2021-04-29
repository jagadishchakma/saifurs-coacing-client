import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../../Shared/Spinner/Spinner';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import './Admission.css';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_test_51Ie7qMGuEqdTZvqBX0Ww22AfAVLaYcSYUoEKlJ6eol5tdzZfIrPff9J0wTz1UraEXcjE261v9Pe4kcRwrs0aoAX800OC6P5pe7');
const Admission = () => {
    const [toggle, setToggle] = useState(true);
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(false);
    const [course, setCourse] = useState([]);
    const {id} = useParams();
    // orders data load
    useEffect(() => {
        setLoading(true);
        fetch('https://young-forest-78562.herokuapp.com/dashboard/course/'+id)
        .then(res => res.json())
        .then(data => {
            setCourse(data[0])
            setLoading(false);
        })
    },[id]);


    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    const fullWidth = {
        width: '100%',
        marginTop: '70px',
    };
    const halfWidth= {
        marginLeft: '200px',
        marginTop: '60px',
    };
    const browser = window.innerWidth;
    return (
        <div className="dashboard admission">
            <DashHeader toggleSidebar={toggleSidebar} active="adminssion"/>
            {toggle && <DashSidebar active="admission"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display}/> : null }
            {
                loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                    <Elements stripe={stripePromise}>
                     <Checkout course={course}/>
                    </Elements>
                </div>
            }
        </div>
    );
};

export default Admission;