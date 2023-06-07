import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./FindYourBest.css";

const FindYourBest = () => {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center">
        FIND YOUR PERFECT MATCH
      </h2>
      <p className="text-gray-400 font-mono text-2xl text-center mt-4">
        EXPLORE AND FIND RIGHT ONE
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://shopee.sg/blog/wp-content/uploads/2022/07/best-gaming-phones-9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/08113628/cellphone-device-electronics-699122.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.practicallynetworked.com/wp-content/uploads/2022/09/ios-history-feature-2135682-540x339.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bizzbuzz.news/h-upload/2023/04/08/1500x900_1694639-oanvel-14.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ineedamobile.com/wp-content/uploads/2018/04/Refurbished-Mobile-Phones.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://content.jdmagicbox.com/comp/def_content/mobile_phone_dealers_iphone/default-mobile-phone-dealers-iphone-10.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/mobile-img-06.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/mobile-img-03.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn-attachments.timesofmalta.com/25c06cc2b7f3bee5cfec72b4331b495eeda4feda-1610556192-092086a9-1920x1280.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FindYourBest;
