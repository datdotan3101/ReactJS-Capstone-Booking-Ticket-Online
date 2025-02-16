import React from "react";
import Seat from "./Seat";
import { useSelector } from "react-redux";

export default function DatVe() {
  const props = useSelector((state) => state.bookingTicketReducer);
  const { listSeats, listSeatSelected } = props;

  const renderRow = () => {
    const data = listSeats[0];
    return (
      <div className="space-x-20 flex justify-center align-middle">
        <span></span>
        {data.danhSachGhe.map((item) => (
          <span key={item.soGhe}>{item.soGhe}</span>
        ))}
      </div>
    );
  };

  const renderListSeats = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return null;
      return (
        <div key={index} className="space-x-10 space-y-12">
          <span>{row.hang}</span>
          {row.danhSachGhe.map((item) => (
            <Seat key={item.soGhe} item={item} />
          ))}
        </div>
      );
    });
  };

  const totalPrice = () => {
    return listSeatSelected.reduce((total, seat) => total + seat.gia, 0);
  };

  return (
    <div className="mt-20 text-center">
      <h1 className="text-2xl font-bold mb-16">Booking Online</h1>
      <div className="flex">
        {/* Ghế danh sách */}
        <div>
          {/* Màn hình */}
          <div className="w-full mx-auto bg-orange-500">
            <h1 className="text-white font-semibold">Màn hình</h1>
          </div>
          {renderRow()}
          {renderListSeats()}
        </div>

        {/* Ghế đang chọn */}
        <div className="ml-6">
          <h1 className="text-2xl font-semibold">Ghế đang chọn</h1>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ghế
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá
                  </th>
                </tr>
              </thead>
              <tbody>
                {listSeatSelected.map((seat) => (
                  <tr
                    key={seat.soGhe}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {seat.soGhe}
                    </td>
                    <td className="px-6 py-4">
                      {seat.gia.toLocaleString()} VND
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold">
                  <td className="px-6 py-3">Tổng:</td>
                  <td className="px-6 py-3">
                    {totalPrice().toLocaleString()} VND
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
