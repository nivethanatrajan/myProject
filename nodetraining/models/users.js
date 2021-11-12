const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// const departmentType = require("./departments");

const users = Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    department: [
      {
        type: Schema.Types.ObjectId,
        ref: "departments",
        required: true,

        // type: String,
        // required: true,
      },
    ],

    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", users);
