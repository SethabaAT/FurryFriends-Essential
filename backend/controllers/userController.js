import User from "../models/User.js";
import bcrypt from "bcrypt";

// Register Controller
export const register = async (req, res, next) => {
  try {
    console.log("Hi");
    let { firstName, secondName, email, password } = req.body;
    let user = new User(firstName, secondName, email, password, 0);
    console.log("hi again");
    user = await user.save();
    res.status(201).json({ message: "User Registered" });
    console.log("User Registered");
  } catch (error) {
    console.error("Error Registering user", error);
    next(error);
  }
};

// Login Controller
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("User Input: ", email, password);

    // Find the user
    const user = await User.findByEmail(email);
    if (!user) {
      res.status(401).json({ message: "User not found" });
      console.error("User not Found");
      return;
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      console.log("Login Successful");
      res
        .status(200)
        .json({ message: "Login successful", user_type: user.user_type });
    } else {
      console.error("Invalid Credentials");
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong...",
    });
  }
};
