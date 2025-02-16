import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchListCines = createAsyncThunk(
  "fetchListCines",
  async (__dirname, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyRap/LayThongTinHeThongRap");
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
