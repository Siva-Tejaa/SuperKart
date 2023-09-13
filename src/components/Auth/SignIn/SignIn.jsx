import React,{useState} from 'react';
import "./SignIn.css";

import { Link } from 'react-router-dom';

import { auth, db } from "../Firebase/Firebase.jsx"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";

const SignIn = () => {

    const initiallValues = {
        email:"",
        password:"",
    }

    const [userData, setUserData] = useState(initiallValues);

    const{email, password} = userData;

    const changeHandler = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const submitHandler = async (e) => {

        e.preventDefault();
        setUserData(initiallValues);

        let uid;

        await signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((succ) => {
            console.log(succ);
            console.log(succ.user.uid);
            uid=`${succ.user.uid}`
        })
        .catch((err) => console.log(err));

        if(uid){

            const docRef = doc(db, "userDetails", `${uid}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }

        }

    }


  return (
    <div className='signup'>
        <div className='signup-border'>
            <div className='signup-title'>Sign In</div>

            <div>
                <input type="email" name="email" value={email} onChange={changeHandler} placeholder='Email' className='field' autoComplete="off" required/>
            </div>
            <div>
                <input type="password" name="password" value={password} onChange={changeHandler} placeholder='Password' className='field' autoComplete="off" required/>
            </div>
            <div>
                <button className='field signup-btn' onClick={submitHandler}>Sign In</button>
            </div>
            <div className='signup-account'>
                <p>Don't have an account? <Link to="/signup"><a className='signup-link'>Sign up</a></Link></p>
            </div>
            <div className='signup-account'>
                <p>By continuing, you agree to SuperKart's Conditions of Use and Privacy Notice.</p>
            </div>
        </div>
    </div>
  )
}

export default SignIn