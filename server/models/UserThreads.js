const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userThreadsSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },
  threads: [
      {
          type: Schema.Types.ObjectId,
          ref: "Thread"
      }
  ]
});

const Thread = mongoose.model("UserThreads", userThreadsSchema);

module.exports = Thread;
