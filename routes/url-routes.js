const express = require("express");
const router = express.Router();
const Url = require("../models/url-model");

/* CREATE */

router.post("/url/create", async (req, res) => {
  try {
    if (req.body) {
      const newURL = new Url({
        initialURL: req.body.initialURL,
        shortURL: req.body.shortURL,
        views: 0
      });
      await newURL.save();
      return res.status(200).json(newURL);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

/* READ */

router.get("/url", async (req, res) => {
  try {
    const url = await Url.find();
    return res.status(200).json(url);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

/* UPDATE */

router.post("/url/update", async (req, res) => {
  try {
    if (req.body) {
      const modifiedUrl = req.body.url;
      console.log("modifiedURL", modifiedUrl);
      const url = await Url.findById(req.body.id);
      console.log("url", url);
      const modifiedKey = Object.keys(modifiedUrl);
      console.log("modifiedKey", modifiedKey);

      for (i = 0; i < modifiedKey.length; i++) {
        url[modifiedKey[i]] = modifiedUrl[modifiedKey[i]];
      }
    }
    console.log("Hey");
    console.log("url after", url);
    await url.save();
    return res.status(200).json("Url successfully updated");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

/* DELETE */

// Road used in production only

router.post("/url/delete", async (req, res) => {
  try {
    if (req.body) {
      await Url.findOneAndRemove({ _id: req.body.id });
      return res.status(200).json("Url successfully deleted");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
