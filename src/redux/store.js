import { configureStore } from "@reduxjs/toolkit";
import collageAuthReducer from "../redux/features/auth/authSlice.js";

const store = configureStore({
  reducer: {
    collageAuth: collageAuthReducer,
  },
});

export default store;
