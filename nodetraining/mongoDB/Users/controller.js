const express = require("express");
const mongoose = require("mongoose");
const User = require("./DB/model");
const route = express.Router();

route.post("/", async (req, res) => {
  console.log("tessss");
});

module.exports = route;
