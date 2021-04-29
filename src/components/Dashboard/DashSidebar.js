import { faCommentAlt, faGlobe, faList, faListAlt, faPlus, faShoppingCart, faTachometerAlt, faThList, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DashSidebar = (props) => {
    const {display, active} = props;
    const block = {
        display: 'block',
    }
    const {role} = JSON.parse(sessionStorage.getItem('user'));
    return (
        <div className="dash-sidebar ubunto" style={display && block}>
            {
                role === "admin" ? <ul>
                <li className={active === 'dashboard' ? 'active' : null}><Link to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt}/> Dashboard</Link></li>
                <li className={active === 'addCourse' ? 'active' : null}><Link to="/dashboard/addCourse"><FontAwesomeIcon icon={faPlus}/> Add Course</Link></li>
                <li className={active === 'manageCourse' ? 'active' : null}><Link to="/dashboard/manageCourse"><FontAwesomeIcon icon={faList}/> Manage Course</Link></li>
                <li className={active === 'enrolledList' ? 'active' : null}><Link to="/dashboard/enrolledList"><FontAwesomeIcon icon={faListAlt}/> Enrolled List</Link></li>
                <li className={active === 'addAdmin' ? 'active' : null}><Link to="/dashboard/addAdmin"><FontAwesomeIcon icon={faUserShield}/> Add Admin</Link></li>
                <li className={active === 'mainSite' ? 'active' : null}><Link to="/"><FontAwesomeIcon icon={faGlobe}/> Main Site</Link></li>
            </ul>
            :
            <ul>
            <li className={active === 'mainSite' ? 'active' : null}><Link to="/"><FontAwesomeIcon icon={faGlobe}/> Main Site</Link></li>
                <li className={active === 'admission' ? 'active' : null}><Link to="/dashboard/admission"><FontAwesomeIcon icon={faShoppingCart}/> Admission</Link></li>
                <li className={active === 'admissionList' ? 'active' : null}><Link to="/dashboard/admissionList"><FontAwesomeIcon icon={faThList}/> Admission List</Link></li>
                <li className={active === 'dashReview' ? 'active' : null}><Link to="/dashboard/review"><FontAwesomeIcon icon={faCommentAlt}/> Review</Link></li>
                <li className={active === 'profile' ? 'active' : null}><Link to="/dashboard/profile"><FontAwesomeIcon icon={faUser}/> Profile</Link></li>
            </ul>
            }    
        </div>
    );
};

export default DashSidebar;