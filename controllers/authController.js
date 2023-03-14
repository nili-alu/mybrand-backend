// const User = require('../models/User');
const User =require("../models/User");
// const generateToken = require("../utils/generateToken");
const bcrypt =require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user with the given email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Compare the given password with the hashed password in the database
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // If the email and password are valid, generate a JWT token and send it in the response
    res.status(200).json({"status":"succuss", "code":200, "message":"login successful"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get all users
exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({"status":"succuss", "code":200, "message":"logged users",users});

  } catch (err) {
    res.status(404).json({ err: err , status:"404"});
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const post = await User.findById(req.params.id);
    res.status(200).json({"status":"succuss", "code":200, post});
   
  } catch (err) {
    res.status(404).json({ "err": err,status:"404"});
  }
};


exports.deleteOneUser = async (req, res) => {
  try {
    const removedPost = await User.remove({ _id: req.params.id });

    res.status(200).json({"status":"succuss", "code":200, "message":"user removed successful"});

  } catch (err) {
    res.status(404).json({ err:"comment id not found",status:"404"});
  }
};