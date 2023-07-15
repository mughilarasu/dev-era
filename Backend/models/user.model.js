const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
    },
    phonenumber: {
      type: Number,
      unique: true,
      required: true,
    },
    emailID: {
      type: String,
      unique: true,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
