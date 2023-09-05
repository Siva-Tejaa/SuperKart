import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SEARCH_PRODUCT } from "../../utils/Api";

const initialState = {
  data: {},
  status: "Idle",
};

export const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getSearchProducts.pending, (state, action) => {
        state.status = "Loading";
      })

      .addCase(getSearchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "Idle";
      })

      .addCase(getSearchProducts.rejected, (state, action) => {
        state.status = "Error";
      });
  },
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;

export const getSearchProducts = createAsyncThunk(
  "getSearchProducts",
  async (searchtext) => {
    const data = await fetch(SEARCH_PRODUCT + searchtext);
    const result = await data.json();
    return result;
  }
);
