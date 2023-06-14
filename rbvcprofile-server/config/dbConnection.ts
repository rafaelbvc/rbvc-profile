const mongoose = require("mongoose");

const dbConnector = async () => {
  try {
    await mongoose.connect(
      "mongodb://rbvcprofile:r4f431@localhost:27017/?authSource=admin"
    );
    //process.env.DATABASE_URI
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnector;
