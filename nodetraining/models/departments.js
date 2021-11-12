const mongoose = require("mongoose");

const departments = new mongoose.Schema(
  {
    dep_id: { type: String, required: true },
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("departments", departments);
