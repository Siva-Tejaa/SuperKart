import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = ({ searchText, changeHandler }) => {
  return (
    <div>
      <div className="head-search">
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
    </div>
  );
};

export default Search;
