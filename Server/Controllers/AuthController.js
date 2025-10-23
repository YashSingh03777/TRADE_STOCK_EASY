const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken"); // make sure file name exact hai

// Signup
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // production me enable karo
      sameSite: "strict",
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // production me enable karo
      sameSite: "strict",
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// User Verification
module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.json({ status: false });

    const decoded = require("jsonwebtoken").verify(token, createSecretToken.secret); // see note below
    const user = await User.findById(decoded.id);

    if (user) return res.json({ status: true, user: user.username });
    else return res.json({ status: false });
  } catch (err) {
    return res.json({ status: false });
  }
};
