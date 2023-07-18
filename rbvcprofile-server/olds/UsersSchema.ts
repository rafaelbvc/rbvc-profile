// import mongoose, {  Schema, Document } from "mongoose"
// // import { IMessage } from "./Messages"

// // import mongoose from "mongoose";
// // const { Schema } = mongoose;
// // const messagesSchema = require("./Messages");

// interface IUser extends Document {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone?: string;
//   password: string;
// //   messages?: IMessage[];
//   active: boolean;
// }

// const usersSchema = new Schema(
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
//       unique: true,
//     },
//     phone: {
//       type: String,
//       required: false,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     messages: [{ type: Schema.Types.ObjectId, ref: "Messages" }],

//     active: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Users = mongoose.model<IUser>("Users", usersSchema);

// export default Users;

// // // const mongooseUsers = require("mongoose");
// // import mongoose, { Schema } from "mongoose";
// // import { IUsers } from "../interfaces/IUsers";

// // // const UsersSchema = new mongoose.Schema()
// // const UsersSchema = new Schema(
// //   {
// //     firstName: {
// //       type: String,
// //       required: true,
// //     },
// //     lastName: {
// //       type: String,
// //       required: true,
// //     },
// //     email: {
// //       type: String,
// //       required: true,
// //     },
// //     phone: {
// //       type: String,
// //       required: false,
// //     },
// //     password: {
// //       type: String,
// //       required: false,
// //     },
// //     messages: [
// //       {
// //         type: String,
// //         default: "Messages",
// //       },
// //     ],
// //     active: {
// //       type: Boolean,
// //       default: true,
// //     },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // export default  mongoose.model<IUsers>("Users", UsersSchema);
// // // export default Users;
// // // module.exports = mongoose.model("Users", UsersSchema);
