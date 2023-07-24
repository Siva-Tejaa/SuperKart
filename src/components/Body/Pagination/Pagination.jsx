import React from 'react';
import "./Pagination.css";

import LaptopBanner from "../../../assets/Banners/LaptopBanner.png";
import MobileBanner from "../../../assets/Banners/MobileBanner.png";
import EssentialsBanner from "../../../assets/Banners/EssentialsBanner.png";
import WatchBanner from "../../../assets/Banners/WatchBanner.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Pagination = () => {

  return (
    <div className='pagination'>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          <SwiperSlide><img src={WatchBanner} height="200px" width="100%" alt="Watch Banner"/></SwiperSlide>
          <SwiperSlide><img src={EssentialsBanner} height="200px" width="100%" alt="Essentials Banner"/></SwiperSlide>
          <SwiperSlide><img src={MobileBanner} height="200px" width="100%" alt="Mobile Banner"/></SwiperSlide>
          <SwiperSlide><img src={LaptopBanner} height="200px" width="100%" alt="Laptop Banner"/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Pagination;