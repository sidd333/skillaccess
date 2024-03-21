import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getIp from "./getIp";
import toast from "react-hot-toast";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
// const REACT_APP_API_URL = "http://localhost:4000";

// console.log(process.env);

//initial state



const collageState = {
  status: "",
  error: "",
  Error: [],
  isLoggedIn: false,
  user: null,
  uploadImg: false,
  loggedInUsers: null,
  logoutError: null,
 
};

export const registerCollage = createAsyncThunk(
  "collageAuth/registerCollage",
  async (data, { rejectWithValue }) => {
    try {
      const ip = getIp();
      console.log("registering" , ip);
      // console.log(process.env);
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/register`,
        { ...data, ip },
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
      const ip = await getIp();
      console.log("login" , ip);
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/login`,
        { ...data, ip },
        { withCredentials: true }
      );
      const res = req.data;
      localStorage.setItem("auth-token", res.token);
      console.log(res);
      return res;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "collageAuth/forgotPassword",
  async (data, { rejectWithValue }) => {
    try {
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/password/forgot`,
        data,
        { withCredentials: true }
      );
      const res = req.data;

      return res;
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
      console.log("updating", localStorage.getItem("auth-token"));
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/update`,
        data,

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );

      const res = req.data;
      console.log("should not reject");
      console.log(res);
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
          "auth-token": localStorage.getItem("auth-token"),
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
      console.log("updating", localStorage.getItem("auth-token"));
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/update/avatar`,
        data,

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const res = req.data;
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error);
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
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
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

export const resetPassword = createAsyncThunk(
  "collageAuth/resetPassword",

  async (data, { rejectWithValue }) => {
    try {
      const ip = await getIp();
      console.log("updating", localStorage.getItem("auth-token"));
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/password/reset/${data.token}`,
        { password: data.password, confirmPassword: data.confirmPassword , ip},

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const res = req.data;
      return res;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "collageAuth/updatePassword",

  async (data, { rejectWithValue }) => {
    try {
      const ip = await getIp();

      console.log("updating", localStorage.getItem("auth-token"));
      const req = await axios.put(
        `${REACT_APP_API_URL}/api/college/password/update`,
       { ...data, ip},

        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const res = req.data;
      return res.data;
    } catch (error) {
      console.log("catch", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);





export const googleLoginCollage = createAsyncThunk( 
  "collageAuth/googleLoginCollage",
  async (accessToken, { rejectWithValue }) => {
    try {
      const ip = await getIp();
      console.log("google login");
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/login`,
        {  googleAccessToken: accessToken , ip}
      );
      const res = req.data;
      localStorage.setItem("auth-token", res.token);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const googleRegisterCollage = createAsyncThunk(
  "collageAuth/googleRegisterCollage",
  async (accessToken, { rejectWithValue }) => {
    try {
      const ip = await getIp();
      console.log("google register");
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/register`,
        {  googleAccessToken: accessToken , ip: ip}
      );
      const res = req.data;
      console.log(res,"res.data");
      localStorage.setItem("auth-token", res.token);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const getLoggedInUsers = createAsyncThunk(
  "collageAuth/getLoggedInUsers",
  async (data, { rejectWithValue }) => {
    try {
      const req = await axios.get(
        `${REACT_APP_API_URL}/api/college/loggedin/users`,
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
          withCredentials: true,
        }
      );
      const res = req.data;
      return res.loggedInUsers;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutAUser = createAsyncThunk(
  "collageAuth/logoutAUser",
  async (token, { rejectWithValue }) => {
    try {
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/logout/user/${token}`,
        {},
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
          withCredentials: true,
        }
      );
      const res = req.data;
      return res.loggedInUsers;
    } catch (error) {
      console.log("catch");
      return rejectWithValue(error.response.data);
    }
  }
);


export const removeLoggedOutUser = createAsyncThunk(
  "collageAuth/removeLoggedOutUser",
  async (token, { rejectWithValue }) => {
    try {
      const req = await axios.post(
        `${REACT_APP_API_URL}/api/college/remove/logout/user/${token}`,
        {},
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
          withCredentials: true,
        }
      );
      const res = req.data;
      return res.loggedInUsers;
    } catch (error) {
      console.log("catch");
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
    clearLogoutError: (state, action) => {
      state.logoutError = null;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.fulfilled, (state, action) => {})
      .addCase(registerCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(registerCollage.fulfilled, (state, action) => {
        // state.status = action.payload
        state.isLoggedIn = true;
        state.user = action.payload;
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
        state.status = "done";
        state.isLoggedIn = true;
        state.user = action.payload;

        console.log(state.user);
      })
      .addCase(loginCollage.rejected, (state, action) => {
        state.Error = [action.payload];
      })
      .addCase(updateCollege.pending, (state, action) => {
        // state.status = "loading";
        console.log("pending");
      })
      .addCase(updateCollege.fulfilled, (state, action) => {
        // state.status = action.payload
        state.user = action.payload;
        window.location.reload(true);
        console.log("update college fulfilled");
      })
      .addCase(updateCollege.rejected, (state, action) => {
        // console.log(action.payload);
        // window.alert(action.payload);
        // window.location.reload(true);
        console.log("rejected update profile");
      })
      .addCase(getCollege.pending, (state, action) => {
        // state.status = "loading";
        console.log("pending");
      })
      .addCase(getCollege.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;

        // Add any fetched posts to the array
        console.log("fullfilled get college");
      })
      .addCase(getCollege.rejected, (state, action) => {

        // state.logoutError = action.payload;
        state.isLoggedIn = false;
        // alert("You are logged out! Please login again");

        if (action.payload.message == "Token is blacklisted. Please login again") {
          localStorage.removeItem("auth-token");
          state.loggedInUsers = null;
          state.logoutError = action.payload;
        }
       
        console.log(action.payload.message);

        // window.alert(action.payload);
      })
      .addCase(updateAvatar.pending, (state, action) => {
        // state.status = "loading";
        console.log("pending avatar");
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        // state.status = action.payload

        state.status = "success";
        console.log(action);
        // state.user = action.payload.college;
        state.uploadImg = true;
        state.user.avatar = action.payload.college.avatar;

        // getCollege();
        // Add any fetched posts to the array
        console.log("fullfilled avatar");
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        console.log("rejected avatar" + action.payload);

        // window.alert(action.payload);
      })
      .addCase(logoutCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(logoutCollage.fulfilled, (state, action) => {
        // state.status = action.payload

        state.user = null;
        state.isLoggedIn = false;
        localStorage.clear();
        localStorage.setItem("editable", false);
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
      })
      .addCase(googleLoginCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(googleLoginCollage.fulfilled, (state, action) => {
        state.status = action.payload;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        localStorage.setItem("auth-token", action.payload.token);
        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(googleLoginCollage.rejected, (state, action) => {
        console.log(action.payload);

        window.alert(action.payload);
      })
      .addCase(googleRegisterCollage.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(googleRegisterCollage.fulfilled, (state, action) => {
        state.status = action.payload;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        localStorage.setItem("auth-token", action.payload.token);
        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(googleRegisterCollage.rejected, (state, action) => {
        console.log(action.payload);

        window.alert(action.payload);
      })
      .addCase(getLoggedInUsers.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(getLoggedInUsers.fulfilled, (state, action) => {
        state.status = "success";
       state.loggedInUsers = action.payload;
        // Add any fetched posts to the array
        console.log("fullfilled");
      })
      .addCase(getLoggedInUsers.rejected, (state, action) => {
        console.log(action.payload);

        window.alert(action.payload);
      })
      .addCase(logoutAUser.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(logoutAUser.fulfilled, (state, action) => {
        state.status = "success";
        // state.user = action.payload;
        state.loggedInUsers = action.payload;
        console.log("fullfilled");

      })
      .addCase(logoutAUser.rejected, (state, action) => {
        console.log(action.payload);

        window.alert(action.payload);
      })
      .addCase(removeLoggedOutUser.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(removeLoggedOutUser.fulfilled, (state, action) => {
        state.status = "success";
        // state.user = action.payload;
        state.loggedInUsers = action.payload;
        console.log("fullfilled");

      })
      .addCase(removeLoggedOutUser.rejected, (state, action) => {
        console.log(action.payload);
        // getLoggedInUsers();
        if(state.loggedInUsers.length == 0){
          state.loggedInUsers = null;
          state.logoutError = "No user is logged in";
          window.redirect("/");
        }

        // window.alert(action.payload);
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = "success";
        // state.user = action.payload;
        // state.loggedInUsers = action.payload;
        console.log("fullfilled");

      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload;
        toast.error(action.payload);
        console.log(action.payload);
        // getLoggedInUsers();
        // window.alert(action.payload);
      })
    
     
    

  },
});

//
export const { setUploadImg ,clearLogoutError} = collageAuthSlice.actions;
export default collageAuthSlice.reducer;
