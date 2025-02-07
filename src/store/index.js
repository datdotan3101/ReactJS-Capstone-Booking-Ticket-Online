import { configureStore } from "@reduxjs/toolkit";
import ListMovieReducer from "./../HomeTemplate/HomePage/slice";
import DetailMovieReducer from "./../HomeTemplate/DetailMovie/slice";
import CineReducer from "./../HomeTemplate/RapChieuPhim/slice";
export const store = configureStore({
  reducer: {
    ListMovieReducer,
    DetailMovieReducer,
    CineReducer,
  },
});
