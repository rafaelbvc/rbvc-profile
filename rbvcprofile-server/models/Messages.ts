// const mongooseMessages = require("mongoose")
import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const messagesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

messagesSchema.plugin(AutoIncrement, {
  inc_field: "messagesSeq",
  id: "messagessId",
  start_seq: 500,
});

module.exports = mongoose.model("Messages", messagesSchema);



// import mongoose, { Schema } from "mongoose";
// import Inc from "mongoose-sequence"
// import Users from "./Users"
// import { IMessages } from "../interfaces/IMessages";

// // const AutoIncrement = require("mongoose-sequence")(Inc)


// // const MessagesSchema = new mongoose.Schema(
//   const MessagesSchema = new Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "Users",
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     message: {
//       type: String,
//       required: true,
//     },
//     completed: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const AutoIncrement = Inc(Users)

// MessagesSchema.plugin(AutoIncrement, {
//   inc_field: "messagesSeq",
//   id: "messagessId",
//   start_seq: 500,
// });

// // module.exports = mongoose.model("Messages", MessagesSchema);

// const Messages = mongoose.model<IMessages>("Messages", MessagesSchema)
// export default Messages