import { kMaxLength } from "buffer";
import { Schema, model } from "mongoose";
// const uploadImage = require('../uploadImage');

const postSchema = Schema({
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

export default model("post", postSchema);
