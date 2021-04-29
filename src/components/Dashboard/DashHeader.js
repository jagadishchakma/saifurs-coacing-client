import React from 'react';
import { useHistory } from 'react-router-dom';

const DashboardHeader = (props) => {
    const {toggleSidebar} = props;
    const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
    const history = useHistory();
    const logOut = () => {
        sessionStorage.removeItem('user');
        history.push('/');
    }
    return (
        <header className="dashboard-header">
            <nav className="dashboard-nav">
                <menu className="dash-menu">
                    <div className="dashboard-brand">
                       <div className="dash-collaborate" onClick={toggleSidebar}>
                            <span className="hr"></span>
                            <span className="hr"></span>
                            <span className="hr"></span>
                       </div>
                       <div className="dash-user">
                           <h6>{loggedInUser.name}</h6>
                       </div>
                    </div>
                    <div className="dashboard-user">
                        <button className="btn btn-danger" onClick={logOut}>Logout</button>
                    </div>
                </menu>
            </nav>
        </header>
    );
};

export default DashboardHeader;