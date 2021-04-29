import React, { useEffect, useState } from 'react';
import Course from './Course';
import './Course.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      
        fetch('https://young-forest-78562.herokuapp.com/dashboard/course', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
        })
    }, [])
    return (
        <section className="container" id="pricing">
            <h2 className="courses-headline ubunto">Academic Course Plans: (Montly)</h2>
            <div className="course">
                <div className="row">
                    {
                        courses.map(course => <Course course={course} key={course._id}/>)
                    }      
                </div>
            </div>
        </section>
    );
};

export default Courses;