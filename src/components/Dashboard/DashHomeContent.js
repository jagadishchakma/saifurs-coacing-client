import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';

const DashHomeContent = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const {name, photoUrl, email} = JSON.parse(sessionStorage.getItem('user'));
        fetch('https://young-forest-78562.herokuapp.com/dashboard/user/'+email)
         .then(res => res.json())
         .then(data => {
             sessionStorage.setItem('user', JSON.stringify({...data.message[0], name, photoUrl}));
             setLoading(false);
         })
    }, [])
    const {toggle} = props;
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel velit beatae laudantium omnis, illo nesciunt inventore distinctio quo placeat aspernatur, officia quasi aliquid dolorem! At odio voluptates voluptatem quisquam mollitia.</p>

        </div>
        }
        </>
    );
};

export default DashHomeContent;