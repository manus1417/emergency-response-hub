const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  incidents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Incidents",
    },
  ],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
