import { mongoose } from "../server";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const notesSchema = new mongoose.Schema(
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

notesSchema.plugin(AutoIncrement, {
  inc_field: "notesSeq",
  id: "notesId",
  start_seq: 500,
});

exports.module = mongoose.module("Notes", notesSchema);
