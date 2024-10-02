import React from 'react';
import { Meteors } from '@stianlarsen/meteors'; 

const Astro = () => {
  return (
    <>
    <div style={{ position: 'relative', width: "100%", height: '300px' }}>
      {Meteors ? (
        <Meteors
          speed={5}
          size={50}
          amount={20}
          colorLightmode="black"
          colorDarkmode="white"
          fallingSide="right"
        />
      ) : (
        <p>Error: Meteors component is undefined.</p>
      )}
    </div>
    </>
  );
};

export default Astro;
