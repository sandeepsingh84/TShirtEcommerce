import React from "react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const list = [
  {id:1,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },
  {id:2,
    name: "Paradise Printed Oversized T-shirt",
    img: "https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/paradise_printed_oversized_t-shirt_for_men_base_01_07_2023_400x533.jpg",
    price: "$543",
  },

  {id:3,
    name: "Dark",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },


  {id:4,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },



  {id:5,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },



  {id:6,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },



  {id:7,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },



  {id:8,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },
];

const Swiperloop = () => {
  return (
    <div>
      Swiperloop
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperloop;
