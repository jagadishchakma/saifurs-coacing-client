import React, { useState } from 'react';
import DashboardHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import ProfileContent from './ProfileContent';

const Profile = () => {
    const [toggle, setToggle] = useState(true);
    const [display, setDisplay] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    const browser = window.innerWidth;
    return (
        <div className="profile">
            <DashboardHeader toggleSidebar={toggleSidebar}/>
            {toggle && <DashSidebar active="profile"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="profile"/> : null }
            <ProfileContent toggle={toggle}/>
        </div>
    );
};

export default Profile;