import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListCines = createAsyncThunk("fetchListCines", async () => {
  try {
    const result = await axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OCIsIkhldEhhblN0cmluZyI6IjIwLzA3LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Mjk2OTYwMDAwMCIsIm5iZiI6MTcyNjA3NDAwMCwiZXhwIjoxNzUzMTE3MjAwfQ.Qh5EKISAVqlhbNkgh1gtzDLUv1TXC7WpqNdNpAS2274",
      },
    });
    return result.data.content;
  } catch (error) {
    return error;
  }
});

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const cineSlice = createSlice({
  name: "cineSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListCines.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListCines.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListCines.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cineSlice.reducer;
