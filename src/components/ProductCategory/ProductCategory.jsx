import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import { getCategoryProducts } from '../../redux/features/categoriesSlice';
import Error from '../Body/Error/Error';

const ProductCategory = () => {

    const{ categoryText } = useParams();

    
    const dispatch = useDispatch();

    const {data, status} = useSelector((state) => state.categoryProducts);

    useEffect(() => {
        dispatch(getCategoryProducts(categoryText));
    }, [categoryText])

    if(status ==="Error"){
        return <Error/>
      }

  return (
    <div className='product-category'>ProductCategory {JSON.stringify(data)}</div>
  )
}

export default ProductCategory