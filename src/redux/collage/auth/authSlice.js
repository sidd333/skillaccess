import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

console.log(process.env);

//initial state

const collageState = {
  status: "",
  error: "",
  isLoggedIn: false,
  user: null,
  uploadImg :false,
};

const authToken = localStorage.getItem("auth-token");

export const registerCollage = createAsyncThunk(
  "collageAuth/registerCollage",
  async (data, { rejectWithValue }) => {
    try {
      console.log("registering");
      console.log(process.env);
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/register`,
        data,
        { withCredentials: true }
      );
      const res = req.data;
      localStorage.setItem("auth-token", res.token);
      return res.data;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const loginCollage = createAsyncThunk(
  "collageAuth/loginCollage",
  async (data, { rejectWithValue }) => {
    try {
      console.log("login");
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/login`,
        data,
        { withCredentials: true }
      );
      const res = req.data;
      localStorage.setItem("auth-token", res.token);
      return res.data;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateCollege = createAsyncThunk(
  "collageAuth/updateCollege",
  async (data, { rejectWithValue }) => {
    try {
      console.log("updating", authToken);
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/update`,
        data,

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;
      return res.data.college;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCollege = createAsyncThunk(
  "collageAuth/getCollege",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/college/me`, {
        withCredentials: true,
        headers: {
          "auth-token": localStorage.getItem('auth-token')
        },
      });
      return response.data.college;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "collageAuth/updateAvatar",
  async (data, { rejectWithValue }) => {
    try {
      console.log("updating", authToken);
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/update/avatar`,
        data,

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;
      return res.data.college;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutCollage = createAsyncThunk(
  "collageAuth/logoutCollage",
  async (_, { rejectWithValue }) => {
    try {
      console.log("logout");
      const req = await axios.get(`${REACT_APP_API_URL}/api/college/logout`, {
        withCredentials: true,
      });
      const res = req.data;
      localStorage.removeItem("auth-token");
      return res.data;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data);
    }
  }
);


export const updatePassword = createAsyncThunk(
  "collageAuth/updatePassword",

  async (data, { rejectWithValue }) => {
    try {
      console.log("updating", authToken);
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/password/update`,
        data,

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const res = req.data;
      return res.data;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


const collageAuthSlice = createSlice({
  name: "collageAuth",
  initialState: collageState,
  reducers: {
    setUploadImg: (state, action) => {
      state.uploadImg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(registerCollage.fulfilled, (state, action) => {
        // state.status = action.payload
        state.isLoggedIn = true;
        state.user = action.payload
        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(registerCollage.rejected, (state, action) => {
        console.log(action.payload);
     
// <<<<<<< AnkitaMalik22-ankita-dev
//   alert(action.payload);
// =======
        window.alert(action.payload || "invalid credentials");

      })
      .addCase(loginCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(loginCollage.fulfilled, (state, action) => {
        // state.status = action.payload
        state.isLoggedIn = true;
        state.user = action.payload

        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(loginCollage.rejected, (state, action) => {
        console.log(action.payload);
     alert(action.payload);
      })
      .addCase(updateCollege.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(updateCollege.fulfilled, (state, action) => {
        // state.status = action.payload
        state.user = action.payload;

        console.log("fullfilled");
      })
      .addCase(updateCollege.rejected, (state, action) => {
        // console.log(action.payload);
        // window.alert(action.payload);
      })
      .addCase(getCollege.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(getCollege.fulfilled, (state, action) => {
        // state.status = action.payload
        state.isLoggedIn = true;
        state.user = action.payload;
        // window.location.reload(true);
        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(getCollege.rejected, (state, action) => {
        console.log(action.payload);
        // window.location.reload(true);

        // window.alert(action.payload);
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        // state.status = action.payload

        state.status="success"
        state.user = action.payload;
        state.uploadImg = true;
        // state.user = action.payload;

        // getCollege();
        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        console.log(action.payload);

        // window.alert(action.payload);
      })
      .addCase(logoutCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(logoutCollage.fulfilled, (state, action) => {
        // state.status = action.payload
        state.isLoggedIn = false;

        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(logoutCollage.rejected, (state, action) => {
        console.log(action.payload);

        // window.alert(action.payload);
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.status = action.payload;
        alert("Password Updated");
        // state.status = action.payload
        // state.isLoggedIn = false;
        // state.user = action.payload.user;
        // localStorage.removeItem("auth-token");

        // getCollege();
        // localStorage.setItem("auth-token", action.payload.token);
      })
      .addCase(updatePassword.rejected, (state, action) => {
      alert(action.payload.message);
      });
  },
});

//
export const { setUploadImg } = collageAuthSlice.actions;
export default collageAuthSlice.reducer;
