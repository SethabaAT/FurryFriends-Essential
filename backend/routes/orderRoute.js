import express from "express";
import { isUser } from "../middleware/authorization.js";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

router.route("/cartItems").post(isUser, createOrder);

export default router;
