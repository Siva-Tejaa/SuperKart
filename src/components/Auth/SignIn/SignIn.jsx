import React from 'react';
import "./SignIn.css";

import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='signup'>
        <div className='signup-border'>
            <div className='signup-title'>Sign In</div>

            <div>
                <input type="email" placeholder='Email' className='field'/>
            </div>
            <div>
                <input type="password" placeholder='Password' className='field'/>
            </div>
            <div>
                <button className='field signup-btn'>Sign In</button>
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