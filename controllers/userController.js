import expres from "express";
import User from "../models/User.js";
import { hash } from "bcrypt";

// Create a new user
export async function createUser (req, res) {
  const {name, email, password} = req.body;

  
  try {
    if (!(email, password)) {
      res.status(400).json({error: 'required field'});
    }

    const hashedPassword = await hash(password, 10);
    const user = await User.create({name, email, password:hashedPassword});
    res.status(200).json({"status":"succuss", "code":200, "message":"user created successful"});

    // await user.save();
    // res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}


// Get a list of all users
export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}


// Get a user by ID
export async function getUserById (req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

// Update a user by ID
export async function updateUserById (req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

// Delete a user by ID
export async function deleteUserById (req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}