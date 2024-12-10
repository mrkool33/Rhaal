import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initValue = {
    message: "",
    location:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
};


export const addLocation = createAsyncThunk(
    "locations/addLocation",
    async (locationData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://127.0.0.1:8080/inserLocation", locationData);
            return response.data;  // Return response data on success
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
          "http://127.0.0.1:8080/GetLocation"
        );
        return response.data.location; // Return response data on success
      } catch (error) {
        return (error.response.data); // Handle error properly
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
              });
        }
    });
    
    // Export the reducer
    export default LocationSlice.reducer;