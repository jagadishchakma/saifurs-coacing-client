import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Spinner/Loading';
import Spinner from '../../Shared/Spinner/Spinner';

const AddCourseContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({spacial: 'not-spacial'});
    const [success, setSuccess] = useState(false);
    const [submit, setSubmit] = useState(false);
    const {toggle} = props;
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);
    // data retrieve form
    const handleInputChange = (e) => {
        if(e.target.name === 'spacial'){
            if(e.target.checked === true){
                const newCourse = {...course};
                newCourse[e.target.name] = 'spacial';
                setCourse(newCourse);   
            }else{
                const newCourse = {...course};
                newCourse['spacial'] = 'not-spacial';
                setCourse(newCourse);   
            }
        }else{
            const newCourse = {...course};
            newCourse[e.target.name] = e.target.value;
            setCourse(newCourse);
        }
        
    }

    // data form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSuccess(!success);
        fetch('https://young-forest-78562.herokuapp.com/dashboard/course', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(false);
            setSubmit(!submit);
            e.target.reset();
        })
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
    return (
        <>
        {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                <h2 className="dash-brand">Add Course</h2>
                <form onSubmit={handleFormSubmit}> 
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handleInputChange} name="name" placeholder="Enter Course Name Here" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handleInputChange} name="title" placeholder="Enter Course Title Here" required/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" onChange={handleInputChange} name="price" placeholder="Enter Course Price In BD" required/>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={handleInputChange} name="spacial" />
                            <label className="form-check-label">
                                Will Be Spacial?
                            </label>
                        </div>
                    </div>
                    {submit && <p className="alert alert-success">Success Course Insert</p> }
                    <button type="submit" className="btn btn-success">{success ? <Loading/> : 'Submit'}</button>
                </form>
            </div>
        }
        </>
    );
};

export default AddCourseContent;