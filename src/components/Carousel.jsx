import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    text: "Step into Comfort with Nike Air Max",
  },
  {
    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    text: "Run with Power – Adidas Ultraboost",
  },
  {
    img: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg",
    text: "Classic Style – New Balance 574",
  },
];

const Carousel = () => {
  return (
    <div className="px-4 md:px-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl shadow-xl overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[300px] md:h-[450px] w-full">
              <img
                src={slide.img}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
