import { Request, Response } from "express";

import { Messages } from "../models/Messages";
import asyncHandler from "express-async-handler";
import Users from "../models/Users";

// get all messages - Get - Private
export const getMessages = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const messages = await Messages.find().lean();
    if (!messages?.length) {
      res.status(400).json({ message: "No messages found..." });
    }


    // messages by user
    const userMessages = await Promise.all(
      messages.map(async (message) => {
        const user = await Users.findById(message.user).lean().exec();
        return {
          ...message,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      })
    );

    res.json(userMessages);
  }
);

//Create Message - Post - Private
export const createMessage = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { title, message, user } = req.body;

    //has data?
    if (!title || !message || !user) {
      res.status(400).json({ message: "Missing title or message ..." });
      return;
    }

    const userById = await Users.findById(user).exec();
    if (!userById || userById._id.toString() !== user.toString()) {
      res
        .status(405)
        .json({ message: "Creating messages is for registered members only" });
    }

    const messageObject = {
      user,
      title,
      message,
    };

    //create and store an Message
    const createNewMessage = await Messages.create(messageObject);

    if (createNewMessage) {
      res
        .status(201)
        .json({ message: `The message ${title}, has been created` });
    } else {
      res.status(400).json({ message: "Invalid data" }); // todo error handling
    }
  }
);

export const updateMessage = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id, title, message, user } = req.body;

    if (!id || !title || !message || !user) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const messageUpdate = await Messages.findById(id).exec();
    const userById = await Users.findById(user).exec();
    if (!messageUpdate || !userById) {
      res.status(400).json({ message: "The message or user does not exist" });
      return;
    }

    if (messageUpdate?._id.toString() !== id.toString()) {
      res.status(409).json({ message: "Message cannot be validated" });
      return;
    }

    (messageUpdate.title = title), (messageUpdate.message = message);

    const updateMessageId = await messageUpdate.save();

    res.json({
      message: `The message ${updateMessageId.title} has been updated!`,
    });
  }
);

export const deleteMessage = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    if (!id) {
      res.status(400).json({ message: "Please provide message index" });
      return;
    }

    const messageDelete = await Messages.findById(id.toString()).exec();
    if (!messageDelete) {
      res.status(400).json({ message: "Message not found" });
    }

    await messageDelete.deleteOne();

    const reply = `Message ${messageDelete.title} with id ${messageDelete._id} has been deleted`;

    res.json(reply);
  }
);
