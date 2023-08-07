"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middleware/logger"));
const logEvents_1 = __importDefault(require("./middleware/logEvents"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = require("./routes/userRoutes");
const root_1 = require("./routes/root");
const messagesRoutes_1 = require("./routes/messagesRoutes");
const authRoutes_1 = require("./routes/authRoutes");
const PORT_DEV = process.env.PORT_DEV ? Number(process.env.PORT_DEV) : 5090;
console.log(PORT_DEV);
dotenv_1.default.config({ path: ".env" });
const app = (0, express_1.default)();
//process.env.DATABASE_URI_PROD
(0, dbConnection_1.default)(process.env.DATABASE_URI_PROD);
app.use(logger_1.default);
app.use((0, cors_1.default)(corsOptions_1.default));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/", express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/", root_1.rootRouter);
app.use("/auth", authRoutes_1.authRouter);
app.use("/users", userRoutes_1.userRouter);
app.use("/messages", messagesRoutes_1.messageRouter);
app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path_1.default.join(__dirname, "views", "404.html"));
    }
    else if (req.accepts("json")) {
        res.json({ message: "404 Not Found" });
    }
    else {
        res.type("txt").send("404 Not Found");
    }
});
app.use(errorHandler_1.default);
mongoose_1.default.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT_DEV, () => console.log(`Server running on port ${PORT_DEV}`));
});
mongoose_1.default.connection.on("error", (err) => {
    console.log(err);
    (0, logEvents_1.default)(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, "mongoErrLog.log");
});
