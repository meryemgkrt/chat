import React from 'react';
import { MdSend } from "react-icons/md";

const MessagesInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-[#024947] border-none text-white"
        />
        
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <MdSend className="h-6 w-6 text-white" />
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
