import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null, // Dữ liệu người dùng sau khi đăng nhập
  error: null,
};

const signInSlice = createSlice({
  name: "SignInReducer",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.data = action.payload; // Lưu thông tin đăng nhập
      state.error = null;
    },
    actionLogout: (state) => {
      state.data = null; // Xóa thông tin đăng nhập
    },
  },
});

export const { actionLogin, actionLogout } = signInSlice.actions;
export default signInSlice.reducer;
