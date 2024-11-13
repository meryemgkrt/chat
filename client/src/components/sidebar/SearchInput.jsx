import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversations from "../hooks/useGetConversations";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { serSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e) => {
    e.prevenrDefault();
    if (!search) return;
    if (search.length < 3) {
     return toast.error("Search query must be at least 3 characters long");
    }
 const conversation = conversations.find((c) =>c.fullName.toLowerCase().includes(search.toLowerCase()))

 if(!conversation){
  serSelectedConversation(conversation)
  setSearch("");
 }else toast.error("No conversation found");
  };
  return (
    <form className="flex items-center" onSubmit={handleSearch}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
