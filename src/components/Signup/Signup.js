import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../AuthConfig/firebaseConfig';
import OtherLogIn from '../OtherLogIn/OtherLogIn';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Form from './Form';
import './Signup.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Signup = () => {
    document.title = "Saifur's | User Signup";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: false,
        success: false
    });
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        confirmPass: false
    });

    const [loading, setLoading] = useState(false);
    // redirect route
    const history = useHistory();
    const location = useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };

    /*----------------Start Create User Using Email and Password -----------------*/
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === "name"){
            const nameLength = value.length > 4;
            const nameText = /\w{4}/g.test(value);
            if(nameLength && nameText){
                const newUser = {...user};
                newUser.name = value;
                setUser(newUser);
                // error
                const newError = {...error};
                newError.name = true;
                setError(newError);
            }else{
                const newError = {...error};
                newError.name = false;
                setError(newError);
            }
        }
        if(name === "email"){
            const emailCheck = /\w{4}@(gmail|email|info|yahoo).com/.test(value);
            if(emailCheck){
                const newUser = {...user};
                newUser.email = value;
                setUser(newUser);
                // error
                const newError = {...error};
                newError.email = true;
                setError(newError);
            }else{
                const newError = {...error};
                newError.email = false;
                setError(newError);
            }
        }
        if(name === "password"){
            const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value);
            if(passCheck){
                const newUser = {...user};
                newUser.password = value;
                setUser(newUser);
                // error
                const newError = {...error};
                newError.password = true;
                setError(newError);
            }else{
                const newError = {...error};
                newError.password = false;
                setError(newError);
            }
        }
        if(name === "confirmPass"){
            const prevPass = user.password;
            const nextPass = value;
            if(prevPass === nextPass){
                const newUser = {...user};
                newUser.confirmPass = true;
                setUser(newUser);
                // error
                const newError = {...error};
                newError.confirmPass = true;
                setError(newError);
            }else{
                const newError = {...error};
                newError.confirmPass = false;
                setError(newError);
            }
        }
    }
    // submit user
    const handleCreateUser = (e) => {
        const {name, email, password, confirmPass} = user;
       if(name && email && password && confirmPass){
           setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                
                updateUserInfo(name);
                // set auth user
                const authUser = {...loggedInUser};
                authUser.name = name;
                authUser.email = email;
                setLoggedInUser(authUser);
                // user database save
                fetch('https://young-forest-78562.herokuapp.com/dashboard/user/', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({email: authUser.email, role: 'user'})
                    })
                    .then(res => res.json())
                    .then(data => {
                        sessionStorage.setItem('user', JSON.stringify({...authUser, role: 'user', photoUrl: 'https://th.bing.com/th/id/Rd86c2c5451fac92ed8e299f038e55576?rik=33FviH6siGvuJQ&pid=ImgRaw'}));
                       // after auth update error 
                        const updateError = {name: false, email: false, password: false, confirmPass: false};
                        setError(updateError);

                        // ufter auth update user
                        const updateUser = {
                            name: '',
                            email: '',
                            password: '',
                            confirmPass: false,
                            success: true
                        }
                        setUser(updateUser);
                        e.target.reset();
                        setLoading(false);
                        history.replace(from);
                    })
                
            })
            .catch((error) => {
            
            var errorMessage = error.message;
            // update user info
            const updateUser = {...user};
            updateUser.success = errorMessage;
            setUser(updateUser);
            setLoading(false);
            });
       }else{
            // update user info
            const updateUser = {...user};
            updateUser.success = "Input Field is Wrong";
            setUser(updateUser);
       }
        e.preventDefault();
    }
    // update user info 
    const updateUserInfo = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        photoURL: "https://th.bing.com/th/id/Rd86c2c5451fac92ed8e299f038e55576?rik=33FviH6siGvuJQ&pid=ImgRaw"
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
    }
     /*----------------End Create User Using Email and Password -----------------*/
    return (
        <>
        <Header/>
            <div className="signup container">
                <div className="signup-form">
                    <h3>Create an account</h3>
                    <Form handleCreateUser={handleCreateUser} handleChange={handleChange} error={error} success={user.success} loading={loading}/>
                    <div className="other-tools">
                        <h4 className="text-center">Already have an account? <Link to="/login">Login</Link></h4>
                    </div>
                </div>
                <OtherLogIn/>
            </div>
        <Footer/>
        </>
    );
};

export default Signup;