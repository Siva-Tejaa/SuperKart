import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


export const userSlice = createSlice({
  name: "currentUserDetails",
  initialState,
  reducers: {
    currentUser: (state, action) => {
        state.length = 0;
        state.push(action.payload);

    },
    clearCurrentUser: (state) => {
      state.length = 0;
    },
    // storageUser: (state, action) => {
    //     state.length = 0;
    //     state.push(action.payload);

    // },

  },
});

export const { currentUser, clearCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;
