"use client";
import React from "react";
import { connectWallet } from "../../../../../services/blockchain";

const NavContract = () => {
  return (
    <button
      className="h-[48px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300 bg-[#1B5CFE] hover:bg-blue-500"
      onClick={connectWallet}
    >
      Connect wallet
    </button>
  );
};

export default NavContract;
