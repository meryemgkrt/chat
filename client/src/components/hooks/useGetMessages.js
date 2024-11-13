import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";



/* const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
  
	useEffect(() => {
	  const getMessages = async () => {
		setLoading(true);
		try {
		  const res = await fetch(`/api/messages/${selectedConversation._id}`);
		  const data = await res.json();
  
		  if (data.error) throw new Error(data.error);
  
		  // Mesajları sadece ilgili `senderId` ve `receiverId` eşleşmelerine göre ayıklama
		  const filteredMessages = data.filter(
			(message) =>
			  (message.senderId === selectedConversation._id && message.receiverId === authUser._id) ||
			  (message.receiverId === selectedConversation._id && message.senderId === authUser._id)
		  );
  
		  setMessages(filteredMessages);
		} catch (error) {
		  toast.error(error.message);
		} finally {
		  setLoading(false);
		}
	  };
  
	  if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);
  
	return { messages, loading };
  }; */
  



const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};

export default useGetMessages;
