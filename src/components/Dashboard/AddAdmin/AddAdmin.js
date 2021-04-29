import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import './AddAdmin.css';


const AdmissionList = () => {
    const [toggle, setToggle] = useState(true);
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(false);
    const [admin, setAdmin] = useState({email: '', role: ''});
    const [message, setMessage] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 100);
    },[]);

    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    // add admin
    const handleInputChange = (e) => {
        const newAdmin = {...admin};
        newAdmin['role'] = 'admin';
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    };
    // submit new admin
    const handleFormSubmit = () => {
        
        if(admin.email){
            setLoading(true);
            fetch('https://young-forest-78562.herokuapp.com/dashboard/user/'+admin.email)
            .then(res => res.json())
            .then(data => {
                if(data.message.length < 1){
                    fetch('https://young-forest-78562.herokuapp.com/dashboard/user/', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify(admin)
                    })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false);
                        setMessage('Successfully Admin Added');
                    })
                }else{
                    fetch('https://young-forest-78562.herokuapp.com/dashboard/user/'+admin.email, {
                        method: 'PUT',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify(admin)
                    })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false);
                        const logUser = JSON.parse(sessionStorage.getItem('user'));
                        sessionStorage.setItem('user', JSON.stringify({name: logUser.name, email: logUser.email, photoURL: logUser.photoUrl, role: 'admin'}));
                        setMessage('User Already Have. Just Role Updated');
                    })
                }
            })
        }    
    }
    
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
            {toggle && <DashSidebar active="addAdmin"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="addAdmin"/> : null }
            
            {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
            <h2>Add Admin</h2>
                <div className="add-admin">
                    <div className="admin-email">
                        <input type="email" name="email" onChange={handleInputChange} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="admin-confirm">
                        <input type="submit" className="btn btn-danger" value="Submit" onClick={handleFormSubmit}/>
                    </div>
                </div>
                {
                    message && <p className="alert alert-success add-admin">{message}</p>
                }
            </div>
            }    
        </div>
    );
};

export default AdmissionList;