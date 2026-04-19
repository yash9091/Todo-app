const User = require("../models/user.model");

const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      email,
      password,
      phone,
    });
    

    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
};



const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

   

    req.session.userId = user._id;

    res.json({
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    
    res.status(500).json({ message: "Login failed" });
  }
};


const logoutUser = (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out successfully" });
};


module.exports = { registerUser, loginUser, logoutUser };