"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = exports.Message = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// import Inc from "mongoose-sequence";
// //@ts-ignore
// const AutoIncrement = Inc(mongoose);
const messageSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: false,
        min: 3,
        max: 30,
    },
    message: {
        type: String,
        required: false,
        min: 3,
        max: 5000,
    },
}, {
    timestamps: true,
});
exports.messageSchema = messageSchema;
// // @ts-ignore
// messageSchema.plugin(AutoIncrement, {
//   inc_field: "messageId",
//   id: "MessageNums",
//   start_seq: 500,
// });
const Message = mongoose_1.default.model("Message", messageSchema);
exports.Message = Message;
