import React from "react";

const Banner = () => {
  return (
    <div className="mt-8 mb-20">
      <h2 className="text-center text-3xl font-mono font font-extrabold my-2">
        You Can Sell or Buy Mobile from our website
      </h2>
      <p className="text-center">
        We are provide many kinds of used phones from seller and we buy this to
        the customer through on our website.
      </p>
      <div className="carousel w-3/4 mx-auto mb-10 mt-5 rounded-sm">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/K9mxhbJ/Apogaeis-6-Biggest-Challenges-in-Mobile-App-Development.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/JCpxL6J/Tw-G-UK-Mastering-User-Acquisition-HERO-width-1200.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/YZMhSMH/mobile-apps-development-nz-1-modified.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/z5qqqcR/userandmobile-jpg-e1455151356623.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
