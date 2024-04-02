const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("skole123", Schema);
