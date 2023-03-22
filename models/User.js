// user model
// import mongoose from "mongoose";
import mongoose from "mongoose";
import { compareSync } from "bcrypt";

// user schema
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, "user name require"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    
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

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function (password) {
  var user = this;

  return compareSync(password, user.password);
};

// return the model
export default mongoose.model("User", UserSchema);
