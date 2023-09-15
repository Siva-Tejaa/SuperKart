import React from 'react';
import "./Profile.css";

import { useSelector } from "react-redux";


const Profile = () => {

  const userData = useSelector((state) => state.user);

  return (
    <div className='profile'>
        <div className='profile-details'>
            <div className='account-details'>Account Details</div>
            <div className='profile-user-details'>
                <div>
                    <img src={userData[0]?.profile} className='user-profile-image' alt="User Image"/>
                </div>
                <div>{userData[0]?.firstname}</div>
            </div>
        </div>
    </div>
  )
}

export default Profile