import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const ProfileContent = (props) => {
    const [loading, setLoading] = useState(false);
    const {toggle} = props;
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);
    
    // user info data
    const loggedInUser = JSON.parse(sessionStorage.getItem('user'));

    // design
    const fullWidth = {
        width: '100%',
        marginTop: '70px',
    };
    const halfWidth= {
        marginLeft: '200px',
        marginTop: '70px',
    };
    return (
        <>
        {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                <h2 className="dash-brand">Profile</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{loggedInUser.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>{loggedInUser.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Photo</th>
                            <td><img className="rounded-circle" src={loggedInUser.photoUrl} alt="" width="100"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default ProfileContent;