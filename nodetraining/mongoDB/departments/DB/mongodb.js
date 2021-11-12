const mongoose = require("mongoose");

const URL = "mongodb://localhost/departments";

const connectDB = async () => {
  await mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
