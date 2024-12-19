import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initValue = {
  message: "",
  location: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addLocation = createAsyncThunk(
  "locations/addLocation",
  async (locationData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal.onrender.com/inserLocation",
        locationData
      );
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);
export const GetLocation = createAsyncThunk(
  "locations/GetLocation",
  async () => {
    try {
      const response = await axios.get(
        "https://rhaal.onrender.com/GetLocation"
      );
      return response.data.location; // Return response data on success
    } catch (error) {
      return error.response.data; // Handle error properly
    }
  }
);
export const deleteLocation = createAsyncThunk(
  "locations/deleteLocation",
  async (locationID) => {
    try {
      const response = await axios.delete(
        `https://rhaal.onrender.com/deleteLocation/${locationID}`
      );
      return response.data.message; // Return response data of user only
    } catch (error) {
      return error.response.data; // Handle error properly
    }
  }
);
export const updateLocation = createAsyncThunk(
  "locations/updateLocation",
  async (locationDatas, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "https://rhaal.onrender.com/updateLocation",
        locationDatas
      );
      return response.data.location; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);
// Create slice
const LocationSlice = createSlice({
  name: "locations",
  initialState: initValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(GetLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.location = action.payload;
      })
      .addCase(GetLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(deleteLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(updateLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "updated..";
        state.location = action.payload; // capture the user
      })
      .addCase(updateLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      });
  },
});

// Export the reducer
export default LocationSlice.reducer;
