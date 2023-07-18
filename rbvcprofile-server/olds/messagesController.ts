// // const Messages = require("../models/Messages");
// // const messagesController = require("../models/Messages");
// // const Users = require("../models/Users");
// // const assyncHandler = require("express-async-handler");
// // import Users from "../models/Users";
// import { Request, Response, NextFunction } from "express";
// import { IMessage } from '../models/Messages';
// import {Messages} from "../models/Messages";
// import asyncHandler from "express-async-handler";

// // get all messages - Get - Private
// export const getMessages = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   const messages = await Messages.find().lean();
//   if (!messages?.length) {
//     res.status(400).json({ message: "you have no messages yet..." });
//   } else
//   {res.json(messages);}
// });

// //Create Message - Post - Private
// export const createMessage = asyncHandler(
//   async (req: Request, res: Response, next : NextFunction): Promise<void> => {
//     const { title, message } = req.body;

//     //has data?
//     if (!title || !message) {
//        res
//         .json(400)
//         .json({ message: "Missing the title or the message ..." });
//         return
//     }

//     const messageObject = {
//       title,
//       message,
//     };

//     //create and store an Message
//     const createNewMessage = await Messages.create(messageObject);

//     if (createNewMessage) {
//       res
//         .status(201)
//         .json({ message: `The message ${title}, has been created` });
//     } else {
//       res.status(400).json({ message: "Invalid data" }); // todo error handling
//     }
//   }
// );

// export const updateMessage = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     const { id, title, message } = req.body;

//     if (!id || !title || !message) {
//       res.status(400).json({ message: "All fields are required" });
//       return
//     }

//     const messageUpdate = await Messages.findById(id).exec();

//     if (!messageUpdate) {
//        res.status(400).json({ message: "Message dont exists" });
//        return
//     }

//     if (messageUpdate?._id.toString() !== id.toString()) {
//        res.status(409).json({ message: "The id cant be validated" });
//        return
//     }

//     (messageUpdate.title = title), (messageUpdate.message = message);

//     const updateMessageId = await messageUpdate.save();

//     res.json({
//       message: `The message ${updateMessageId.title} has been updated!`,
//     });
//   }
// );

// export const deleteMessage = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     const { id } = req.body;

//     if (!id) {
//        res
//         .status(400)
//         .json({ message: "The message id need to be given" });
//         return
//     }

//     const messageDelete = await Messages.findById(id.toString()).exec();
//     if (!messageDelete) {
//       res.status(400).json({ message: "Message not found" });
//     }

//     await messageDelete.deleteOne();

//     const reply = `Message ${messageDelete.title} with id ${messageDelete._id} has been deleted`;

//     res.json(reply);
//   }
// );
