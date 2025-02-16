import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const actionLoginIn = createAsyncThunk(
  "actionLogIn",
  async (user, { rejectWithValue }) => {
    try {
      const result = await api.post("QuanLyNguoiDung/DangKy", user);
      const userInfor = result.data.content;
      localStorage.setItem("userInfor", JSON.stringify(userInfor));
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const userInfor = localStorage.getItem("userInfor")
  ? JSON.parse(localStorage.getItem("userInfor"))
  : null;
const initialState = {
  loading: false,
  data: userInfor,
  error: null,
};
const ActionLogInSlice = createSlice({
  name: "ActionLogInSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionLoginIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actionLoginIn.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(actionLoginIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default ActionLogInSlice.reducer;
