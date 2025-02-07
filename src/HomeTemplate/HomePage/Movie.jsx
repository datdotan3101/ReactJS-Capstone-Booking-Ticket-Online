import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <div className="mt-12">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={movie.hinhAnh} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.tenPhim}
            </h5>
          </a>
        </div>
      </div>
      <Link
        to={`/detail/${movie.maPhim}`}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Đặt vé
      </Link>
    </div>
  );
}
