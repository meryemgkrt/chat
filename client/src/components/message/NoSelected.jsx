import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import {TiMessages} from 'react-icons/ti'
const NoSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-centergap-2">
        <p>Welcom 👋 Mery❄</p>
        <p>Start a chat with your friends</p>
        <TiMessages className="md:text-6xl text-[#003d50] text-3xl text-center" />
      </div>
    </div>
  );
};

export default NoSelected;
