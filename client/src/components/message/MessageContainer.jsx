import Messages from './Messages'
import MessagesInput from './MessagesInput'
import NoSelected from './NoSelected'

const MessageContainer = () => {
  const noChatSelected = true; // Yazım hatasını düzelttik

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-[#134242fd] px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold ">Mery</span>
          </div>
          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
