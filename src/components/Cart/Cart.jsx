import React from "react";
import "./Cart.css";

import { useSelector, useDispatch } from "react-redux";
import {
  incr1,
  decr1,
  delprod,
  clearCart,
} from "../../redux/features/cartSlice";

import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const data = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clearItems = () => {
    dispatch(clearCart());
  };

  const shareHandler = (data) => {
    const sharedData = {
      name: data?.title,
      price: data?.price,
      image: data?.images[0],
      description: data?.description,
    };
    if (navigator.canShare && navigator.canShare(sharedData)) {
      navigator.canShare(sharedData);
    } else {
      console.log("Sharing Not Supported");
    }
  };

  return (
    <div className="cart">
      <div className="cart-left">
        <div className="cart-title">
          <div className="cart-title-main">Shopping Cart</div>
          <div className="clear-cart" onClick={() => clearItems()}>
            Clear Cart
          </div>
        </div>

        {data?.length > 0 ? (
          <>
            {data.map((cartproduct, index) => (
              <div className="cart-products" key={cartproduct?.id}>
                <div className="cart-product-image">
                  <img
                    src={cartproduct?.images[0]}
                    className="cart-prod-image"
                  />
                </div>

                <div className="cart-product-details">
                  <div className="cart-product-title">{cartproduct?.title}</div>
                  <div className="cart-price-section">
                    <h4>₹{cartproduct?.price}</h4>
                    <del className="prod-price">
                      ₹{cartproduct?.originalprice}
                    </del>
                    <div className="product-off">
                      {Math.ceil(cartproduct?.discountPercentage)}%off
                    </div>
                  </div>
                  <div>
                    Category :{" "}
                    {cartproduct?.category?.charAt(0).toUpperCase() +
                      cartproduct?.category?.slice(1)}
                  </div>
                  <div className="checkout-qty-parent">
                    <button
                      className="checkout-btn"
                      onClick={() => dispatch(decr1(cartproduct))}
                    >
                      -
                    </button>
                    <input
                      className="checkout-quantity"
                      type="number"
                      // min="1"
                      // max={data?.stock > 0 && `${data?.stock}`}
                      disabled
                      value={cartproduct?.quantity}
                    />
                    <button
                      className="checkout-btn"
                      onClick={() => dispatch(incr1(cartproduct))}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-delete-share">
                    <button
                      className="cart-delete"
                      onClick={() => dispatch(delprod(cartproduct))}
                    >
                      Delete
                    </button>
                    <button
                      className="cart-share"
                      onClick={() => shareHandler(cartproduct)}
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <img src="https://www.ipack.com/media/icons/empty-cart-ipack.png" />
          </>
        )}
      </div>
      <div className="cart-right">
        <p className="cart-order-summary">Order Summary</p>
        {/* {JSON.stringify(data)} */}
        <div className="cart-order">
          <p>
            Price ({data?.length} {data?.length > 1 ? "items" : "item"})
          </p>
          <p>₹ 555</p>
        </div>
        <div className="cart-order">
          <p>Delivery</p>
          <p>FREE</p>
        </div>
        <hr />

        <div className="cart-order">
          <p>Amount Payable</p>
          <p>₹ 999</p>
        </div>
        <button className="cart-checkout-button">CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;
