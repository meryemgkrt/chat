import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }), // Doğru yazım ve virgül eklendi
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
