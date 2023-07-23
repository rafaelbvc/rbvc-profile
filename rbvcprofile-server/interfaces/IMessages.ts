import { Document } from "mongoose";

export interface IMessage extends Document {
  user_id: string,
  title: string;
  message: string;
}
