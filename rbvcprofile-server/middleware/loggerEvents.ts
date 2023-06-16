const pathLogger = require("path")
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(pathLogger.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(pathLogger.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      pathLogger.join(__dirname, "..", "logs", logFileName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

// const logger = (req, res, next) => {
//   logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
//   console.log(`${req.method} ${req.pathLogger}`);
//   next();
// };

module.exports =  logEvents;
