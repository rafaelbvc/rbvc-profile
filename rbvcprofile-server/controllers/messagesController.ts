const Messages = require("../models/Messages");

// const messagesController = require("../models/Messages");
const Users = require("../models/Users");
const assyncHandler = require("express-async-handler");

// get all messages - Get - Private
export const getMessages = assyncHandler(async (req, res) => {
  const messages = await Messages.find().select().lean();
  if (!messages?.length) {
    return res.status(400).json({ message: "you have no messages yet..." });
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

  //create and store an Message
  const createNewMessage = await Messages.create(messageObject);

  if (createNewMessage) {
    res.status(201).json({ message: `The message ${title}, has been created` });
  } else {
    res.status(400).json({ message: "Invalid data" }); // todo error handling
  }
});

export const updateMessage = assyncHandler(async (req, res) => {
  const { id, title, message } = req.body;

  if (!id || !title || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const messageUpdate = await Messages.findById(id).exec();

  if (!messageUpdate) {
    return res.status(400).json({ message: "Message dont exists" });
  }

  if (messageUpdate?._id.toString() !== id.toString()) {
    return res.status(409).json({ message: "The id cant be validated" });
  }

  (messageUpdate.title = title), (messageUpdate.message = message);

  const updateMessageId = await messageUpdate.save();

  res.json({
    message: `The message ${updateMessageId.title} has been updated!`,
  });
});

export const deleteMessage = assyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "The message id need to be given" });
  }

  const messageDelete = await Messages.findById(id.toString()).exec();
  if (!messageDelete) {
    res.status(400).json({ message: "Message not found" });
  }

  const result = await messageDelete.deleteOne();

  const reply = `Message ${result.title} with id ${result._id} has been deleted`;

  res.json(reply);
});
