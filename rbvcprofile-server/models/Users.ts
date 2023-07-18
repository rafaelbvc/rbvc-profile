import mongoose from "mongoose";
const { Schema } = mongoose;
const messagesSchema = require("./Messages.ts").schema;

type TMessagesSchema = {
  // user: ObjectId,
  title: String,
  message: String,
  completed: Boolean
  timestamps: {
    createdAt: Date,
    updatedAt: Date,
  } 
}

const usersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    messages: { type: [messagesSchema] },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

// // const mongooseUsers = require("mongoose");
// import mongoose, { Schema } from "mongoose";
// import { IUsers } from "../interfaces/IUsers";

// // const UsersSchema = new mongoose.Schema()
// const UsersSchema = new Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: false,
//     },
//     password: {
//       type: String,
//       required: false,
//     },
//     messages: [
//       {
//         type: String,
//         default: "Messages",
//       },
//     ],
//     active: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default  mongoose.model<IUsers>("Users", UsersSchema);
// // export default Users;
// // module.exports = mongoose.model("Users", UsersSchema);
