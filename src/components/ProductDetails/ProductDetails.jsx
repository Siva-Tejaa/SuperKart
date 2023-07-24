import React,{useState,useEffect} from 'react';
import "./ProductDetails.css";

import {Link, useParams} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/features/productDetailsSlice';

import FreeDelivery from "../../assets/FreeDelivery.png";
import PayOnDelivery from "../../assets/PayOnDelivery.png";
import Replacement from "../../assets/Replacement.png";
import SecureTransaction from "../../assets/SecureTransaction.png";
import TopBrand from "../../assets/TopBrand.png";
import SuperCoins from "../../assets/SuperCoins.png";

const ProductDetails = () => {

  const[prodImage, setProdImage] = useState();

    const{productid} = useParams();

    const dispatch = useDispatch();

    const {data, status} = useSelector((state) => state.productdetails);


    useEffect(() => {
        dispatch(getProductDetails(productid));
    }, [productid])

    if(status ==="Error"){
        return <Error/>
      }

      
      {console.log(data)}



  return (
    <div className='product-details'>

          <div className='prod-details'>
          <div className='product-details-images'>
            <img src={prodImage ? prodImage : data?.images && data.images[0]} className='product-details-img'/>
            <div className='product-details-sm-img'>
            
              <img src={data?.images && (data.images[0] ? data.images[0] : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")} className='prod-sm-img' alt="Not Available" onClick={() => setProdImage(data?.images && data.images[0])}/>
              <img src={data?.images && (data.images[1] ? data.images[1] : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")} className='prod-sm-img' alt="Not Available" onClick={() => setProdImage(data?.images && data.images[1])}/>
              <img src={data?.images && (data.images[2] ? data.images[2] : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")} className='prod-sm-img' alt="Not Available" onClick={() => setProdImage(data?.images && data.images[2])}/>
              <img src={data?.images && (data.images[3] ? data.images[3] : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")} className='prod-sm-img' onClick={() => setProdImage(data?.images && data.images[3])}/>

            </div>
          </div>
          <div className='product-details-content'>
            <h2>{data?.title}</h2>
            <div className='rating-stock'>
                  <div className='product-rating'>
                        {data?.rating?.toFixed(1)}
                        <span class="material-icons-outlined star">star</span>
                  </div>
                  <div className='stock'>{data?.stock>0 ? `In Stock (${data?.stock})` : "Out of Stock"}</div>
              </div>
              <div className='product-price'>
                  <h2>₹{(Math.round((data?.price *50) - (Math.ceil(data?.discountPercentage)/100 * (data?.price *50)))).toLocaleString()}</h2>
                  <del className='prod-det-price'>₹{(data?.price * 50).toLocaleString()}</del>
                  <div className='product-det-off'>{Math.ceil(data?.discountPercentage)}%off</div>
              </div>
              <div>
                <p>{data?.description}</p>
              </div>
              <div>
                <p className='prod-det-category'>Category : <Link to={`/category/${data?.category}`} title={data?.category}>{data?.category?.charAt(0).toUpperCase() + data?.category?.slice(1)}</Link></p>
              </div>
              <div className='border'></div>
              <div className='delivery-parent'>
                <div className='delivery'> 
                  <img src={FreeDelivery} alt="FreeDelivery" className='delivery-img'/>
                  <p className='delivery-text'>Free Delivery</p>
                </div>
                <div className='delivery'> 
                  <img src={PayOnDelivery} alt="PayOnDelivery" className='delivery-img'/>
                  <p className='delivery-text'>Pay On Delivery</p>
                </div>
                <div className='delivery'> 
                  <img src={Replacement} alt="Replacement" className='delivery-img'/>
                  <p className='delivery-text'>Replacement</p>
                </div><div className='delivery'> 
                  <img src={SecureTransaction} alt="Secure Transactiom" className='delivery-img'/>
                  <p className='delivery-text'>Secure Transaction</p>
                </div><div className='delivery'> 
                  <img src={TopBrand} alt="Top Brand" className='delivery-img'/>
                  <p className='delivery-text'>Top Brand</p>
                </div>
              </div>
              <div className='border'></div>
              <img src={SuperCoins} alt="SuperCoins" className='supercoin'/>
              <div className='border'></div>

          </div>
        </div>
      
    </div>
  )
}

export default ProductDetails