import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    user: null,
    value:0
  },
  reducers: {
    setAuthState: (state, action) => {
      state.user = action.payload.user;
    },
    logOut:(state) =>{
      state.user = null;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { setAuthState, increment, decrement, logOut } = countSlice.actions;
export default countSlice.reducer;