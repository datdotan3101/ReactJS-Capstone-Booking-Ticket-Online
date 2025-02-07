import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import styles của Swiper
import "swiper/css/navigation"; // Import styles cho navigation buttons
import "swiper/css/pagination"; // Import styles cho pagination
import { Navigation, Pagination } from "swiper/modules"; // Import các module cần thiết

export default function Carousel({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]} // Sử dụng Navigation và Pagination
      spaceBetween={10} // Khoảng cách giữa các slide
      slidesPerView={1} // Số lượng slide hiển thị cùng lúc
      navigation // Hiển thị nút điều hướng (next/prev)
      pagination={{ clickable: true }} // Hiển thị pagination và cho phép click
      loop // Lặp vô hạn
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded-lg carousel-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
