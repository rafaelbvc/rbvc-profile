"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.createNewMessages = exports.getAllMessages = void 0;
const User_1 = __importDefault(require("../models/User"));
const Message_1 = require("../models/Message");
// @access Private // @route GET /messages // @desc Get all messages
const getAllMessages = async (req, res) => {
    // Get all messages from MongoDB
    const messages = await Message_1.Message.find().lean();
    // If no messages
    if (!messages?.length) {
        return res.status(400).json({ message: "No messages found" });
    }
    // Add username to each message before sending the response
    const messagesWithUser = await Promise.all(messages.map(async (messages) => {
        const user = await User_1.default.findById(messages.user).lean().exec();
        return {
            ...messages,
            firstName: user.firstName,
            lastName: user.lastName,
        };
    }));
    res.json(messagesWithUser);
};
exports.getAllMessages = getAllMessages;
// @access Private // @route POST /messages // @desc Create new messages
const createNewMessages = async (req, res) => {
    const { user, title, message } = req.body;
    // console.log(user, title, message);
    // Confirm data
    if (!user || !title || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }
    //Check for duplicate title
    const duplicate = await Message_1.Message.findOne({ title })
        .collation({ locale: "en", strength: 2 })
        .lean()
        .exec();
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate message title" });
    }
    // Create and store the new user
    const messages = await Message_1.Message.create({ user, title, message });
    console.log(messages, "messages");
    if (messages) {
        // Created
        return res.status(201).json({ message: "New message created" });
    }
    else {
        return res.status(400).json({ message: "Invalid message data received" });
    }
};
exports.createNewMessages = createNewMessages;
// @access Private // @route PATCH /messages // @desc Update a message
const updateMessage = async (req, res) => {
    const { id, user, title, message } = req.body;
    // Confirm data
    if (!id || !user || !title || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }
    // Confirm messages exists to update
    const messages = await Message_1.Message.findById(id).exec();
    if (!messages) {
        return res.status(400).json({ message: "Message not found" });
    }
    // Check for duplicate title
    const duplicate = await Message_1.Message.findOne({ title })
        .collation({ locale: "en", strength: 2 })
        .lean()
        .exec();
    // Allow renaming of the original messages
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: "Duplicate message title" });
    }
    messages.title = title;
    messages.message = message;
    const updatedMessage = await messages.save();
    res.json(`'${updatedMessage.title}' updated`);
};
exports.updateMessage = updateMessage;
// @access Private // @route DELETE /message // @desc Delete a message
const deleteMessage = async (req, res) => {
    const { id } = req.body;
    // Confirm data
    if (!id) {
        return res.status(400).json({ message: "Message ID required" });
    }
    // Confirm messages exists to delete
    const message = await Message_1.Message.findById(id).exec();
    if (!message) {
        return res.status(400).json({ message: "Message not found" });
    }
    const result = await message.deleteOne();
    const reply = `Message '${result.title}' with ID ${result._id} deleted`;
    res.json(reply);
};
exports.deleteMessage = deleteMessage;
