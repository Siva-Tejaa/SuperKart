import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './features/productsSlice';
import productDetailsSlice from './features/productDetailsSlice';
import categoriesSlice from './features/categoriesSlice';

export const store = configureStore({
  reducer: {
    products:productsSlice,
    productdetails:productDetailsSlice,
    categoryProducts:categoriesSlice,
  },
})