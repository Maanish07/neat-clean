import React from "react";
import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <div className="mt-6 mb-6 flex flex-wrap gap-0 sm:gap-1 sm:justify-start">
      <Link
        to="https://github.com/Maanish07"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold sm:text-base p-2 sm:p-3 m-1 sm:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
      >
        Github
      </Link>

      <Link
        to="https://www.linkedin.com/in/manish-kumar-48b3a7217/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold sm:text-base p-2 sm:p-3 m-1 sm:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
      >
        LinkedIn
      </Link>

      <Link
        to="https://leetcode.com/u/Mannu_story07/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold sm:text-base p-2 sm:p-3 m-1 sm:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
      >
        LeetCode
      </Link>

      <Link
        to="https://your-blog-url.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold sm:text-base p-2 sm:p-3 m-1 sm:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
      >
        Blog
      </Link>

      <Link
        to="mailto:manishkr88089@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold sm:text-base p-2 sm:p-3 m-1 sm:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 cursor-pointer"
      >
        Email
      </Link>
    </div>
  );
};
