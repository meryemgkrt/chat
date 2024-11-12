import React, { useState } from 'react';
import { MdSend } from "react-icons/md";
import useSendMessage from '../hooks/useSendMessage';

const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage(); // Burada destructuring düzeltildi
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-[#024947] border-none text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          disabled={loading} // Loading durumunda buton devre dışı bırakılır
        >
          {loading ? <div className="loading loading-spinner">mkm</div> : <MdSend className="text-white" />}
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
