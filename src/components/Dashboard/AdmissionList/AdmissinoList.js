import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import AdmissionListContent from './AdmissionListContent';


const AdmissionList = () => {
    const [toggle, setToggle] = useState(true);
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(false);
    const [admissions, setAdmissions] = useState([]);
   
    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    // get students enrolled list
    const {email} = JSON.parse(sessionStorage.getItem('user'));
    useEffect(() => {
        setLoading(true);
        fetch('https://young-forest-78562.herokuapp.com/dashboard/admission/'+email)
        .then(res => res.json())
        .then(data => {
            setAdmissions(data);
            setLoading(false);
        });
    }, [email]);
    
    // design
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
            {toggle && <DashSidebar active="admissionList"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="admissionList"/> : null }
            
            {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
            <h2>Admission List Status</h2>
                <div className="row">
                    {admissions.map(admission => <AdmissionListContent admission={admission} key={admission._id}/>)}
                </div>
            </div>
            }    
        </div>
    );
};

export default AdmissionList;