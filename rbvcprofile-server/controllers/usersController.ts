const Users = require("../models/Users");
// import {Users} from "../models/Users"
const messagesController = require("../models/Messages");
const bcrypt = require("bcrypt");
const assyncHandler = require("express-async-handler");

// import bcrypt from "bcrypt";

// get All Users - Get - Private
export const getUsers = assyncHandler(async (req, res) => {
  const users = await Users.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users found!" });
  }
  res.json(users);
});

// create User - Post - Private
export const createUser = assyncHandler(async (req, res) => {
  const { firstName, lastName, password, email, phone } = req.body;

  // has data?
  if (!firstName || !lastName || !password || !email) {
    return res
      .status(400)
      .json({ message: "All required fileds need to be filled" });
  }

  // duplicate data?
  const duplicate = await Users.findOne({ email }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Email already registered" });
  }

  // bcrypt password
  const hashedPassword = await bcrypt.hash(password, 10); //salt rounds
  const userObject = {
    firstName,
    lastName,
    password: hashedPassword,
    email,
    phone,
  };

  // create and store an User
  const user = await Users.create(userObject);
  if (user) {
    res.status(201).json({
      message: `User ${firstName} ${lastName}, has been created`,
    });
  } else {
    res.status(400).json({ message: "Invalid data" }); //to:do error handling!
  }
});

// upadte a User - Patch - Private
export const updateUser = assyncHandler(async (req, res) => {
  const { id, firstName, lastName, email, phone, password, messages, active} =
    req.body;

  // check data
  // has data?
  // !email ||
  // !password ||
  if (!id || !firstName || !lastName || !email || typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "All required fields need to be filled" });
  }


  const userUpdate = await Users.findById(id).exec();
  console.log(userUpdate, "essabudega")

  if (!userUpdate) {
    return res.status(400).json({ massage: "User not found" }); //to:do error handling!
  }

  // duplicate data?
  // const duplicatedUpdate = await UsersController.findOne({ email })
  //   .lean()
  //   .exec();
  const duplicatedUpdate = await Users.findOne({ email }).lean().exec();
  // allow update for same id //.toString()
  if (duplicatedUpdate && duplicatedUpdate?._id.toString() === id.toString()) {
    return res.status(409).json({ message: "Duplicated email" });
  }

  (userUpdate.firstName = firstName),
  (userUpdate.lastName = lastName),
  (userUpdate.email = email),
  (userUpdate.phone = phone),
  (userUpdate.messages = messages),
  (userUpdate.active = active);

  if (password) {
    //hash password
    userUpdate.password = await bcrypt.hash(password, 10); //salt rounds
  }

  const updateUserId = await userUpdate.save()
  // console.log(userUpdate.password, "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
  // const updatedUser = await userUpdate;
  // const updateUserId =  updatedUser();
  // console.log(updateUserId, "fffffffffffffffffffffffffffffffffffffff");
  // await updateUserId.save();
  // await UsersController.save();

  res.json({
    message: `${updateUserId.firstName} ${updateUserId.lastName} has been updated!`,
  });

  //   const updatedObject = {
  //     firstName,
  //     lastName,
  //     email,
  //     password: hashedPasswordUpdate,
  //   };
});

// delete a User - Delete - Private
export const deleteUser = assyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User informations required." });
  }

  // const messageDelete = await messagesController.findById(id.toString()).exec();
  // if (messageDelete?.lenght) {
  //   return res.status(400).json({ message: "User has messages" });
  // }

  const userDelete = await Users.findById(id.toString()).exec();
  if (!userDelete) {
    res.status(400).json({ message: "User not found" });
  }

  const result = await userDelete.deleteOne();

  const reply = `User ${result.firstName} ${result.lastName} with ID ${result._id} deleted`;

  res.json(reply);
});

// module.exports = {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
// };
