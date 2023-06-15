const { logEventsError } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logEventsError(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statuscode : 500;

  res.status(status);

  res.json({ message: err.message });
};

module.exports = errorHandler;
