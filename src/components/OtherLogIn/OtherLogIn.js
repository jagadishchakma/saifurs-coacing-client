import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from '../AuthConfig/firebaseConfig';
import './OtherLogIn.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const OtherLogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isLoggedIn: false,
        result: ""
    });
    // redirect login route
    const history = useHistory();
    const location =useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const {isLoggedIn, result} = user;
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleSignUp = (provider) => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            // The signed-in user info.
            const newUser = result.user;
            // set auth user
            const authUser = {...loggedInUser};
            authUser.name = newUser.displayName;
            authUser.email = newUser.email;
            authUser.photoUrl  = newUser.photoURL;
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
                        // update user info
                        const updateUser = {...user};
                        updateUser.isLoggedIn = true;
                        updateUser.result = "Successfully Log In ✔✔";
                        setUser(updateUser);
                        // redirect
                        history.replace(from);
                    })
                }else{
                    sessionStorage.setItem('user', JSON.stringify({...authUser, role: data.message[0].role}));
                    // update user info
                    const updateUser = {...user};
                    updateUser.isLoggedIn = true;
                    updateUser.result = "Successfully Log In ✔✔";
                    setUser(updateUser);
                    // redirect
                    history.replace(from);
                }
                
            })
            
            
        }).catch((error) => {
        
            var errorMessage = error.message;
            
            // update user info
            const updateUser = {...user};
            updateUser.isLoggedIn = false;
            updateUser.result = errorMessage;
            setUser(updateUser);
        });
    }
    return (
        <>
            <h4 className="text-center">--------- Or ----------</h4>
            <div className="other-login">
                {
                    isLoggedIn ? <p className="alert alert-success text-center">{result}</p> 
                    :  <p className="alert-warning text-center">{result}</p>
                }
                <button className="btn btn-info btn-block" onClick={() => handleSignUp(googleProvider)}> <FontAwesomeIcon icon={faGoogle}/> Continue With Google</button>
                <button className="btn btn-danger btn-block" onClick={() => handleSignUp(facebookProvider)}> <FontAwesomeIcon icon={faFacebook}/> Continue With Facebook</button>
            </div>
       </> 
    );
};

export default OtherLogIn;