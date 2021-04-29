import React from 'react';
import './AdmissionList.css';

const AdmissionListContent = (props) => {
    const {course, status} = props.admission;
    return (
        <div className="col-md-4">
            <div className="admissin-list">
                <h1 className="text-center">
                    {course}
                </h1>
                <h3 className={`${status.toLowerCase()}`}>{status}</h3>
            </div>
        </div>
    );
};

export default AdmissionListContent;