// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slick = () => {
//   const settingsForward = {
//     infinite: true,
//     slidesToShow: 7,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="">
//       <Slider {...settingsForward}>
//         {[
//           "C",
//           "C++",
//           "Python",
//           "JavaScript",
//           "MERN",
//           "MySQL",
//           "MongoDB",
//           "Java",
//           "VSCode",
//         ].map((skill, index) => (
//           <div key={index} >
//             <span       className="items-center justify-center hidden px-4 py-3 mt-10 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded"
// >{skill}</span>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Slick;


import React from 'react';
import Slider from 'react-slick';


const Slick = () => {
  const logos = [
    { src: 'path-to-image1', alt: 'B&O' },
    { src: 'path-to-image2', alt: 'BOSE' },
    { src: 'path-to-image3', alt: 'M-logo' },
    { src: 'path-to-image4', alt: 'Logitech' },
    { src: 'path-to-image5', alt: 'Apple' },
    { src: 'path-to-image6', alt: 'Bowers & Wilkins' }
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false
  };

  return (
    <div className="logo-carousel-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>

      
      <div className="logo-reflection">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide reflection-slide">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slick;
