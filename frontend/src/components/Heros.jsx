import React from "react";
import { Links } from "./Links";
import Type from "./Type";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Heros = () => {
  const typingStrings = ["Rooms", "Kitchen", "Wash Rooms"];

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/Assets/Card/Header/Slider-bg-1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center justify-center h-screen md:h-[75vh]"> {/* Adjusted height for mobile */}
          <div className="w-full text-center md:text-left">
            <div className="i-left">
              <div className="flex items-center flex-col md:flex-row md:items-start">
                <div className="i-left-wrapper">
                  <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-4 font-bold text-black drop-shadow-lg text-center md:text-left"
                    >
                      'Tired' of all these
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-4 font-bold text-black drop-shadow-lg text-center md:text-left"
                    >
                      Cleaning?
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.8 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-4 font-bold text-green-500 drop-shadow-lg text-center md:text-left"
                    >
                      <Type strings={typingStrings} />
                    </motion.h1>
                  </div>
                </div>
              </div>

              <ScrollLink
                to="pricing"
                smooth={true}
                className="mt-8 px-6 py-3 rounded-lg font-semibold text-lg duration-150 text-white bg-green-600 hover:bg-white hover:text-green-600 active:bg-green-700 shadow-md transition ease-in-out"
              >
                Get Started
              </ScrollLink>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Heros;
