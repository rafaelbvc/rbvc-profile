import Users from "../models/Users";
import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import { Response, Request } from "express";

// get All Users - Get - Private
export const getUsers = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const users = await Users.find().select("-password").lean();
    if (!users?.length) {
      res.status(400).json({ message: "No users found!" });
      return;
    }
    res.json(users);
  }
);

// create User - Post - Private
export const createUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, password, email, phone } = req.body;

    // has data?
    if (!firstName || !lastName || !password || !email) {
      res
        .status(400)
        .json({ message: "All required fileds need to be filled" });
      return;
    }

    // duplicate data?
    const duplicate = await Users.findOne({ email }).lean().exec();
    if (duplicate) {
      res.status(409).json({ message: "Email already registered" });
      return;
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
      res.status(400).json({ message: "Invalid data" }); 
      return //to:do error handling!
    }
  }
);

// upadte a User - Patch - Private
export const updateUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      password,
      active,
    } = req.body;

    // check data
    // has data?

    if (!id || !firstName || !lastName || !email) {
      res
        .status(400)
        .json({ message: "All required fields need to be filled" });
      return;
    }

    const userUpdate = await Users.findById(id).exec();

    if (!userUpdate) {
      res.status(400).json({ massage: "User not found" }); //to:do error handling!
      return;
    }
    //409

    // duplicate data?

    const duplicatedUpdate = await Users.findOne({ email }).lean().exec();
    // allow update for same id
    if (
      duplicatedUpdate &&
      duplicatedUpdate?._id.toString() !== id.toString()
    ) {
      res.status(409).json({ message: "Duplicated email" });
      return;
    }

    (userUpdate.firstName = firstName),
      (userUpdate.lastName = lastName),
      (userUpdate.email = email),
      (userUpdate.phone = phone),
      (userUpdate.active = active);

    if (password) {
      //hash password
      userUpdate.password = await bcrypt.hash(password, 10); //salt rounds
    }

    const updateUserId = await userUpdate.save();

    res.json({
      message: `${updateUserId.firstName} ${updateUserId.lastName} has been updated!`,
    });
  }
);

// delete a User - Delete - Private
export const deleteUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    if (!id) {
      res.status(400).json({ message: "User informations required." });
      return;
    }

    const userDelete = await Users.findById(id.toString()).exec();
    if (!userDelete) {
      res.status(400).json({ message: "User not found" });
      return
    }

    const result = await userDelete.deleteOne();

    const reply = `User ${result.firstName} ${result.lastName} with ID ${result._id} deleted`;

    res.json(reply);
  }
);
