const Messages = require("../models/Messages");

// const messagesController = require("../models/Messages");
const Users = require("../models/Users");
const assyncHandler = require("express-async-handler");

// get all messages - Get - Private
export const getMessages = assyncHandler(async (req, res) => {
  const messages = await Messages.find().select().lean();
  console.log(messages.length, "EUEUEEUEUEU")
  if (!messages?.length) {
    return res.status(400).json({ message: "you have no messages yet..." })
  }
  res.json(messages);
});

//Create Message - Post - Private
export const createMessage = assyncHandler(async (req, res) => {
  const { title, message } = req.body;

  console.log(req.body, "createMessage");

  //has data?
  if (!title || !message) {
    return res
      .json(400)
      .json({ message: "Missing the title or the message ..." });
  }

  const messageObject = {
    title,
    message,
  };

  console.log(messageObject, "bcreatemessage");

  //create and store an Message
  const createNewMessage = await Messages.create(messageObject);

  console.log(createNewMessage, "createmessage");

  if (createNewMessage) {
    res.status(201).json({ message: `The message ${title}, has been created` });
  } else {
    res.status(400).json({ message: "Invalid data" }); // todo error handling
  }
});
