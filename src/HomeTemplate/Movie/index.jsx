import React, { useEffect } from "react";
import ListMovie from "./ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovies } from "./slice";

export default function Movie() {
  const state = useSelector((state) => state.ListMovieReducer);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(fetchListMovies());
  }, []);

  const renderListMovies = () => {
    const { data } = state;
    return data?.map((item) => <ListMovie key={item.maPhim} movies={item} />);
  };

  if (state.loading) return <p>Loading...</p>;
  return (
    <div className="mt-20">
      <div className="border-b w-[200px] flex justify-center items-center mx-auto mb-5">
        <h1 className="text-center font-semibold text-2xl">Phim</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-2">{renderListMovies()}</div>
      </div>
    </div>
  );
}
