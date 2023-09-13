import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import productDetailsSlice from "./features/productDetailsSlice";
import categoriesSlice from "./features/categoriesSlice";
import cartSlice from "./features/cartSlice";
import searchSlice from "./features/searchSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    productdetails: productDetailsSlice,
    categoryProducts: categoriesSlice,
    cart: cartSlice,
    searchProducts: searchSlice,
    user: userSlice,
  },
});
