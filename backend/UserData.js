const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  amount: Number,
  experience: String,
  duration: String,
  sector: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserData", userSchema);
