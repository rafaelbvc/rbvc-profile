const loggerPath = require("path")
const logLoggerEvents = require("./loggerEvents")


const logger = (req, res, next) => {
    logLoggerEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
  console.log(`${req.method} ${req.logLoggerEvents}`);
  next();
};

module.exports = logger