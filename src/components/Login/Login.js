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
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    document.title="Saifur's | User Login";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        email: false,
        password: false,
    });
    const [result, setResult] = useState({
        isLoggedIn: false,
        message: ""
    });
    const [loading, setLoading] = useState(false);
    // redirect route integrate
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    //input handle change validation
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       if(name === "email"){
            const emailCheck = /\w{4}@(gmail|email|info|yahoo).com/.test(value);
            if(emailCheck){
                const loginUser = {...user};
                loginUser.email = value;
                setUser(loginUser);
            }else{
                const loginUser = {...user};
                loginUser.email = false;
                setUser(loginUser);
            }
       }
       if(name === "password"){
        const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value);
        if(passCheck){
            const loginUser = {...user};
            loginUser.password = value;
            setUser(loginUser);
        }else{
            const loginUser = {...user};
            loginUser.password = false;
            setUser(loginUser);
        }
       }
    }
    // log in submit
    const handleSubmit = (e) => {
        const {email, password} = user;
        if(email && password){
            setLoading(true);
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const loginUser = userCredential.user;

                // set up auth info
                const authUser = {...loggedInUser};
                authUser.name = loginUser.displayName;
                authUser.email = loginUser.email;
                authUser.photoUrl = loginUser.photoURL;
                setLoggedInUser(authUser);
                // user database role setup
                fetch('https://young-forest-78562.herokuapp.com/dashboard/user/'+authUser.email)
                .then(res => res.json())
                .then(data => {
                    if(data.message.length < 1){
                        fetch('https://young-forest-78562.herokuapp.com/dashboard/user/', {
                            method: 'POST',
                            headers: {
                                'Content-Type':'application/json'
                            },
                            body: JSON.stringify({email: authUser.email, role: 'user'})
                        })
                        .then(res => res.json())
                        .then(data => {
                            sessionStorage.setItem('user', JSON.stringify({...authUser, role: 'user'}));
                            // set up result
                            const newResult = {...result};
                            newResult.isLoggedIn = true;
                            newResult.message = "Successfully Log In ✔✔";
                            setResult(newResult);
                            e.target.reset();
                            setLoading(false);
                            // redirect
                            history.replace(from);
                        })
                    }else{
                        sessionStorage.setItem('user', JSON.stringify({...authUser, role: data.message[0].role}));
                        // set up result
                        const newResult = {...result};
                        newResult.isLoggedIn = true;
                        newResult.message = "Successfully Log In ✔✔";
                        setResult(newResult);
                        e.target.reset();
                        setLoading(false);
                        // redirect
                        history.replace(from);
                    }
                    
                })
        
                // // set up result
                // const newResult = {...result};
                // newResult.isLoggedIn = true;
                // newResult.message = "Successfully Log In ✔✔";
                // setResult(newResult);
                // e.target.reset();
                // setLoading(false);
                // // redirect
                // history.replace(from);
            })
            .catch((error) => {
                
                var errorMessage = error.message;
                // set up result
                const newResult = {...result};
                newResult.isLoggedIn = false;
                newResult.message = errorMessage;
                setResult(newResult);
                setLoading(false);
            });
        }
        e.preventDefault();
    }
    return (
        <>
        <Header/>
            <div className="login container">
            <div className="login-form">
                    <h3>Login</h3>
                    <Form handleChange={handleChange} user={user} handleSubmit={handleSubmit} result={result} loading={loading}/>
                    <div className="alter">
                        <h4 className="text-center">Don't have an account? <Link to="/signup">Create Account</Link></h4>
                    </div>
            </div>
            <OtherLogIn/>
            </div>
        <Footer/>
        </>
    );
};

export default Login;