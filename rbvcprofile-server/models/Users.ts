import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUsers";


const usersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 14
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
      min: 7,
      max:14
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 20
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


const Users = mongoose.model<IUser>("Users", usersSchema);

export default Users;
