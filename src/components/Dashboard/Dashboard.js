import React, { useState } from 'react';
import './Dashboard.css';
import DashHeader from './DashHeader';
import DashHomeContent from './DashHomeContent';
import DashSidebar from './DashSidebar';

const Dashboard = () => {
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
            {toggle && <DashSidebar active="dashboard"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="dashboard"/> : null }
            {<DashHomeContent toggle={toggle}/>}
        </div>
    );
};

export default Dashboard;