import React, { useState } from 'react';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import AddCourseContent from './AddCourseContent';

const AddCourse = () => {
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
            {toggle && <DashSidebar active="addCourse"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="addCourse"/> : null }
            <AddCourseContent toggle={toggle}/>
        </div>
    );
};

export default AddCourse;