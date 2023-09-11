import React, { useState } from "react";
import "./Header.css";
import Search from "./Search";

import SuperKart from "../../assets/SuperKartLogo.png";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.cart);

  const [searchText, setSearchText] = useState("");

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src={SuperKart}
            alt="SuperKart Logo"
            className="superkart-logo"
          />
        </Link>
        <div className="header-search">
          <input
            type="search"
            placeholder="Search for products and more..."
            className="header-search-input"
            onChange={changeHandler}
          />
          <Link to={`/search/${searchText}`}>
            <button className="header-search-btn">
              <span class="material-icons-outlined">search</span>
            </button>
          </Link>
        </div>
        <div className="header-btns">
        <Link to="/signin">
          <button className="header-login-btn">
            <span class="material-icons-outlined">person</span>
            <span>Login</span>
          </button></Link>
          <Link to="/cart">
            <button className="header-cart-btn">
              <span class="material-icons-outlined">shopping_cart</span>
              <span>Cart ({data.length})</span>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          changeHandler={changeHandler}
        />
      </div>
    </>
  );
};

export default Header;
