import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaCircleArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className="relative mt-20 bg-black px-4 pt-20 rounded-tr-3xl rounded-tl-3xl">
  <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-black bg-white p-2"><img className="h-full object-contain" src="/Assets/Card/Header/Logo.png" alt="" /></div>
  
  <h1 className="font-normal text-center text-white"
  style = {
    {
      
        fontSize: "10pc",
        letterSpacing: "10px",
    }
    
  }>सफाई|Clean</h1>
 <div className="flex justify-between text-black">
        <div className="">
          <p className="text-white px-4 py-6 sm:px-10 sm:py-8 md:px-20 md:py-10">
            Made With ❤ by <a href = "https://full-nu.vercel.app/" className="text-white-500">Manish Kumar</a>
          </p>
        </div>
      </div>
</footer>

      
    </>
  );
};

export default Footer;