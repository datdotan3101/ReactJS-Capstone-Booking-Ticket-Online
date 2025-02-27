import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../services/api";
export const fetchDetailsMovie = createAsyncThunk(
  "fetchDetailsMovie",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
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

const detailsMovieSlice = createSlice({
  name: "detailsMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailsMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDetailsMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDetailsMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default detailsMovieSlice.reducer;
