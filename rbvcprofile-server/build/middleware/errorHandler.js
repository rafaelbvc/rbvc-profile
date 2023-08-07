"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logEvents_1 = __importDefault(require("./logEvents"));
const errorHandler = (err, req, res, next) => {
    (0, logEvents_1.default)(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "errLog.log");
    console.log(err.stack);
    const status = res.statusCode ? res.statuscode : 500;
    res.status(status);
    res.json({ message: err.message });
};
exports.default = errorHandler;
