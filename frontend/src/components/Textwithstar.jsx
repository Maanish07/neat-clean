import React from "react";

const Textwithstar = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex justify-center items-center  whitespace-nowrap animate-marquee space-x-6 my-10 text-4xl font-bold text-gray-600">
        <span className="text-yellow-500">✦</span>
        <div
          style={{
            fontSize: "100px",            
            color: "transparent",         
            WebkitTextStroke: "1px black",   
          }}
        >
          Sweeping
        </div>
        <span className="text-yellow-500">✦</span>
        <div style={{
            fontSize: "100px",            
            color: "transparent",         
            WebkitTextStroke: "1px black",   
          }} >Cleaning</div>
        <span className="text-yellow-500">✦</span>
        <div style={{
            fontSize: "100px",            
            color: "transparent",         
            WebkitTextStroke: "1px black",   
          }}>Moping</div>
        <span className="text-yellow-500">✦</span>
        <div className = "hover:text-yellow-500" style={{
            fontSize: "100px",            
            color: "transparent",         
            WebkitTextStroke: "1px black",
            hover:"text-yellow-500", 
          }}>Dusting</div>
        <span className="text-yellow-500">✦</span>
        
      </div>
    </div>
  );
};

export default Textwithstar