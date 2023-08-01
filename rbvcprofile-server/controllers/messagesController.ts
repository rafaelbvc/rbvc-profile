import User from "../models/User";
import  {Message}  from "../models/Message";

// @access Private // @route GET /notes // @desc Get all notes
export const getAllMessages = async (req, res) => {
  // Get all notes from MongoDB
  const messages = await Message.find().lean();

  // If no notes
  if (!messages?.length) {
    return res.status(400).json({ message: "No notes found" });
  }

  // Add username to each note before sending the response
  const notesWithUser = await Promise.all(
    messages.map(async (messages) => {
      const user = await User.findById(messages.user).lean().exec();
      return {
        ...messages,
        firstName: user.firstName,
        lastName: user.lastName,
      };
    })
  );

  res.json(notesWithUser);
};

// @access Private // @route POST /notes // @desc Create new note
export const createNewMessages = async (req, res) => {
  const { user, title, message } = req.body;

  // Confirm data
  if (!user || !title || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate title
  const duplicate = await Message.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate note title" });
  }

  // Create and store the new user
  const messages = await Message.create({ user, title, message });

  if (messages) {
    // Created
    return res.status(201).json({ message: "New note created" });
  } else {
    return res.status(400).json({ message: "Invalid note data received" });
  }
};

// @access Private // @route PATCH /notes // @desc Update a note
export const updateMessage = async (req, res) => {
  const { id, user, title, message } = req.body;

  // Confirm data
  if (!id || !user || !title || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm note exists to update
  const messages = await Message.findById(id).exec();

  if (!messages) {
    return res.status(400).json({ message: "Note not found" });
  }

  // Check for duplicate title
  const duplicate = await Message.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  // Allow renaming of the original note
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate note title" });
  }

  message.user = user;
  message.title = title;
  message.message = message;

  const updatedNote = await message.save();

  res.json(`'${updatedNote.title}' updated`);
};

// @access Private // @route DELETE /notes // @desc Delete a note
export const deleteMessage = async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Note ID required" });
  }

  // Confirm note exists to delete
  const message = await Message.findById(id).exec();

  if (!message) {
    return res.status(400).json({ message: "Note not found" });
  }

  const result = await message.deleteOne();

  const reply = `Note '${result.title}' with ID ${result._id} deleted`;

  res.json(reply);
};
