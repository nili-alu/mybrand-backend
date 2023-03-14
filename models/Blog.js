const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");
// const uploadImage = require('../uploadImage');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 2000,
  },
  image: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", postSchema);
