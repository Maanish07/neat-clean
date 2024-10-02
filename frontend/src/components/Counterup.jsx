import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counterup = ({ number, description }) => {
  const [counteron, setCounteron] = useState(false);

  
  useEffect(() => {
    console.log("Received number:", number);
  }, [number]);

  return (
    <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
    
      <div className=" flex relative overflow-hidden border-t-4 border-black bg-white shadow">
        <div className=" py-10">
          <div className="flex  items-center">
            <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
             
              {counteron && (
                <CountUp start={0} end={Number(number)} duration={3} delay={0} />
              )}
              
              {<span>+</span>}
            </h3>
            <span className="ml-3 text-base font-medium capitalize">
              {description}
            </span>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counterup;

  

