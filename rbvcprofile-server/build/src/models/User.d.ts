import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & Omit<IUser & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default User;
