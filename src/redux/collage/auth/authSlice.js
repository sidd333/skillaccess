import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initial state

const collageState = {
  status: "",
  error: "",
  isLoggedIn: false,
};

export const registerCollage = createAsyncThunk(
  "collageAuth/registerCollage",
  async (data, { rejectWithValue }) => {
    try {
      const req = await axios.post(
        `${process.env.REACT_APP_API_URL}api/college/register`,
        data,
        { withCredentials: true }
      );
      const res = req.data;
      return res.data;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data.message);
    }
  }
);

const collageAuthSlice = createSlice({
  name: "collageAuth",
  initialState: collageState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(registerCollage.fulfilled, (state, action) => {
        // state.status = action.payload
        state.isLoggedIn = true;

        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(registerCollage.rejected, (state, action) => {
        // console.log(action.payload);

        window.alert(action.payload);
      });
  },
});

//
export default collageAuthSlice.reducer;
