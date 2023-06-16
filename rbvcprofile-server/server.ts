import dotenv from "dotenv";
import express from "express";
import path from "path";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import dbConnector from "./config/dbConnection";
import mongoose from "mongoose";
import logEvents from "./middleware/loggerEvents";
import logger from "./middleware/logger";

dotenv.config();

const server = express();

const PORT = process.env.PORT || 5030;

console.log(process.env.NODE_ENV);

dbConnector();

server.use(logger);

server.use(cors(corsOptions));

server.use(express.json());

server.use(cookieParser());

server.use("/", express.static(path.join(__dirname, "public")));

server.use("/", require("./routes/root"));
server.use("/users", require("./routes/userRoutes"));

server.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 resource not found" });
  } else {
    res.type("text").send("404 resource not found");
  }
});

server.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Mongo Container Connected");
  server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
