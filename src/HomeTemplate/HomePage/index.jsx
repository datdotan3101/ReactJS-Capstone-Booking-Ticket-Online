import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovie } from "./slice";
import Carousel from "./Carousel";
import Loading from "./Loading";

export default function HomePage() {
  const state = useSelector((state) => state.ListMovieReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListMovie());
  }, []);

  const renderListMovie = () => {
    const { data } = state;
    const banner = data?.slice(0, 8);
    return banner?.map((movie) => <Movie key={movie.maPhim} movie={movie} />);
  };

  if (state.loading) return <Loading />;

  // Carousel
  const slides = [
    { image: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png" },
    { image: "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png" },
    {
      image: "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
    },
  ];

  return (
    <div>
      <Carousel slides={slides} />
      <div className="grid grid-cols-4 gap-2">{renderListMovie()}</div>
    </div>
  );
}
