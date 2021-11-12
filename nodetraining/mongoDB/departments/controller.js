const express = require("express");
const mongoose = require("mongoose");
const User = require("./DB/model");
const route = express.Router();

route.post("/", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    department: req.body.department,
  });
  try {
    const add = await user.save();
    res.json(add);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = route;
