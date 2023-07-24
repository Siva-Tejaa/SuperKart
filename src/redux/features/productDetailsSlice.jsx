import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SINGLE_PRODUCT } from '../../utils/Api';

const initialState = {
  data:{},
  status:"Idle",
}

export const productDetailsSlice = createSlice({
  name: 'productdetails',
  initialState,
  reducers: {

  },
  extraReducers: (builder) =>{
    builder
    .addCase(getProductDetails.pending, (state, action) =>{
      state.status = "Loading";
     })
    .addCase(getProductDetails.fulfilled, (state, action) =>{
        
        state.data = action.payload;
        state.status = "Idle";

    })
    .addCase(getProductDetails.rejected, (state, action) =>{
      state.status = "Error";
     })
    
  },
})

export const {  } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;

export const getProductDetails = createAsyncThunk("getProductDetails", async (id) => {

    const data = await fetch(SINGLE_PRODUCT + id);
    const result = await data.json();
    return result;
})