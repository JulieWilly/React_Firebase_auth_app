import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    user: null,
  },
  reducers: {
    setAuthState: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const {setAuthState} = countSlice.actions;
export default countSlice.reducer;