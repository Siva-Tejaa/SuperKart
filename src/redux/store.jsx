import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import productDetailsSlice from "./features/productDetailsSlice";
import categoriesSlice from "./features/categoriesSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    productdetails: productDetailsSlice,
    categoryProducts: categoriesSlice,
    cart: cartSlice,
  },
});
