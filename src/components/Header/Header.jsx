import React from 'react';
import "./Header.css"
import Search from './Search';

import SuperKart from "../../assets/SuperKartLogo.png"

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to="/"><img src={SuperKart} alt="SuperKart Logo" className='superkart-logo'/></Link>
        <div className='header-search'>
          <input type="search" placeholder='Search for products and more...' className='header-search-input'/>
          <button className='header-search-btn'>
            <span class="material-icons-outlined">search</span>
          </button>
        </div>
        <div className='header-btns'>
          <button className='header-login-btn'>
            <span class="material-icons-outlined">person</span>
            <span>Login</span>
          </button>
          <button className='header-cart-btn'>
            <span class="material-icons-outlined">shopping_cart</span>
            <span>Cart (0)</span>
          </button>
        </div>
      </div>
      <div>
        <Search/>
      </div>
    </>
  )
}

export default Header;