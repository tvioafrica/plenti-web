"use client";
import React from "react";
import { promotion1, promotion2 } from "@/public/customerImages/index";
import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
  } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Promotions = () => {
  return (
    <div className="p-[1rem]">
      <Swiper
        style={{ width: '100%' }}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
    
        <SwiperSlide style={{ width: "350px" }}>
          <img
            src={promotion1.src}
            alt=""
            className="w-[350px] m-auto h-[132px] rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "350px" }}>
          <img
            src={promotion1.src}
            alt=""
            className="w-[350px] m-auto h-[132px] rounded-md"
          />
        </SwiperSlide>
        
      </Swiper>

      <img
        src={promotion2.src}
        className="w-full h-[352px] my-[1rem] rounded-md max-md:hidden"
      />
    </div>
  );
};

export default Promotions;
