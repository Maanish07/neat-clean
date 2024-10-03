import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="relative mt-20 bg-black px-4 pt-20 rounded-tr-3xl rounded-tl-3xl">
        {/* Logo in the circle */}
        <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-black bg-white p-2">
          <img
            className="h-full object-contain"
            src="/Assets/Card/Header/Logo.png"
            alt="Logo"
          />
        </div>

        {/* Title */}
        <h1
          className="font-normal text-center text-white"
          style={{
            fontSize: "clamp(2rem, 8vw, 10rem)", 
            letterSpacing: "5px", 
          }}
        >
          सफाई | Clean
        </h1>

        {/* Footer content */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between text-black py-6 sm:py-8 md:py-10">
          <div className="text-center sm:text-left">
            <p className="text-white">
              Made with <span className="text-red-500">❤</span> by{" "}
              <a
                href="https://full-nu.vercel.app/"
                className="text-white hover:underline"
              >
                Manish Kumar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
