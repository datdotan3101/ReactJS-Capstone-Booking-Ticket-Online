import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const actSignIn = createAsyncThunk(
  "actLogIn",
  async (user, { rejectWithValue }) => {
    try {
      const result = await api.post("QuanLyNguoiDung/DangNhap", user);
      const userInfo = result.data.content;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  loading: false,
  data: userInfo,
  error: null,
};

const actSignInSlice = createSlice({
  name: "actLoginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(actSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(actSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default actSignInSlice.reducer;
