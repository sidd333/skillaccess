import { configureStore } from "@reduxjs/toolkit";
import collageAuthReducer from "./collage/auth/authSlice.js";

const store = configureStore({
  reducer: {
    collageAuth: collageAuthReducer,
  },
});

export default store;
