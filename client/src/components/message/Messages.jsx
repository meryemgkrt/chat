import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";



const Messages = () => {
  const { messages, loading } = useGetMessages();

  return (
    <div className="px-4 overflow-auto flex-1 md:mt-4">
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        <p>No messages</p>
      )}
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
/* const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("Messages", messages);

  return (
    <div className="px-4 overflow-auto flex-1 md:mt-4">
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        <p>No messages</p>
      )}
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
 */
export default Messages;
