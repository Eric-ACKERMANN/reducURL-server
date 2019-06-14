const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());

mongoose.connect(
  PROCESS.ENV.MONGODB_URI || "mongodb://localhost:27017/reducURL-server",
  {
    useNewURLParser: true
  }
);

/* MODELS */

const Url = require("./models/url-model");

/* ROUTES */

const urlRoutes = require("./routes/url-routes");
app.use(urlRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server has started");
});
