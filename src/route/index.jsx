import { Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";
import HomeTemplate from "../HomeTemplate";
import HomePage from "../HomeTemplate/HomePage";
import Cines from "../HomeTemplate/RapChieuPhim";
import DetailMovie from "../HomeTemplate/DetailMovie";
import UpcomingMovie from "../HomeTemplate/Movie/UpcomingMovie";
import MovieShowing from "../HomeTemplate/Movie/MovieShowing";

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
        path: "upcoming-movies",
        element: UpcomingMovie,
      },
      {
        path: "movie-showing",
        element: MovieShowing,
      },
      {
        path: "detail/:id",
        element: DetailMovie,
      },
      {
        path: "cines",
        element: Cines,
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
