import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import './EnrolledList.css';

const EnrolledListContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    const [students, setStudents] = useState([]);
    const {toggle} = props;

    
    // get students enrolled list
    useEffect(() => {
        setLoading(true);
        fetch('https://young-forest-78562.herokuapp.com/dashboard/admission')
        .then(res => res.json())
        .then(data => {
            setStudents(data);
            setLoading(false);
        });
    }, [update]);

    // get status data system


    // update student status
    const updateStatusChange = (e, id) => {
        setLoading(!loading);
        fetch('https://young-forest-78562.herokuapp.com/dashboard/admission/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({status: e.target.value})
        })
        .then(res => res.json())
        .then(data => {
            setLoading(!loading);
            setUpdate(!update);
        })
    };
    
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
                <h2 className="dash-brand">Enrolled Lists</h2>
                <div className="enrolled-list">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Course</th>
                                <th scope='col'>Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            students.map(student => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.course}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <div className="form-group">
                                            <select name="status" className={`form-control ${student.status.toLowerCase()}`} onChange={(e) => updateStatusChange(e, student._id)}>
                                                {
                                                    ["Done", "On Going", "Pending"].map(ele => <option value={ele} selected={student.status === ele ? true : false}>{ele}</option> )
                                                }
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        }
        </>
    );
};

export default EnrolledListContent;