import mongoose from "mongoose";
import { IUsers } from "./IUsers";

export interface IMessages extends mongoose.Document {
    user: IUsers,
    title: string,
    message: string,
    completed: boolean,
    created_at: Date,
    updated_at: Date
}