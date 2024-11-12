import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages } = useConversation(); // useConversation'ın dönüş yapısına göre erişim
  
  const sendMessage = async (message) => {
    if (!selectedConversation) {
      toast.error("No conversation selected");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message })
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      const data = await res.json();
      setMessages((prevMessages) => [...prevMessages, data.message]); // Yeni mesajı önceki mesajlara ekleyin
      toast.success("Message sent!");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
