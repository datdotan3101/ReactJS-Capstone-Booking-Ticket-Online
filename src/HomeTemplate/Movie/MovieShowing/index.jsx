import React from "react";
import MovieShowingList from "./MovieShowingList";

export default function MovieShowing() {
  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl text-center border-b-2 pb-2 w-[500px]">
            Phim đang chiếu
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          <MovieShowingList />
          <MovieShowingList />
          <MovieShowingList />
          <MovieShowingList />
        </div>
      </div>
    </div>
  );
}
