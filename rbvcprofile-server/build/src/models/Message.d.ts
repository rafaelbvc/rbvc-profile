import mongoose from "mongoose";
import { IMessage } from "../interfaces/IMessage";
declare const messageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    title?: string;
    message?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    title?: string;
    message?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: mongoose.Types.ObjectId;
    title?: string;
    message?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
declare const Message: mongoose.Model<IMessage, {}, {}, {}, mongoose.Document<unknown, {}, IMessage> & Omit<IMessage & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export { Message, messageSchema };
