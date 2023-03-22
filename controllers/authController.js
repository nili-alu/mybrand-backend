// const User = require('../models/User');
import User from "../models/User.js";
// const loggedUsers = require("../models/loggedUsers");
// const generateToken = require("../utils/generateToken");
import { compare } from "bcrypt";

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if user with the given email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Compare the given password with the hashed password in the database
    const passwordMatches = await compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    //saving logged users
    // user = await loggedUsers.create({email, password:hashedPassword});

    res
      .status(200)
      .json({ status: "succuss", code: 200, message: "login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
