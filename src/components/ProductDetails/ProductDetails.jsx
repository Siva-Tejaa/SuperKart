import React, { useState, useEffect } from "react";
import "./ProductDetails.css";

import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/features/productDetailsSlice";

import FreeDelivery from "../../assets/FreeDelivery.png";
import PayOnDelivery from "../../assets/PayOnDelivery.png";
import Replacement from "../../assets/Replacement.png";
import SecureTransaction from "../../assets/SecureTransaction.png";
import TopBrand from "../../assets/TopBrand.png";
import SuperCoins from "../../assets/SuperCoins.png";

import toast, { Toaster } from "react-hot-toast";

import ErrorSoundEffect from "../../assets/Sounds/ErrorSoundEffect.mp3";

const ProductDetails = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [prodImage, setProdImage] = useState();
  const [quantity, setQuantity] = useState(1);

  const [location, setLocation] = useState({
    name: sessionStorage.getItem("city"),
    state: sessionStorage.getItem("state"),
  });

  const { productid } = useParams();

  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.productdetails);

  const errorSound = new Audio(ErrorSoundEffect);

  useEffect(() => {
    dispatch(getProductDetails(productid));
  }, [productid]);

  if (status === "Error") {
    return <Error />;
  }

  {
    console.log(data);
  }

  const successCallback = (position) => {
    const fetchLocation = async () => {
      const data = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&limit=1&appid=${apiKey}`
      );
      const result = await data.json();
      sessionStorage.setItem("city", result[0]?.name);
      sessionStorage.setItem("state", result[0]?.state);
      setLocation(result[0]);
    };

    fetchLocation();
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.vibrate(500);
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      toast.error("Quantity should not be less than 1");
      errorSound.play();
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    let maxQty = data?.stock > 0 && `${data?.stock}`;

    if (quantity == maxQty) {
      toast.error("Product Stock Not Available!");
      errorSound.play();
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="product-details">
      <div className="prod-details">
        <div className="product-details-images">
          <img
            src={prodImage ? prodImage : data?.images && data.images[0]}
            className="product-details-img"
          />
          <div className="product-details-sm-img">
            <img
              src={
                data?.images &&
                (data.images[0]
                  ? data.images[0]
                  : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")
              }
              className="prod-sm-img"
              alt="Not Available"
              onClick={() => setProdImage(data?.images && data.images[0])}
            />
            <img
              src={
                data?.images &&
                (data.images[1]
                  ? data.images[1]
                  : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")
              }
              className="prod-sm-img"
              alt="Not Available"
              onClick={() => setProdImage(data?.images && data.images[1])}
            />
            <img
              src={
                data?.images &&
                (data.images[2]
                  ? data.images[2]
                  : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")
              }
              className="prod-sm-img"
              alt="Not Available"
              onClick={() => setProdImage(data?.images && data.images[2])}
            />
            <img
              src={
                data?.images &&
                (data.images[3]
                  ? data.images[3]
                  : "https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/No-image-found.jpg")
              }
              className="prod-sm-img"
              onClick={() => setProdImage(data?.images && data.images[3])}
            />
          </div>
        </div>
        <div className="product-details-content">
          <h2>{data?.title}</h2>
          <div className="rating-stock">
            <div className="product-rating">
              {data?.rating?.toFixed(1)}
              <span class="material-icons-outlined star">star</span>
            </div>
            <div className="stock">
              {data?.stock > 0 ? `In Stock (${data?.stock})` : "Out of Stock"}
            </div>
          </div>
          <div className="product-price">
            <h2>
              ₹
              {Math.round(
                data?.price * 50 -
                  (Math.ceil(data?.discountPercentage) / 100) *
                    (data?.price * 50)
              ).toLocaleString()}
            </h2>
            <del className="prod-det-price">
              ₹{(data?.price * 50).toLocaleString()}
            </del>
            <div className="product-det-off">
              {Math.ceil(data?.discountPercentage)}%off
            </div>
          </div>
          <div>
            <p>{data?.description}</p>
          </div>
          <div>
            <p className="prod-det-category">
              Category :{" "}
              <Link to={`/category/${data?.category}`} title={data?.category}>
                {data?.category?.charAt(0).toUpperCase() +
                  data?.category?.slice(1)}
              </Link>
            </p>
          </div>
          <div className="border"></div>
          <div className="delivery-parent">
            <div className="delivery">
              <img
                src={FreeDelivery}
                alt="FreeDelivery"
                className="delivery-img"
              />
              <p className="delivery-text">Free Delivery</p>
            </div>
            <div className="delivery">
              <img
                src={PayOnDelivery}
                alt="PayOnDelivery"
                className="delivery-img"
              />
              <p className="delivery-text">Pay On Delivery</p>
            </div>
            <div className="delivery">
              <img
                src={Replacement}
                alt="Replacement"
                className="delivery-img"
              />
              <p className="delivery-text">Replacement</p>
            </div>
            <div className="delivery">
              <img
                src={SecureTransaction}
                alt="Secure Transactiom"
                className="delivery-img"
              />
              <p className="delivery-text">Secure Transaction</p>
            </div>
            <div className="delivery">
              <img src={TopBrand} alt="Top Brand" className="delivery-img" />
              <p className="delivery-text">Top Brand</p>
            </div>
          </div>
          <div className="border"></div>
          <img src={SuperCoins} alt="SuperCoins" className="supercoin" />
          <div className="border"></div>
          <div className="delivery-details">
            <p>Delivery by 31 Jul, Monday</p> | <p className="del-free">Free</p>{" "}
            <del className="del-cost">₹40</del>
          </div>
          <div>
            <p className="del-location" onClick={() => getLocation()}>
              <span class="material-symbols-outlined">location_on</span>
              {location?.name
                ? `${location?.name}, ${location?.state}`
                : "Select delivery location"}
            </p>
          </div>
          <div className="checkout">
            <div className="checkout-qty-parent">
              <button
                className="checkout-btn"
                onClick={() => decreaseQuantity()}
              >
                -
              </button>
              <input
                className="checkout-quantity"
                type="number"
                min="1"
                max={data?.stock > 0 && `${data?.stock}`}
                disabled
                value={quantity}
              />
              <button
                className="checkout-btn"
                onClick={() => increaseQuantity()}
              >
                +
              </button>
              <Toaster position="top-right" />
            </div>
            <div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="wishlist-fav">
              <button className="favo-btn">
                <span class="material-icons-outlined">favorite</span>
              </button>
              {/* <p className="wishlist" title="Add to WishList">
                <span class="material-icons-outlined">favorite</span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
