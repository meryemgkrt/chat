import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sdebar = () => {
  return (
    <div className="sidebar border-r flex flex-col border-slate-500 mt-6 ml-4 h-full">
      <SearchInput />

      <div className="flex-1 overflow-y-auto mt-4 px-3">
        <Conversations />
      </div>

      <div className="px-3 py-4 border-t border-slate-500">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sdebar;
