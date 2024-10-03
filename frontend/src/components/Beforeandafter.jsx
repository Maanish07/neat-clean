import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const Beforeandafter = () => {
  const FIRST_IMAGE = {
    imageUrl: '/Assets/Card/Header/hello.jpg', 
  };
  const SECOND_IMAGE = {
    imageUrl: '/Assets/Card/Header/second.jpg',
  };

  const delimiterIconStyles = {
    width: '40px',
    height: '40px',
    backgroundSize: 'cover',
    borderRadius: '50%',
    backgroundImage: `url('/Assets/Card/Header/Verticleline.png')`,
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-100 rounded-lg">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          delimiterIconStyles={delimiterIconStyles}
          style={{
            height: '1000px', // Height in pixels
          }}
          withResizeDivider={false} // Just in case
        />
      </div>

      {/* Add custom CSS styling */}
      <style jsx>{`
        .before-after-slider-container img {
          height: 500px !important;
          border-radius: 50px 0px 0px 50px !important;
          object-fit: cover; /* This ensures the image scales properly */
        }
      `}</style>
    </div>
  );
};

export default Beforeandafter;




