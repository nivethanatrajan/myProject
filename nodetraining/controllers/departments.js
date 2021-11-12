const express = require("express");
const User = require("../models/departments");

const postDept = async (req, res) => {
  const user = new User({
    dep_id: req.body.dep_id,
    name: req.body.name,
  });
  try {
    const add = await user.save();
    res.json(add);
  } catch (err) {
    res.send("Error" + err);
  }
};

const getDept = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send("Error" + err);
  }
};

module.exports = (user) => {
  user.post("/postdept", postDept);
  user.get("/getdept", getDept);
};
