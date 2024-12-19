//npm i @reduxjs/toolkit react-redux
//npm i axios

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initValue = {
  message: "",
  user: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// Async thunk to add user
export const addUser = createAsyncThunk(
  "usersInfo/addUser",
  async (userDatas, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/inserUser",
        userDatas
      );
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);

export const GetUser = createAsyncThunk(
  "usersInfo/GetUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/login",
        {
          password: userData.password,
          email: userData.email,
        }
      );
      return response.data.user; // Return response data of user only
    } catch (error) {
      //return rejectWithValue(error.response.data); // Handle error properly
      alert("invalid crednashals" + error);
    }
  }
);
export const sendVerification = createAsyncThunk(
  "usersInfo/sendVerification",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/sendVerification",
        {
          email: userData.email,
        }
      );

      return response.data.user.message; // Return response data of user only
    } catch (error) {
      alert("invalid crednashals" + error);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "usersInfo/verifyOtp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/verifyOtp",
        userData
      );
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "OTP verification failed"
      );
    }
  }
);

export const logout = createAsyncThunk("usersInfo/logout", async (userData) => {
  try {
    const response = await axios.post(
      "https://rhaal-server.onrender.com/logout"
    );
    return {};
  } catch (error) {
    console.log(error);
  }
});

export const setNewPass = createAsyncThunk(
  "usersInfo/setNewPass",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "https://rhaal-server.onrender.com/setNewPass",
        {
          password: userData.password,
          email: userData.email,
        }
      );
      return response.data.user; // Return response data of user only
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);

export const deleteUser = createAsyncThunk(
  "usersInfo/deleteUser",
  async (userID) => {
    try {
      const response = await axios.delete(
        `https://rhaal-server.onrender.com/deleteUser/${userID}`
      );
      return response.data.message; // Return response data of user only
    } catch (error) {
      return error.response.data; // Handle error properly
    }
  }
);
export const updateUser = createAsyncThunk(
  "usersInfo/updateUser",
  async (userDatas, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "https://rhaal-server.onrender.com/updateUser",
        userDatas
      );
      return response.data.user; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);

// Create slice
const UserSlice = createSlice({
  name: "usersInfo",
  initialState: initValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(GetUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "login";
        state.user = action.payload; // capture the user
      })
      .addCase(GetUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(sendVerification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "send";
        state.user = action.payload; // capture the user
      })
      .addCase(sendVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })

      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "otp";
        state.user = action.payload; // capture the user
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(setNewPass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setNewPass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.user = action.payload; // capture the user
      })
      .addCase(setNewPass.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = {}; // capture the user
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = {}; // capture the user
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "updated..";
        state.user = action.payload; // capture the user
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      });
  },
});

// Export the reducer
export default UserSlice.reducer;
