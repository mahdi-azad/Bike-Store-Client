import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
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
          <div className="slide-content">
            <img src="hero1.jpg" alt="hero1" className="slide-image" />
            <div className="overlay-text">
              <h2>Discover Our Latest Bikes</h2>
              <p>
                Explore a range of high-performance bikes designed to elevate
                your ride.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="hero2.jpg" alt="hero2" className="slide-image" />
            <div className="overlay-text">
              <h2>Expert Repairs at Your Fingertips</h2>
              <p>
                Professional repairs to keep you rolling smoothly all year long.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="hero3.jpg" alt="hero3" className="slide-image" />
            <div className="overlay-text">
              <h2>Seasonal Promotions Just for You</h2>
              <p>
                Don't miss our limited-time offers on top biking gear and
                accessories.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
