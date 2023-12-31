import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../auth.js";

// Register Controller
export const register = async (req, res, next) => {
  try {
    let { firstName, secondName, email, password } = req.body;
    let user = new User(1, firstName, secondName, email, password, 0);
    user = await user.save();
    res.status(201).json({ message: "User Registered" });
    console.log(user);
  } catch (error) {
    console.error("Error Registering user", error);
    next(error);
  }
};

// Register Manager
export const registerManager = async (req, res, next) => {
  try {
    let { firstName, secondName, email, password } = req.body;
    let user = new User(1, firstName, secondName, email, password, 1);
    user = await user.save();
    res.status(201).json({ message: "Manager Registered" });
    console.log(user);
  } catch (error) {
    console.error("Error Registering Manager", error);
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
    console.log(user);
    if (!user) {
      res.status(401).json({ message: "User not found" });
      console.error("User not Found");
      return;
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      console.log("Login Successful");

      // Generate a token
      // But create a user payload before (basically I just wanna turn the user into a js object)
      const userPayload = {
        id: user.id,
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email,
        password: user.password,
        user_type: user.user_type,
      };
      const token = generateToken(userPayload);

      // Response to the endpoints
      res.status(200).json({
        message: "Login successful",
        name: user.firstName,
        surname: user.secondName,
        user_type: user.user_type,
        token: token,
      });
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
