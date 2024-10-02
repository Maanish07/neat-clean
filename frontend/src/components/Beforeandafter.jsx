import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const Beforeandafter = () => {
  const FIRST_IMAGE = {
    imageUrl: '/Assets/Card/Header/first.jpg', // Make sure the path is correct
  };
  const SECOND_IMAGE = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VupLYqeNeT6UtEb7p7yrriIpXasT9HIAKoxoLqlmapNFQT2jZj_dxI_8mlO1HHTs7A4&usqp=CAU',
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
      <div className="w-96px rounded-lg "> {/* Width and rounded corners applied */}
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          delimiterIconStyles={delimiterIconStyles}
        />
      </div>
    </div>
  );
};

export default Beforeandafter;




