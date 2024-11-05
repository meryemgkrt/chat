const Conversation = require("../models/conversation.model.js");
const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
    try {
      const { message } = req.body; // Tekil olarak "message" kullanın
      const { id: receiverId } = req.params; // receiverdId yerine receiverId
      const senderId = req.user._id;
  
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });
  
      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
  
      const newMessage = new Message({
        senderId,
        receiverId,
        message, // Tekil olarak "message" kullanın
      });
  
      await newMessage.save();
  
      if (newMessage) {
        conversation.message.push(newMessage._id);
        await conversation.save();
      }
  
      res.status(200).json(newMessage);
    } catch (error) {
      console.log("Error in sendMessage", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message");

    if(!conversation)return res.status(200).json([])

        const messages= conversation.message

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  sendMessage,
  getMessage,
};
