const mongooseMessages = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongooseMessages);

const messagesSchema = new mongooseMessages.Schema(
  {
    user: {
      type: mongooseMessages.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

messagesSchema.plugin(AutoIncrement, {
  inc_field: "messagesSeq",
  id: "messagessId",
  start_seq: 500,
});

module.exports = mongooseMessages.model("Messages", messagesSchema);
