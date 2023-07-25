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
      min: 3,
      max: 30
    },
    message: {
      type: String,
      required: true,
      min:3,
      max: 5000
    },
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model<IMessage>("Messages", messagesSchema);

export { Messages, messagesSchema };
