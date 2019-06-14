const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  initialURL: String,
  shortURL: String,
  views: Number
});

module.exports = Url;
