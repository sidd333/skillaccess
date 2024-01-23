import { configureStore } from "@reduxjs/toolkit";
import collageAuthReducer from "./collage/auth/authSlice.js";
import sideReducer from "./collage/sidebar/sideSlice.js";

const store = configureStore({
  reducer: {
    collageAuth: collageAuthReducer,
    side: sideReducer,
  },
});

export default store;
