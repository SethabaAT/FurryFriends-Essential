import express from "express";
import {
  register,
  login,
  registerManager,
} from "../controllers/userController.js";

// Router for the user
const router = express.Router();
router.route("/register").post(register);
router.route("/registerManager").post(registerManager);
router.route("/login").post(login);

export default router;
