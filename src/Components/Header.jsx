import React from "react";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">
          Hoster is hiring
        </button>
      </div>
      <div>
        <HiBars3 />
      </div>
    </div>
  );
};

export default Header;
