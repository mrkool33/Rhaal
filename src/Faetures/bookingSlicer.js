import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initValue = {
  message: "",
  booking: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addBookings = createAsyncThunk(
  "bookings/addBookings",
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/addBookings",
        bookingData
      );
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);
export const GetBooking = createAsyncThunk("bookings/GetBooking", async () => {
  try {
    const response = await axios.get(
      "https://rhaal-server.onrender.com/GetBooking"
    );
    return response.data.Booking; // Return response data on success
  } catch (error) {
    return error.response.data; // Handle error properly
  }
});
export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async (BookingID) => {
    try {
      const response = await axios.delete(
        `https://rhaal-server.onrender.com/deleteBooking/${BookingID}`
      );
      return response.data.message; // Return response data of user only
    } catch (error) {
      return error.response.data; // Handle error properly
    }
  }
);
// Create slice
const BookingSlice = createSlice({
  name: "bookings",
  initialState: initValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(GetBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.booking = action.payload;
      })
      .addCase(GetBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "deleted...";
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      });
  },
});

// Export the reducer
export default BookingSlice.reducer;
