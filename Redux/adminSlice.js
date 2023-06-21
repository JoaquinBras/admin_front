import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: null,
  reducers: {
    setAdmin(state, action) {
      return action.payload;
    },
    logoutAdmin(state) {
      return null;
    },
  },
});

export const { setAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
