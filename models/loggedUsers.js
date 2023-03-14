
// user model
// import mongoose from "mongoose";
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const { Schema } = mongoose;


// user schema
var loginSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Email is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [3, "Password should have at least 8 characters"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// return the model
module.exports = mongoose.model("User", loginSchema);