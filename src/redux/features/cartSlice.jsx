import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const categoriesSlice = createSlice({
  name: "categoryProducts",
  initialState,
  reducers: {
    cart: (state, action) => {
      const productExist = state.find((prod) => prod.id === action.payload.id);

      if (productExist) {
        productExist.quantity = productExist.quantity + action.payload.quantity;
      } else {
        state.unshift(action.payload);
      }
    },
  },
});

export const { cart } = categoriesSlice.actions;

export default categoriesSlice.reducer;
