import React from 'react';
import "./Search.css";

const Search = () => {
  return (
    <div >
        <div className='head-search'>
          <input type="search" placeholder='Search for products and more...' className='header-search-input'/>
          <button className='header-search-btn'>
            <span class="material-icons-outlined">search</span>
          </button>
        </div>
    </div>
  )
}

export default Search