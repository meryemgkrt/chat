import React from "react";
import user from "../../img/user.png";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between"> {/* gap-3 olarak düzeltildi */}
            <p className="font-bold text-gray-200">Mery</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>
      <div className="divider my-0" /> {/* Gereksiz py-0 ve h-1 kaldırıldı */}
    </>
  );
};

export default Conversation;
