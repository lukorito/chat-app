const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  message: {
    type: String,
    required: true
  },
  createdAt: Date,
  read: {
    type: Boolean,
    default: null
  },
  threadId: {
    type: Schema.Types.ObjectId,
    ref: "Thread"
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
