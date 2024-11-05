const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const generateTokenAndSentCookie = require("../utils/generateToken.js");

const singup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password and save the user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girlusername=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // JWT TOKEN
      generateTokenAndSentCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "User not created" }); // Düzeltilmiş yazım
    }
  } catch (error) {
    console.error("Error on signup:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user?.password);

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" }); // Düzeltilmiş yazım
    }

    generateTokenAndSentCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error on login:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 }); // Çerez adı string olmalı
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    console.log("Error on logout:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  singup,
  login,
  logout,
};
