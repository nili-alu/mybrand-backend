
const User =require("../models/User");
const bcrypt = require("bcrypt");

// Create a new user
exports.createUser = async function (req, res) {
  const {email, password} = req.body;

  
  try {
    if (!(email, password)) {
      res.status(400).json({error: 'required field'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({email, password:hashedPassword});
    res.status(200).json({"status":"succuss", "code":200, "message":"user created successful"});

    // await user.save();
    // res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get a list of all users
exports.getUsers = async function (req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


// Get a user by ID
exports.getUserById = async function (req, res) {
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
};

// Update a user by ID
exports.updateUserById = async function (req, res) {
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
};

// Delete a user by ID
exports.deleteUserById = async function (req, res) {
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
};