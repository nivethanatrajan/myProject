const express = require("express");
const User = require("../models/users");

const postUser = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department.dep_id,
    email: req.body.email,
  });

  console.log(user.department, "test");

  try {
    const add = await user.save();
    res.json(add);
  } catch (err) {
    res.send("Error" + err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send("Error" + err);
  }
};

module.exports = (user) => {
  user.post("/postuser", postUser);
  user.get("/getuser", getUser);
};
