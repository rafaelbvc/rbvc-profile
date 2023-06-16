const mongooseUsers = require("mongoose");

const usersSchema = new mongooseUsers.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
        type: String,
        required: false,
      },
    messages: [
      {
        type: String,
        default: "Messages",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongooseUsers.model("Users", usersSchema);
