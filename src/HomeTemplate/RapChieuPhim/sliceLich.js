import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchListSchedule = createAsyncThunk(
  "fetchListSchedule",
  async (id, { rejectWithValue }) => {
    try {
      const result = api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
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

const listScheduleMovieSlice = createSlice({
  name: "listScheduleMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListSchedule.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListSchedule.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListSchedule.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default listScheduleMovieSlice.reducer;
