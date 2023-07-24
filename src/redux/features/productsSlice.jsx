import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES_LIST } from '../../utils/Api';

const initialState = {
  data:[],
  status:"Idle",
  categories:[],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) =>{
    builder
    .addCase(getAllProducts.pending, (state, action) =>{
      state.status = "Loading";
     })
    .addCase(getAllProducts.fulfilled, (state, action) =>{
        
        state.data = action.payload;
        state.status = "Idle";

    })
    .addCase(getAllProducts.rejected, (state, action) =>{
      state.status = "Error";
     })
     .addCase(getProductCategories.fulfilled, (state, action) =>{
      state.categories = action.payload;
     })
    
  },
})

export const {  } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const data = await fetch(ALL_PRODUCTS);
    const result = await data.json();
    return result;
})

export const getProductCategories = createAsyncThunk("getProductCategories", async () => {
  const data = await fetch(PRODUCT_CATEGORIES_LIST);
  const result = await data.json();
  return result;
})