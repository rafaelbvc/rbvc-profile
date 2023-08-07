"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logEvents_1 = __importDefault(require("./logEvents"));
const logger = (req, res, next) => {
    (0, logEvents_1.default)(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
    console.log(`${req.method} ${req.logEvents}`);
    next();
};
exports.default = logger;
