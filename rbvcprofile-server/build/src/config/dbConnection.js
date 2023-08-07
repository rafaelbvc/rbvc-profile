"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnector = async (connectionString) => {
    try {
        await mongoose_1.default.connect(connectionString);
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = dbConnector;
// import mongoose from "mongoose";
// const dbConnector = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URI);
//   } catch (err) {
//     console.log(err);
//   }
// };
// export default dbConnector;
