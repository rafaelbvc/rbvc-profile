"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const date_fns_1 = require("date-fns");
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const fs_2 = require("fs");
const logEvents = async (message, logFileName) => {
    const dateTime = `${(0, date_fns_1.format)(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${(0, uuid_1.v4)()}\t${message}\n`;
    try {
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, "..", "logs"))) {
            await fs_2.promises.mkdir(path_1.default.join(__dirname, "..", "logs"));
        }
        await fs_2.promises.appendFile(path_1.default.join(__dirname, "..", "logs", logFileName), logItem);
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = logEvents;
