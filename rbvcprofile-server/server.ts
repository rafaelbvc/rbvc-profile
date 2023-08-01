import dotenv from "dotenv";
// require("express-async-errors");
import "express-async-errors";
import path from "path";
import express from "express";
import logger from "./middleware/logger";
import logEvents from "./middleware/logEvents";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import dbConnector from "./config/dbConnection";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes";
import { rootRouter } from "./routes/root";
import { messageRouter } from "./routes/messagesRoutes";
import { authRouter } from "./routes/authRoutes";

const PORT = process.env.PORT || 5030;

console.log(process.env.NODE_ENV);

dotenv.config();

const app = express();

dbConnector();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", () => rootRouter);
app.use("/auth", () => authRouter);
app.use("/users", () => userRoutes);
app.use("/messages", () => messageRouter);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
