import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="">
        <h2 className="text-3xl font-bold text-center ">Customer Reviews</h2>
        <p className="text-s text-center mb-8">
          What our customers say about us
        </p>
        <div className="max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            <div className="p-4 ">
              <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-80  flex flex-col justify-between bg-yellow-50 relative">
                <div className=" items-center mb-4">
                  <p
                    style={{
                      fontFamily: "Dancing Script",

                      fontSize: "30px",
                      fontWeight: "400",
                      lineHeight: "30px",
                    }}
                    className="text-lg mb-4"
                  >
                    "hello from the "
                  </p>
                  <div>
                    <h4
                      className="text-lg font-semibold text-gray-900"
                      style={{
                        fontFamily: "Dancing Script",

                        fontSize: "30px",
                        fontWeight: "400",
                        lineHeight: "30px",
                      }}
                    >
                      -hello
                    </h4>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-yellow-500 text-xl mr-2">{"★"}</span>
                  <span className="text-gray-600">3/5</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
