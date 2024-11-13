import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import Messages from './Messages';
import MessagesInput from './MessagesInput';
import NoSelected from './NoSelected';

 const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessagesInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;
