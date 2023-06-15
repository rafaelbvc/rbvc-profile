const mongooseMessages = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);

const messagesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
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

exports.module = mongooseMessages.module("Messages", messagesSchema);
