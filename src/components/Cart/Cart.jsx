import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";

import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-left">
        <div className="cart-title">
          <div className="cart-title-main">
            Shopping Cart
          </div>
          <div className="clear-cart">
            Clear Cart
          </div>
        </div>
        {
          data.map((cartproduct, index) => (
            <div className="cart-products" key={cartproduct?.id}>
              <div className="cart-product-image">
                <img src={cartproduct?.thumbnail}/>
              </div>

              <div className="cart-product-details">

              </div>
            </div>
          ))
        }        
      </div>
      <div className="cart-right">
        <p>Order Summary</p>
      {JSON.stringify(data)}

      </div>

    </div>
  );
};

export default Cart;
