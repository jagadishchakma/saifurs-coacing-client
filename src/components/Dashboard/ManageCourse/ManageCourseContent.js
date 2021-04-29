import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Spinner from '../../Shared/Spinner/Spinner';

const ManageCourseContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [update, setUpdate] = useState(false);
    const {toggle} = props;
    useEffect(() => {
        setLoading(true);
        fetch('https://young-forest-78562.herokuapp.com/dashboard/course', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setLoading(false);
        })
    }, [update])
    const fullWidth = {
        width: '100%',
        marginTop: '70px',
    };
    const halfWidth= {
        marginLeft: '200px',
        marginTop: '70px',
    };
    // course delete
    const courseDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                setLoading(true);
              fetch('https://young-forest-78562.herokuapp.com/dashboard/course/delete/'+id, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                setLoading(false);
                setUpdate(!update);  
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
              })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    return (
        <>
        {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                <h2 className="dash-brand">Manage Course</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Course</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course => (
                                <tr key={course._id}>
                                    <td>{course.name}</td>
                                    <td>{course.title}</td>
                                    <td>Tk. {course.price}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger ml-2" onClick={() => courseDelete(course._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default ManageCourseContent;