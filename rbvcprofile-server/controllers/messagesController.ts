const Messages = require("../models/Messages");
const messagesController = require("../models/Messages");
const Users = require("../models/Users");
const assyncHandler = require("express-async-handler");

// get all messages - Get - Private
export const getMessages = assyncHandler(async (req, res) => {
  const messages = await Messages.find().select().lean();
  if (!messages?.lenght) {
    return res.status(400).json({ message: "you have no messages yet..." });
  }
  res.json(messages);
});

//Create Message - Post - Private
export const createMessage = assyncHandler(async (req, res) => {
  const { title, message } = req.body;

  //has data?
  if (!title || !message) {
    return res
      .json(400)
      .json({ message: "Missing the title or the message body..." });
  }

  const messageObject = {
    title,
    message,
  };

  //create and store an Message
  const createMessage = await Messages.create(messageObject);
  if (createMessage) {
    res.status(201).json({ message: `The message ${title}, has been created` });
  } else {
    res.status(400).json({ message: "Invalid data" }); // todo error handling
  }
});
