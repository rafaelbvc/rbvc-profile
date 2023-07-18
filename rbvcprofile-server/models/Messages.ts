import mongoose, { Schema } from "mongoose";
import { IMessage } from "../interfaces/IMessages";

const messagesSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    title: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model<IMessage>("Messages", messagesSchema);

export { Messages, messagesSchema };
