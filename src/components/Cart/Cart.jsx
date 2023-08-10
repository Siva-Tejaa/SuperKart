import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";

import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div>
      <p>Cart</p>
      {JSON.stringify(data)}
    </div>
  );
};

export default Cart;
