import React from "react";
import Hours from "./Hours";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const MovieSchedule = ({ cines }) => {
  const state = useSelector((state) => state.ListScheduleMovie);
  const { id } = useParams;
  console.log(id);

  return (
    <div className="flex container mx-auto mt-2">
      {/* Bên trái logo  */}
      <div className="flex align-middle justify-center mr-2">
        <img className="w-[50px] h-[50px]" src={cines.logo} alt="" />
      </div>
      {/* Thông tin lịch chiếu  */}
      <div>
        <div className="flex">
          <span className="text-2xl mr-2 text-center">
            <p>Thứ 2</p>
            <p>15</p>
          </span>
          <span className="text-2xl text-center">
            <p>Thứ 3</p>
            <p>16</p>
          </span>
        </div>
        {/* Lịch chiếu chi tiết từng rạp  */}

        {/* Hình logo  */}
        <div className="flex align-middle">
          <div>
            <img
              className="w-[50px] h-auto"
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
          {/* Thông tin rạp chiếu  */}
          <div className="ml-2">
            <p className="text-2xl">Ten rap</p>
            <p className="text-xl text-gray-500">Dia chi</p>
            {/* Giờ chiếu  */}
            <div className="grid grid-cols-4">
              <Hours />
              <Hours />
              <Hours />
              <Hours />
              <Hours />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSchedule;
