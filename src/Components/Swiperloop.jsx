import React, { useState } from "react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const list = [
  {
    id: 1,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },
  {
    id: 2,
    name: "Paradise Printed Oversized T-shirt",
    img: "https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/paradise_printed_oversized_t-shirt_for_men_base_01_07_2023_400x533.jpg",
    price: "$543",
  },

  {
    id: 3,
    name: "Dark Brown Sulphur",
    img: "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/dark_brown_sulphur_twill_shirt_for_men_base_400x533.jpg",
    price: "$998",
  },

  {
    id: 4,
    name: "Midnight Blue",
    img: "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/dark_brown_sulphur_twill_shirt_for_men_base_400x533.jpg",
    price: "$998",
  },

  {
    id: 5,
    name: "Just Viblin Half Sleeve",
    img: "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/just_vibin_black_men_base_18_04_2023_400x533.jpg",
    price: "$349",
  },

  {
    id: 6,
    name: "Tulip Hawalian shirt",
    img: "https://www.beyoung.in/api/cache/catalog/products/hawaiian_shirt/tulip_hawaiian_shirt_base_26_05_2023_400x533.jpg",
    price: "$699",
  },

  {
    id: 7,
    name: "Pickle Green ",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$649",
  },

  {
    id: 8,
    name: "Crocodile Green",
    img: "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_400x533.jpg",
    price: "$998",
  },
];

const Swiperloop = () => {
  
  return (
    <div className="px-20">
   
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
    
        navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
       
        className="mySwiper"
      >
        {list.map((items) => (
          <SwiperSlide  className="border p-2 rounded-xl">
        
        <div className=""> <img src={items.img} /> </div>

            <div>{items.name}</div>
         <div>{items.price}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiperloop;
