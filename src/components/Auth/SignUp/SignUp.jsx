import React,{useState} from 'react';
import "./SignUp.css";

import { Link, useNavigate } from 'react-router-dom';

import { auth, db } from "../Firebase/Firebase.jsx"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 

const SignUp = () => {

    const initiallValues = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        profile:"",
    }

    const [userData, setUserData] = useState(initiallValues);

    const{firstname, lastname, email, password} = userData;

    const changeHandler = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const navigate = useNavigate();

    const submitHandler = async (e) => {

        e.preventDefault();
        console.log({...userData, profile:`https://i1.wp.com/cdn.auth0.com/avatars/${userData?.firstname.slice(0,1).toLowerCase()}${userData?.lastname.slice(0,1).toLowerCase()}.png`});
        setUserData(initiallValues);

        await createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((succ) => {
            console.log(succ);
            console.log(succ.user.uid);

            setDoc(doc(db, "userDetails", `${succ.user.uid}`), {
                email:`${userData?.email}`,
                firstname: `${userData?.firstname}`,
                lastname: `${userData?.lastname}`,
                profile: `https://i1.wp.com/cdn.auth0.com/avatars/${userData?.firstname.slice(0,1).toLowerCase()}${userData?.lastname.slice(0,1).toLowerCase()}.png`,
                timestamp:serverTimestamp()
            });

            alert("User Created Successfully");
            navigate('/signin');

            
        })
        .catch((err) => {
            console.log(err);
            alert("Something went wrong");
        });

    }


  return (
    <div className='signup'>
        <div className='signup-border'>
            <div className='signup-title'>Create Account</div>
            <div className='signup-name'>
                <div>
                    <input type="text" name="firstname" value={firstname} onChange={changeHandler} placeholder='FirstName' className='field' autoComplete="off" required/>
                </div>
                <div>
                    <input type="text" name="lastname" value={lastname} onChange={changeHandler} placeholder='LastName' className='field' autoComplete="off" required/>
                </div>
            </div>
            <div>
                <input type="email" name="email" value={email} onChange={changeHandler} placeholder='Email' className='field' autoComplete="off" required/>
            </div>
            <div>
                <input type="password" name="password" value={password} onChange={changeHandler} placeholder='Password' className='field' autoComplete="off" required/>
            </div>
            <div>
                <button className='field signup-btn' onClick={submitHandler}>Sign Up</button>
            </div>
            <div className='signup-account'>
                <p>Already have an account? <Link to="/signin" className='signup-link'>Sign in</Link></p>
            </div>
            <div className='signup-account'>
                <p>By creating an account, you agree to SuperKart's<br/> Conditions of Use and Privacy Notice.</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp