import React, { useEffect } from "react";
import { Links } from "./Links";
import Type from "./Type";
import { motion } from "framer-motion";


const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const  Hero = () =>  {
  const typingStrings = [
    "iit Advance",
    "aiims",
    "iit mains",
    "neet",
    
  ];
  <span>
    <div>S</div>
    <div>A</div>
    <div>N</div>
    <div>I</div>
    <div>Y</div>
    <div>A</div>
  </span>
  return (
    <>
    

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="i-left">
              <div className="flex items-center">
                <div className="i-left-wrapper">
                  <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                    

                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
                    >
                      Discover the Perfect Offline Classroom Program for yourself
                    </motion.h1>
                    
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.8 }}
                      className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5 text-gray-500"
                    >
                      <Type strings={typingStrings} />
                    </motion.h1>
                  </div>
                </div>
                <button class="add-to-cart">
    <div class="default">Add To Cart</div>
    <div class="success">Done</div>
    <div class="cart">
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="dots"></div>
</button>
                
                
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
 