import { Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";
import HomeTemplate from "../HomeTemplate";
import HomePage from "../HomeTemplate/HomePage";
import Cines from "../HomeTemplate/RapChieuPhim";
import DetailMovie from "../HomeTemplate/DetailMovie";
import DatVe from "../HomeTemplate/DatVe/DatVe";
import LoginPage from "../HomeTemplate/_component/LoginPage";
import SignInPage from "../HomeTemplate/_component/SignInPage";
import Movie from "../HomeTemplate/Movie";

const route = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "detail/:id",
        element: DetailMovie,
      },
      {
        path: "cines",
        element: Cines,
      },
      {
        path: "dat-ve",
        element: DatVe,
      },
      {
        path: "log-in",
        element: LoginPage,
      },
      {
        path: "sign-in",
        element: SignInPage,
      },
      {
        path: "movie",
        element: Movie,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
  },
];

export const renderHeader = () => {
  return route.map((route) => {
    if (route.children) {
      return (
        <Route key={route.maPhim} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.maPhim}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route
          key={route.maPhim}
          path={route.path}
          element={<route.element />}
        />
      );
    }
  });
};
