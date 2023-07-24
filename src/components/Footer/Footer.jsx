import React from 'react';
import "./Footer.css";

import paymentmethods from "../../assets/payment-methods.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div onClick={() => window.scrollTo(0,0)} style={{"cursor":"pointer"}}>
        <p className='back-to-top'>Back to top</p>
      </div>
      <div className='footer-address'>
        <div>
          <p className='address-title'>About</p>
          <div className='address-content'>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>SuperKart Stories</p>
          </div>
        </div>
        <div>
          <p className='address-title'>Help</p>
          <div className='address-content'>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
            <p>Report Infringement</p>
          </div>
        </div>
        <div>
          <p className='address-title'>Social</p>
          <div className='address-content'>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
        <div>
          <p className='address-title'>Mail Us :</p>
          <div className='address-content'>
            <p>SuperKart Internet Private Limited,</p>
            <p>E-Kart Building, 5th Floor,</p>
            <p>Sri City, Near NH-44 HighWay,</p>
            <p>Tada Village, Sullurupeta,</p>
            <p>Tirupati, 517646,</p>
            <p>Andhra Pradesh, India</p>
          </div>
        </div>
        <div>
          <p className='address-title'>Registered Office Address :</p>
          <div className='address-content'>
          <p>SuperKart Internet Private Limited,</p>
            <p>E-Kart Building, 5th Floor,</p>
            <p>Sri City, Near NH-44 HighWay,</p>
            <p>Tada Village, Sullurupeta,</p>
            <p>Tirupati, 517646,</p>
            <p>Andhra Pradesh, India</p>
            <p>CIN : UGTVIH45820944342g3426</p>
            <p>Telephone : 1800 180 1551</p>
          </div>
        </div>
      </div>
      <div className='hr'></div>
      <div className='footer-name'>
        <p className='footer-name-title'>© 2023 - SuperKart</p>
        <img src={paymentmethods} alt="payment-methods" className='footer-name-image'/>
      </div>
    </div>
  )
}

export default Footer