import mongoose from "mongoose"

export interface IUsers extends mongoose.Document {
    firstName: string,
    lastName: string,
    email: string,
    phone?: string,
    password: string,
    messages?: [],
    active: boolean,
    created_at: Date,
    updated_at: Date
}