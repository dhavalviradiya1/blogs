import { createSlice } from "@reduxjs/toolkit";

export const blogsListSlice = createSlice({
  name: "blogsList",
  initialState: {
    blogsData: [],
  },
  reducers: {
    setBlogsData: (state, action) => {
      console.log("action = ", action);
      state.blogsData = action.payload;
    },
  },
});

export const { setBlogsData } = blogsListSlice.actions;

export const blogsList = (state: any) => state?.blogsList?.blogsData;

export default blogsListSlice.reducer;
