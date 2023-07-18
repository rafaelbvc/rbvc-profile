import { Document } from "mongoose";

export interface IMessage extends Document {
  title?: string;
  message?: string;
}
