import { Document, ObjectId } from "mongoose";

export interface IMessage extends Document {
  user: ObjectId;
  title: string;
  message: string;
}
