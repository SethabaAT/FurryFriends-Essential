import express from "express";
import { isUser } from "../middleware/authorization.js";

const router = express.Router();

router.route("/cartItems").post(isUser, createOrder);
router.route("/getUserOrders").get(isUser, getUserOrders);
router.route("/getOrder/:id").get(isUser, getOrderById);
router.route("/getOrderItems/:id").get(isUser, getOrderItems);

export default router;
