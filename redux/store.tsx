import { configureStore } from "@reduxjs/toolkit";
import blogsListReducer from "./blogsListSlice";

export default configureStore({
  reducer: {
    blogsList: blogsListReducer,
  },
});
