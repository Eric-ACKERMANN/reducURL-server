const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/reducURL-server",
  {
    useNewURLParser: true
  }
);

/* MODELS */

const Url = require("./models/url-model");

/* ROUTES */

const urlRoutes = require("./routes/url-routes");
app.use(urlRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server has started");
});
