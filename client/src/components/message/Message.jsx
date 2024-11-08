import React from "react";
import user from "../../img/user1.png";
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={user} alt="Tailwind css chat buble component"/>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-[#024947]`}>Hello My name is Sue</div>
      <div className={`chat-footer  opacity-50 text-sm flex gap-1 items-center`}>12:45</div>
    </div>
  );
};

export default Message;
