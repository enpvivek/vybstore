// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = () => {
  return (
    <div
      className=" flex flex-row container justify-between w-[1200px] fixed text-body1
        backdrop-blur-md
        h-20
        my-[12px]
        p-[20px] 
        gap-[60px]
        bg-secondary
        font-primarytxt
        rounded-[35px]
        items-center"
    >
      <div className="flex flex-row items-center">
        <div>
          <img
            src="/Images/logo.svg"
            alt="YB Store Logo"
            className="h-12 w-auto"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Creators"
            className="rounded-full border border-gray-300 h-10 font-primarytxt px-4"
            aria-label="Search Creators"
          />
        </div>
      </div>
      <div className="flex flex-row gap-16">
        <div>Contact Us</div>
        <div>About Us</div>
        <div>Policies</div>
      </div>
      <div>
        <button className="rounded-xl bg-[#ffffff] px-8 py-1 border-2 border-[#a8a8a8] bg-white text-[#003c3c]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
