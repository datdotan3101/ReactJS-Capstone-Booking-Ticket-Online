import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchMovieSchedule = createAsyncThunk(
  "fetchMovieSchedule",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
      );
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

const MovieScheduleSlice = createSlice({
  name: "MovieScheduleSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovieSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default MovieScheduleSlice.reducer;
