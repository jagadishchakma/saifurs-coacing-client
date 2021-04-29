import React, { useState } from 'react';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import EnrolledListContent from './EnrolledListContent';

const EnrolledList = () => {
    const [toggle, setToggle] = useState(true);
    const [display, setDisplay] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    
    const browser = window.innerWidth;
    return (
        <div className="dashboard">
            <DashHeader toggleSidebar={toggleSidebar}/>
            {toggle && <DashSidebar active="enrolledList"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="enrolledList"/> : null }
            <EnrolledListContent toggle={toggle}/>
        </div>
    );
};

export default EnrolledList;