const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: false
    }
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
