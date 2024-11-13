import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 overflow-auto flex-1 md:mt-4">
      {!loading &&
        Array.isArray(messages) &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, idx) => (
          <MessageSkeleton key={idx} loading={true} />
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-500">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
