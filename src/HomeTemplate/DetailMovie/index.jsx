import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailsMovie } from "./slice";
import { Link } from "react-router-dom";
import MovieSchedule from "../RapChieuPhim/MovieSchedule";
import { fetchListCines } from "../RapChieuPhim/slice";
import { fetchListSchedule } from "../RapChieuPhim/sliceLich";

export default function DetailMovie() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const state = useSelector((state) => state.DetailMovieReducer);
  const { id } = useParams();

  const { data } = state;
  const dispatch = useDispatch();

  // List logo rạp phim
  const listCines = useSelector((state) => state.CineReducer);

  // List schedule movie
  const listScheduleMovie = useSelector((state) => state.ListScheduleMovie);

  const ListCinesLogo = () => {
    const { data } = listCines;
    return data?.map((cines) => (
      <MovieSchedule key={cines.maHeThongRap} cines={cines} />
    ));
  };
  useEffect(() => {
    dispatch(fetchDetailsMovie(id)), dispatch(fetchListSchedule(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchListCines());
  }, [dispatch]);

  if (state.loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-20 text-8xl">
      <div className="container mx-auto noi-dung w-full border-b-2 mb-2 flex justify-center items-center">
        <h1 className="text-center text-4xl p-2 font-semibold">
          Nội dung phim
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-10">
        {/* Hình ảnh phim */}
        <div className="justify-items-center">
          {data && <img className="w-[200px]" src={data.hinhAnh} alt="" />}
        </div>

        {/* Thông tin phim */}
        {/* Tên phim  */}
        <div>
          <h1 className="ten-phim-detail text-2xl font-semibold">
            {data && data.tenPhim}
          </h1>
          {/* Đánh giá  */}
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
          <p className="text-xl">
            <span className="font-semibold">Ngày chiếu:</span>{" "}
            {data && data.ngayKhoiChieu}
          </p>
          {/* Phim chưa chiếu  */}
          <p className="text-2xl">
            Đang chiếu:{" "}
            {data && data.dangChieu ? (
              <span className="text-xl text-green-600 font-semibold">
                Đang chiếu
              </span>
            ) : (
              <span className="text-xl text-red-600 font-semibold">
                Chưa chiếu
              </span>
            )}
          </p>
          {/* Mô tả  */}
          <p className="text-xl">
            <span className="font-semibold">Mô tả:</span> {data && data.moTa}
          </p>
          {/* Đặt vé */}
          <div className="flex">
            <Link
              to="/dat-ve"
              className="mr-2 p-2 text-xl focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg"
            >
              Đặt vé
            </Link>
            {/* Button mở modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Xem trailer
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">Trailer</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 space-y-4">
              {data && data.trailer && (
                <iframe
                  width="560"
                  height="315"
                  src={`${data.trailer.replace(
                    "watch?v=",
                    "embed/"
                  )}?enablejsapi=1&origin=${window.location.origin}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Lịch chiếu  */}
      <div>{ListCinesLogo()}</div>
    </div>
  );
}
