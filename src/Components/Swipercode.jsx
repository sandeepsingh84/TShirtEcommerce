import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";

const Swipercode = () => {
  return (
    <div>
      Swipercode
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=5400"
              className="w-full  object-cover h-[900px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?auto=compress&cs=tinysrgb&w=5400"
              className="w-full  object-cover h-[900px]"
            />kjdghduihea
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=5400"
              className="w-full  object-cover h-[900px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&w=5400"
              className="w-full  object-cover h-[900px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images.pexels.com/photos/806626/pexels-photo-806626.jpeg?auto=compress&cs=tinysrgb&w=5400"
              className="w-full  object-cover h-[900px]"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Swipercode;
