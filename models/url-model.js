const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  initialURL: String,
  shortURL: String,
  views: Number,
  extension: String
});

module.exports = Url;
