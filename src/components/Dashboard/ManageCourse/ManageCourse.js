import React, { useState } from 'react';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import ManageCourseContent from './ManageCourseContent';

const ManageCourse = () => {
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
            {toggle && <DashSidebar active="manageCourse"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="manageCourse"/> : null }
            <ManageCourseContent toggle={toggle}/>
        </div>
    );
};

export default ManageCourse;