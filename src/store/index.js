import { configureStore } from "@reduxjs/toolkit";
import ListMovieReducer from "./../HomeTemplate/HomePage/slice";
import DetailMovieReducer from "./../HomeTemplate/DetailMovie/slice";
import CineReducer from "./../HomeTemplate/RapChieuPhim/slice";
import fetchLisMovieReducer from "./../HomeTemplate/Movie/slice";
import SignInReducer from "./../HomeTemplate/_component/slice";
import LogInReducer from "./../HomeTemplate/_component/LoginPage/slice";
import SigninReducer from "./../HomeTemplate/_component/SignInPage/slice";
import ListScheduleMovie from "./../HomeTemplate/RapChieuPhim/sliceLich";
import bookingTicketReducer from "./../HomeTemplate/DatVe/slice";
import MovieScheduleReducer from "./../HomeTemplate/DetailMovie/sliceLichChieu";
export const store = configureStore({
  reducer: {
    ListMovieReducer,
    DetailMovieReducer,
    CineReducer,
    fetchLisMovieReducer,
    SignInReducer,
    LogInReducer,
    SigninReducer,
    ListScheduleMovie,
    bookingTicketReducer,
    MovieScheduleReducer,
  },
});
