import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

const Banner = () => {
  return (
    <div className="mt-8">
      <h2 className="text-center text-4xl uppercase font font-extrabold mb-2 px-4">
        You Can Sell or Buy Mobile from our website
      </h2>
      <p className="text-center px-4">
        We are provide many kinds of used phones from seller and we buy this to
        the customer through on our website.
      </p>
      <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
          <img
            src="https://i.ibb.co/K9mxhbJ/Apogaeis-6-Biggest-Challenges-in-Mobile-App-Development.jpg"
            className="w-full h-full"
            alt=""
          />
          </SwiperSlide>
          <SwiperSlide>
          <img
            src="https://i.ibb.co/YZMhSMH/mobile-apps-development-nz-1-modified.jpg"
            className="w-full h-full"
            alt=""
          />
          </SwiperSlide>
          <SwiperSlide>
          <img
            src="https://i.ibb.co/z5qqqcR/userandmobile-jpg-e1455151356623.jpg"
            className="w-full h-full"
            alt=""
          />
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Banner;
