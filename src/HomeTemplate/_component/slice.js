import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const actionLogin = createAsyncThunk(
  "login",
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
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actionLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(actionLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default loginSlice.reducer;
