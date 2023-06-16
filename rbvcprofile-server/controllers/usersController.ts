const usersController = require("../models/Users");
const messagesController = require("../models/Messages");
const bcryptUsers = require("bcrypt");
const assyncHandlerUsers = require("express-async-handler");

// get All Users - Get - Private
const getUsersController = assyncHandlerUsers(async (req, res) => {
  const users = await usersController.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users found!" });
  }
  res.json(users);
});

// create User - Post - Private
const createUserController = assyncHandlerUsers(async (req, res) => {
  const { firstName, lastName, password, email, phone } = req.body;

  // has data?
  if (!firstName || !lastName || !password || !email) {
    return res
      .status(400)
      .json({ message: "All required fileds need to be filled" });
  }

  // duplicate data?
  const duplicate = await usersController.findOne({ email }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Email already registered" });
  }

  // bcrypt password
  const hashedPassword = await bcryptUsers.hash(password, 10); //salt rounds
  const userObject = {
    firstName,
    lastName,
    password: hashedPassword,
    email,
    phone,
  };

  // create and store an User
  const user = await usersController.create(userObject);
  if (user) {
    res.status(201).json({
      message: `User ${firstName} ${lastName}, has been created`,
    });
  } else {
    res.status(400).json({ message: "Invalid data" }); //to:do error handling!
  }
});

// upadte a User - Patch - Private
const updateUserController = assyncHandlerUsers(async (req, res) => {
  const { id, firstName, lastName, email, phone, password, active } = req.body;

  // check data
  // has data?
  // !email ||
  // !password ||
  if (!id || !firstName || !lastName || typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "All required fileds need to be filled" });
  }

  const userUpdate = await usersController.findById(id).exec();

  if (!userUpdate) {
    return res.status(400).json({ massage: "User not found" }); //to:do error handling!
  }

  // duplicate data?
  const duplicatedUpdate = await usersController
    .findOne({ email })
    .lean()
    .exec();
  // allow update for same id
  if (duplicatedUpdate && duplicatedUpdate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicated email" });
  }

  (usersController.firstName = firstName),
    (usersController.lastName = lastName),
    (usersController.email = email),
    (usersController.phone = phone),
    (usersController.active = active);

  if (password) {
    //hash password
    usersController.password = await bcryptUsers.hash(password, 10); //salt rounds
  }

  const updateUser = await usersController.save();

  res.json({
    message: `${updateUser.firstName} ${updateUser.lastName} has been updated!`,
  });

  //   const updatedObject = {
  //     firstName,
  //     lastName,
  //     email,
  //     password: hashedPasswordUpdate,
  //   };
});

// delete a User - Delete - Private
const deleteUserController = assyncHandlerUsers(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User informations required." });
  }

  const messageDelete = await messagesController.findById(id).exec();
  if (messageDelete?.lenght) {
    return res.status(400).json({ message: "User has messages" });
  }

  const userDelete = await messagesController.findById(id).exec();
  if (!userDelete) {
    res.status(400).json({ message: "User not found" });
  }

  const result = await usersController.deleteOne();

  const reply = `User ${result.firstName} ${result.lastName} with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getUsersController,
  createUserController,
  updateUserController,
  deleteUserController,
};
