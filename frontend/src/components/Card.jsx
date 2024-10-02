import React from 'react';

const Card = ({ title, description, image ,url}) => {
  return (
  <>
  

  
    <div className="relative w-72 sm:w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div className = "bg-blue-300">      
            <img src={image} alt={title} className=" w-10 m-auto h-4 sm:h-48 object-fit flex item-center aligns-center" />
        </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
      </a>
    </div>
    
    </>
  );
};

export default Card;
