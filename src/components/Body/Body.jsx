import React from 'react';
import "./Body.css"
import Products from './Products/Products';
import Pagination from './Pagination/Pagination';

const Body = () => {

  return (
    <>
      <Pagination/>

      <div className='body'>
      <Products/>
    </div>

    </>
  )
}

export default Body