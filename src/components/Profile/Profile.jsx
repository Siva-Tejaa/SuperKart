import React from 'react';
import "./Profile.css";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom';

import { clearCurrentUser } from '../../redux/features/userSlice';

import { clearCart } from '../../redux/features/cartSlice';


const Profile = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);

  const logoutHandler = () =>{

    dispatch(clearCart());
    dispatch(clearCurrentUser());
    sessionStorage.clear();
    navigate("/");

  }

  return (
    <div className='profile'>
        <div className='profile-details'>
            <div className='account-details'>Account Details</div>
            <div className='profile-user-details-parent'>
            <div className='profile-user-details'>
                <div>
                    <img src={userData[0]?.profile} className='user-profile-image' alt="User Image"/>
                </div>
                <div>
                  <div className='profile-username'>{userData[0]?.firstname} {userData[0]?.lastname}</div>
                  <div>{userData[0]?.email}</div>
                </div>
            </div>
            <div className='logout'>
              <button className='logout-btn' onClick={logoutHandler}>Logout</button>
            </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Profile