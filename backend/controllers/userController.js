import User from "../models/User.js";
import bcrypt from "bcrypt";

// Register Controller
export const register = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;
    let user = new User(name, email, password);

    user = await user.save();
    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    console.log("Error Registering user", error);
    next(error);
  }
};

// Login Controller
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong...",
    });
  }
};
