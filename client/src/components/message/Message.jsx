import { useAuthContext } from "../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

// Profil resmi için yedek resim

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id; // Mesajın göndericisini kontrol et
	const formattedTime = extractTime(message.createdAt); // Mesaj zamanı formatla
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic || defaultProfilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-500"; // Karşı tarafın mesaj rengi

	const shakeClass = message.shouldShake ? "shake" : ""; // Özel animasyon sınıfı

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Profile' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
				{message.message}
			</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;
