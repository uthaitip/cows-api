const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  // created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", UsersSchema);
