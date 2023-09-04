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
    incr1: (state, action) => {
      const productExist = state.find((prod) => prod.id === action.payload.id);

      const maxQty = action.payload?.stock > 0 && `${action.payload?.stock}`;

      // console.log(maxQty, productExist.quantity);

      if (productExist.quantity == maxQty) {
        // errorSound.play();
        // toast.error("Product Stock Not Available!");
        return;
      }

      if (productExist) {
        productExist.quantity = productExist.quantity + 1;
      }
    },
    decr1: (state, action) => {
      const productExist = state.find((prod) => prod.id === action.payload.id);
      const productExistIndex = state.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (productExist.quantity == 1) {
        // productExist.quantity = productExist.quantity - 1;
        // console.log(action.payload);
        // console.log(state.filter((prod) => prod.id != action.payload.id));

        state.splice(productExistIndex, 1);
      } else {
        productExist.quantity = productExist.quantity - 1;
      }
    },
    delprod: (state, action) => {
      const productExistIndex = state.findIndex(
        (prod) => prod.id === action.payload.id
      );

      state.splice(productExistIndex, 1);
    },
    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const { cart, incr1, decr1, delprod, clearCart } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
