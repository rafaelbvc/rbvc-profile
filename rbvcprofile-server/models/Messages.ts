import mongoose, { Schema } from "mongoose";
import { IMessage } from "../interfaces/IMessages";

const messagesSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model<IMessage>("Messages", messagesSchema);

export { Messages, messagesSchema };
