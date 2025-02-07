import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailsMovie } from "./slice";
import "./../../scss/style.scss";

export default function DetailMovie() {
  const state = useSelector((state) => state.DetailMovieReducer);
  const { id } = useParams();

  const { data } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
  }, []);

  if (state.loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-20 text-8xl">
      <div className="container mx-auto noi-dung w-full border-b-2 mb-2 flex justify-center items-center">
        <h1 className="text-center text-4xl p-2 font-semibold">
          Nội dung phim
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div className="justify-items-center">
          {data && <img src={data.hinhAnh} alt="" />}
          <button className="p-2 text-xl focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Đặt vé
          </button>
        </div>

        {/* Thông tin phim  */}
        <div>
          {/* Tên phim  */}
          <h1 className="ten-phim-detail text-2xl font-semibold">
            {data && data.tenPhim}
          </h1>
          {/* Đánh giá */}
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {data && data.danhGia}
            </p>
          </div>
          {/* Ngày chiếu  */}
          <div>
            <p className="text-xl flex">
              <p className="font-semibold mr-2">Ngày chiếu:</p>{" "}
              {data && data.ngayKhoiChieu}
            </p>
          </div>
          {/* Mô tả  */}
          <p className="text-xl">
            <p className="font-semibold">Mô tả:</p> {data && data.moTa}
          </p>
        </div>
      </div>
    </div>
  );
}
