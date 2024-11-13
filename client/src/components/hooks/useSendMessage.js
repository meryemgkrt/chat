import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages } = useConversation(); // useConversation'ı çağırıyoruz

  const sendMessage = async (message) => {
    // Eğer seçili bir konuşma yoksa hata ver
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
      if (data.error) throw new Error(data.error);

      // Yeni mesajı mevcut mesaj dizisine ekle
      setMessages((prevMessages) => [...prevMessages, data]);

      toast.success("Message sent!"); // Mesaj gönderildiğinde başarılı bildirim ver

    } catch (error) {
      toast.error(error.message); // Hata mesajını göster
    } finally {
      setLoading(false); // İşlem sonunda loading durumunu sıfırla
    }
  };

  return { loading, sendMessage }; // loading ve sendMessage'i döndür
};

export default useSendMessage;
