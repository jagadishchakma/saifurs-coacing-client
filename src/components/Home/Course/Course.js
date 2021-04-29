import { faAddressBook, faAward, faBookOpen, faBus, faDiagnoses, faSearch, faSignLanguage, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Course = (props) => {
    const {_id, name, title, price, spacial} = props.course;
    const design = ["PSC", "JSC", "SSC", "HSC"];
    const isHas = design.includes(name);
    const history = useHistory();
    const processOrder = (id) => {
        history.push('/dashboard/admission/'+id);
    }
    
    return (
        <div className="col-md-6 col-lg-3 col-sm-6">
            <div className={`card ${isHas ? name.toLowerCase() : 'default'} ${spacial}`}>
                <div className="card-header">
                    <h2>{name}</h2>
                    <h5>{title}</h5>
                </div>
                <div className="card-body">
                    <div className="course-price">
                        <h2 className="text-center p-2"><span className="tk-sign">৳</span> {price} /-</h2>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li><span className="icon"><FontAwesomeIcon icon={faBookOpen}/></span> Notebook</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faDiagnoses}/></span> Montly Exam</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faAddressBook}/></span> Sylabus</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faSignLanguage}/></span> Eng & Bn Conversion</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faBus}/></span> Tours Ceremony</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faAward}/></span> Compatative Award</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faSearch}/></span> Suggestion Book</li>
                            <li><span className="icon"><FontAwesomeIcon icon={faTasks}/></span> Practical Task</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-success" onClick={() => processOrder(_id)}>Enroll Here</button>
                </div>
            </div>
        </div>
    );
};

export default Course;