import React, { useContext } from "react";
import user from "../../img/user1.png";
import { AuthContext } from "../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  // useContext ile AuthContext'i alıyoruz
  const { authUser } = useContext(AuthContext); 
  const { selectedConversation } = useConversation();

  const fromMe = message.from === authUser._id;
  const ChatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? "bg-[#024947]" : "bg-[#128C7E]";

  return (
    <div className={`chat ${ChatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic || user} alt="Profile" /> {/* Default resim eklendi */}
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-sm flex gap-1 items-center">
        12:45
      </div>
    </div>
  );
};

export default Message;
