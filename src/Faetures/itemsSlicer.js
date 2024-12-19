import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initValue = {
  message: "",
  Item: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addItems = createAsyncThunk(
  "items/addItems",
  async (itemData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rhaal.onrender.com/addItems",
        itemData
      );
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);
export const GetItem = createAsyncThunk("items/GetItem", async () => {
  try {
    const response = await axios.get("https://rhaal.onrender.com/GetItem");
    return response.data.Item; // Return response data on success
  } catch (error) {
    return error.response.data; // Handle error properly
  }
});
export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async (ItemID) => {
    try {
      const response = await axios.delete(
        `https://rhaal.onrender.com/deleteItem/${ItemID}`
      );
      return response.data.message; // Return response data of user only
    } catch (error) {
      return error.response.data; // Handle error properly
    }
  }
);
// Create slice
const ItemSlice = createSlice({
  name: "items",
  initialState: initValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(GetItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Item = action.payload;
      })
      .addCase(GetItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "deleted...";
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload; // Capture error message
      });
  },
});

// Export the reducer
export default ItemSlice.reducer;
