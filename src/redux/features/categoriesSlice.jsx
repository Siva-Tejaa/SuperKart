import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_BY_CATEGORY} from '../../utils/Api';

const initialState = {
  data:[],
  status:"Idle",
}

export const categoriesSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) =>{
    builder
    .addCase(getCategoryProducts.pending, (state, action) =>{
      state.status = "Loading";
     })
    .addCase(getCategoryProducts.fulfilled, (state, action) =>{
        
        state.data = action.payload;
        state.status = "Idle";

    })
    .addCase(getCategoryProducts.rejected, (state, action) =>{
      state.status = "Error";
     })
    
  },
})

export const {  } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const getCategoryProducts = createAsyncThunk("getCategoryProducts", async (id) => {
    const data = await fetch(PRODUCT_BY_CATEGORY + id);
    const result = await data.json();
    return result;
})