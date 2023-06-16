require("dotenv").config();
const express = require("express");
const server = express();
const path = require("path");
const errorHandlerServer = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptionsServer = require("./config/corsOptions");
const dbConnectorMongo = require("./config/dbConnection");
const mongoose = require("mongoose");
const  logEventsServer  = require("./middleware/loggerEvents");
const  loggerServer  = require("./middleware/logger");
const PORT = process.env.PORT || 5030;

console.log(process.env.NODE_ENV);

dbConnectorMongo();


server.use(loggerServer);

server.use(cors(corsOptionsServer));

server.use(express.json());

server.use(cookieParser());

server.use("/", express.static(path.join(__dirname, "public")));

server.use("/", require("./routes/root"));
server.use("/users", require("./routes/userRoutes"))

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

server.use(errorHandlerServer);

mongoose.connection.once("open", () => {
  console.log("Mongo Container Connected");
  server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEventsServer(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
