import { kMaxLength } from "buffer";
import mongoose from "mongoose";
// const uploadImage = require('../uploadImage');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("post", postSchema);
